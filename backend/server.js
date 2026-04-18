import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use(express.static(join(__dirname, 'public')))

const contactMessages = []

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const newMessage = {
    id: Date.now(),
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  }

  contactMessages.push(newMessage)

  console.log('New contact message:', newMessage)

  res.status(201).json({
    success: true,
    message: 'Message received successfully',
  })
})

app.get('/api/messages', (req, res) => {
  res.json(contactMessages)
})

app.get('/resume.pdf', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'resume.pdf'))
})

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
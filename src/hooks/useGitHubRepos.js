import { useState, useEffect } from 'react'

const GITHUB_API = 'https://api.github.com/users/Siddharthcoding/repos'

export function useGitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(GITHUB_API)
        if (!response.ok) throw new Error('Failed to fetch repositories')

        const data = await response.json()
        const sortedRepos = data
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 10)

        setRepos(sortedRepos)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return { repos, loading, error }
}
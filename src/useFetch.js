import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const abortCont = new AbortController()

    fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('Fetching failed')
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        setIsPending(false)
        setError([])
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetching aborted')
        } else {
          setError(err.message)
          setIsPending(false)
        }
      })

    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error }
}

export default useFetch;
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

export function useForm () {
  const [article, setArticle] = useState({
    title: '',
    description: ''
  })
  const router = useRouter()
  const params = useParams()

  useEffect(() => {
    async function loadArticle () {
      const res = await fetch(`/api/articles/${params.title}`)
      const [data] = await res.json()

      setArticle(data)
    }
    loadArticle()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await fetch(`/api/articles/${params.title}`, {
        method: 'PUT',
        body: JSON.stringify(article),
        headers: {
          'Content-type': 'application/json'
        }
      })
      const data = await res.json()

      if (res.status === 200) {
        router.push('/')
        router.refresh()
      }

      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value })
  }

  return { article, handleSubmit, handleChange }
}

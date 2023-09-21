import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function useForm () {
  const [newArticle, setNewArticle] = useState({
    title: '',
    description: ''
  })
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        body: JSON.stringify(newArticle),
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
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value })
  }

  return { newArticle, handleSubmit, handleChange }
}

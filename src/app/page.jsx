'use client'
import { useEffect, useState } from 'react'
import ActionButtons from '@/components/ActionButtons'

export default function Home () {
  const [articles, setArticles] = useState([])

  async function loadArticles () {
    const res = await fetch('/api/articles')
    const data = await res.json()
    setArticles(data)
  }

  useEffect(() => {
    loadArticles()
  }, [])

  return (
    <ul>
      {articles.map((article) => (
        <li
          key={article.title}
          className="border mb-7 p-5 rounded-md border-[#2d3c4e]"
        >
          <ActionButtons
            title={article.title}
            loadArticles={loadArticles}
            page={'Home'}
          />
          <h2 className="font-bold text-2xl">{article.title}</h2>
          <small>
            Created/Updated at:{' '}
            {new Date(article.updatedAt).toLocaleDateString()}
          </small>
          <p className="max-h-18 overflow-y-hidden">{article.description}</p>
        </li>
      ))}
    </ul>
  )
}

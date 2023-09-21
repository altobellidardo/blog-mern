/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import ActionButtons from '@/components/ActionButtons'

function Article () {
  const params = useParams()
  const [article, setArticle] = useState({
    title: '',
    description: ''
  })
  async function loadArticle () {
    const res = await fetch(`/api/articles/${params.title}`)
    const data = await res.json()

    setArticle(data[0])
  }

  useEffect(() => {
    loadArticle()
  }, [])

  return (
    <div className="p-5 rounded-md border border-[#2d3c4e]">
      <ActionButtons title={article.title} loadArticles={loadArticle} page />
      <h2 className="font-bold text-2xl">{article.title}</h2>
      <small>
        Created/Updated at: {new Date(article.updatedAt).toLocaleDateString()}
      </small>
      <p>{article.description}</p>
    </div>
  )
}

export default Article

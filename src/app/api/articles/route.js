import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/mongoose'
import Article from '@/models/Article'

export async function GET () {
  connectDB()
  const articles = await Article.find()

  return NextResponse.json(articles)
}

export async function POST (req) {
  try {
    const data = await req.json()
    const newArticle = new Article(data)
    const savedAricle = await newArticle.save()
    console.log(savedAricle)

    return NextResponse.json(savedAricle)
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}

import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/mongoose'
import Article from '@/models/Article'

export async function GET (req, { params }) {
  try {
    connectDB()
    const ArticleFound = await Article.find({ title: params.title })

    if (!ArticleFound) {
      return NextResponse.json({
        message: 'Article not found'
      }, {
        status: 404
      })
    }
    return NextResponse.json(ArticleFound)
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}

export async function DELETE (req, { params }) {
  try {
    const ArticleDeleted = await Article.findOneAndRemove({ title: params.title })

    if (!ArticleDeleted) {
      return NextResponse.json({
        message: 'Article not found'
      }, {
        status: 404
      })
    }
    return NextResponse.json(ArticleDeleted)
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}

export async function PUT (req, { params }) {
  try {
    const data = await req.json()
    const ArticleUpdate = await Article.findOneAndUpdate({ title: params.title }, data, {
      new: true
    })

    if (!ArticleUpdate) {
      return NextResponse.json({
        message: 'Article not found'
      }, { status: 404 })
    }
    return NextResponse.json(ArticleUpdate)
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}

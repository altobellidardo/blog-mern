import Link from 'next/link'
import { useRouter } from 'next/navigation'

function ActionButtons ({ title, loadArticles, page }) {
  const router = useRouter()
  async function handleDelete () {
    await fetch(`/api/articles/${title}`, {
      method: 'DELETE'
    })
    loadArticles()
    if (page !== 'Home') {
      router.push('/')
      router.refresh()
    }
  }

  return (
    <div className='mb-2'>
      {
        page === 'Home'
          ? (<Link
            href={`/article/${title}`}
            className="mr-2 mb-2 rounded-sm px-2 py-1 bg-cyan-600"
          >
            Read More
          </Link>)
          : ''
      }
      <Link
        href={`/edit/${title}`}
        className="mr-2 mb-2 rounded-sm px-2 py-1 bg-amber-500"
      >
        Edit
      </Link>
      <button
        onClick={handleDelete}
        className="rounded-sm px-2 py-1 bg-red-500"
      >
        Delete
      </button>
    </div>
  )
}

export default ActionButtons

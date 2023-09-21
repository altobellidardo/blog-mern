'use client'
import { useForm } from './logic'

function Create () {
  const { newArticle, handleSubmit, handleChange } = useForm()

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        value={newArticle.title}
        onChange={handleChange}
        type="text"
        name='title'
        id="title"
        className="block w-[400px] outline-none px-3 py-1 bg-[#202B38] rounded-sm focus:outline-[#22C55E] my-1"
      />
      <label htmlFor="description">Description</label>
      <textarea
        value={newArticle.description}
        onChange={handleChange}
        name="description"
        id="description"
        className="block w-[400px] outline-none px-3 py-1 bg-[#202B38] rounded-sm focus:outline-[#22C55E] my-1"
      />
      <button
        type="submit"
        className="bg-[#202B38] px-3 py-1 w-[400px] rounded-md mt-3 hover:bg-[#22C55E]"
      >
        Create Article
      </button>
    </form>
  )
}

export default Create

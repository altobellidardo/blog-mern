'use client'
import { useForm } from './logic'

function Edit () {
  const { article, handleSubmit, handleChange } = useForm()

  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center">
      <label htmlFor="title" className='w-[300px] md:w-[500px]'>Title</label>
      <input
        value={article.title}
        onChange={handleChange}
        type="text"
        name='title'
        id="title"
        className="block w-[300px] md:w-[500px] outline-none px-3 py-1 bg-[#202B38] rounded-sm focus:outline-[#22C55E]"
      />
      <label htmlFor="description" className='w-[300px] md:w-[500px]'>Description</label>
      <textarea
        value={article.description}
        onChange={handleChange}
        name="description"
        id="description"
        className="block w-[300px] md:w-[500px] outline-none px-3 py-1 bg-[#202B38] rounded-sm focus:outline-[#22C55E]"
      />
      <button
        type="submit"
        className="bg-[#202B38] px-3 py-1 w-[300px] md:w-[500px] rounded-md mt-3 hover:bg-[#22C55E]"
      >
        Edit Article
      </button>
    </form>
  )
}

export default Edit

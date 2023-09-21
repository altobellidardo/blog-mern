import Link from 'next/link'

function Header () {
  return (
    <div className='flex justify-between m-5'>
      <Link href='/' className='text-3xl font-bold'>Blog Articles</Link>
      <Link href='/create' className='bg-green-500 hover:bg-green-700 rounded-sm px-2 py-1 my-auto'>Create new article</Link>
    </div>
  )
}

export default Header

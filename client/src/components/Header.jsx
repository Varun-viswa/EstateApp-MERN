import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-emerald-100 '>
        <div className='flex justify-between items-stretch max-w-5xl mx-auto p-1'>
        <Link to='/'>
        <h1 className='font-bold text-sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Varun</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg'>
            <input type='text' placeholder='Search...' className='bg-transparent focus::outline-none w-64 sm:w-64'   />
            <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4 ' >
            <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/sign-in'>
            <li className=' text-slate-700 hover:underline'>Sign-In</li>
            </Link>
        </ul>
        </div>
    </header>
  )
}

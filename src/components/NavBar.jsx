import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav className=' bg-sky-500 '>
        <div className=' container mx-auto flex justify-between items-center text-white font-bold py-5'>
            <Link href='/'>
                <h1 className=' text-3xl cursor-pointer uppercase'>Task Manager</h1>
            </Link>
            <ul className=' flex  gap-5'>
                <li className=' cursor-pointer hover:text-amber-200'>
                    <Link href='/new-task'>Nueva Tarea</Link>
                </li>
                <li className=' cursor-pointer hover:text-amber-200'>
                    <Link href='/about'>Nosotros</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

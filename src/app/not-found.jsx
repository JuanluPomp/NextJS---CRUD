import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <section className=' flex h-[calc(100vh-20rem)] justify-center items-center'>
        <div className=' text-center'>
            <h1 className=' text-4xl font-bold'>
                Not Fond
            </h1>
            <Link 
                href='/'
                className=' text-2xl mt-5'
            >Volver al Inicio</Link>
        </div>
    </section>
  )
}

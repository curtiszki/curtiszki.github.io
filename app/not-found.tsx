import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center gap-y-2 sm:gap-y-1 md:gap-y-0'>
      <span className="block font-extrabold text-6xl sm:text-7xl md:text-8xl text-slate-100">
        Not Found
      </span>
      <p className="text-center sm:text-left">
        You appear to have gotten lost. Would you like to head&nbsp;
        <Link href="/" className="text-teal-400 hover:text-teal-300 text-lg">back?</Link>
      </p>
    </div>
  )
}

export default NotFound
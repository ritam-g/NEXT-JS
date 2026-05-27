import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex gap-4 p-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
  )
}

export default Navbar

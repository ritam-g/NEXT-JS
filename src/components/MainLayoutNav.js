import Link from 'next/link'
import React from 'react'

const MainLayoutNav = () => {
  return (
    <div className="flex gap-4 p-4">
      <Link href="/mainLayout">mainlayout</Link>    
      <Link href="/mainLayout/home">Home</Link>    
      <Link href="/mainLayout/about">About</Link>    
      <Link href="/mainLayout/contact">Contact</Link>    
    </div>
  )
}

export default MainLayoutNav

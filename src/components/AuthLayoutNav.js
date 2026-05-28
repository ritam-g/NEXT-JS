import Link from 'next/link'
import React from 'react'

const AuthLayoutNav = () => {
  return (
    <div className="flex gap-4 p-4">
        <Link href="/authlayout">authlayout</Link>
        <Link href="/authlayout/login">Login</Link>
        <Link href="/authlayout/register">Register</Link>
      </div>
  )
}

export default AuthLayoutNav

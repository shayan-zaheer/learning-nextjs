import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
        <ul className='flex justify-around'>
            <div className="logo">
                <h1 className='text-center'>Logo</h1>
            </div>

            <div className="link-container">
                <Link className='m-2 list-none no-underline' href="/">Home</Link> {/* always import this from next/link*/}
                <Link className='m-2 list-none no-underline' href="/users">Users</Link>
                <Link className='m-2 list-none no-underline' href="/portfolio">Portfolio</Link>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar
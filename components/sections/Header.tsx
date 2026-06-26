import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex justify-between items-center py-2 px-6 w-full'>
      <h2 className='text-lg font-semibold'>Atmos</h2>
      <nav>
        <ul className='flex items-center justify-center gap-12 list-none'>
          <li><Link href="/#pricing">Pricing</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

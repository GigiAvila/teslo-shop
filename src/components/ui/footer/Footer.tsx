import Link from 'next/link'
import React from 'react'
import { titleFont } from '@/config/fonts'

export const Footer = () => {
  return (
    <div className='flex w-full justify-center text-xs mb-10'>
      <Link href='/'>
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo{' '}
        </span>
        <span>| shop</span>
        <span>©2024</span>
      </Link>
      <Link href='/' className='mx-3'>
        Ubicaciones
      </Link>
    </div>
  )
}

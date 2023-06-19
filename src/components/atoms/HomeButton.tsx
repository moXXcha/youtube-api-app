import React from 'react'
import Home from '@/public/home.svg'
import Image from 'next/image'

export const HomeButton = () => {
  return (
    <div>
        <Image src={Home} width={18} height={22} alt="home"/>
        <label className=""></label>
    </div>
  )
}

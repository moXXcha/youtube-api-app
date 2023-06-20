import React from 'react'
import Image from 'next/image'
import user from '@/public/user.svg'

export const UserButton = () => {
  return (
    <button className="w-16 h-6 rounded-md hover:bg-secoundary"><Image src={user} width={12} height={18} alt="video" className="mx-auto" /></button>
  )
}

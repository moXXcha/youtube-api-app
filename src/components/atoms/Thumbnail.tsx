import React from 'react'
import Image from 'next/image'
import thumbnail from "@/public/hinano.jpeg"

export const Thumbnail = () => {
  return (
    <Image src={thumbnail} fill alt="thumbnail" />
  )
}

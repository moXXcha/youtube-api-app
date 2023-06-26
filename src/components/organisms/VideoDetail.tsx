import React from 'react'
import { Player } from '../atoms/Player'
import { VideoTitle } from '../atoms/VideoTitle'
import { Icon } from '../atoms/Icon'
import { UserName } from '../atoms/UserName'

export const VideoDetail = () => {
  return (
    <div className="mx-auto w-9/12">
        <Player />
        <div className="mt-3 w-fit">
          <VideoTitle size="large" />
          <div className="flex mt-3 space-x-4">
            <Icon situation="videoPage" />
            <UserName size="large" />
          </div>
        </div>
      </div>
  )
}

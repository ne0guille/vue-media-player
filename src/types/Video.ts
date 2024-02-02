import { MEDIA_TYPE, type Media } from './Media'

type VideoDetails = {
  type: typeof MEDIA_TYPE.VIDEO
  thumbnail: string
  description: string
  year?: number
}

export type Video = VideoDetails & Media

import type { MEDIA_TYPE, Media } from './Media'

type TrackDetails = {
  type: typeof MEDIA_TYPE.TRACK
  artist: string
  album: string
  image: string
  preview: string
  year?: number
}

export type Track = Media & TrackDetails

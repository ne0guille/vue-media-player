import type { Track } from './Track'
import type { Video } from './Video'

export type Media = {
  id: string | number
  type: MediaType
  title: string
  url: string
  duration: number
}

export const MEDIA_TYPE = {
  TRACK: 'track',
  VIDEO: 'video'
} as const

export type MediaType = (typeof MEDIA_TYPE)[keyof typeof MEDIA_TYPE]

export type MediaSource = Video | Track

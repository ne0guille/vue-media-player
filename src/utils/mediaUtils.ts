import type { Media, MediaType } from '@/types/Media'
import { MEDIA_TYPE } from '@/types/Media'
import type { Track } from '@/types/Track'
import type { Video } from '@/types/Video'
import TrackItem from '@/components/TrackItem.vue'
import VideoItem from '@/components/Player/VideoItem.vue'

type FormatFunction<T extends Media> = (media: T) => string

const formatTrack: FormatFunction<Track> = (track) => `Track: ${track.title} by ${track.artist}`
const formatVideo: FormatFunction<Video> = (video) => `Video: ${video.title}`

type MediaFormatFunctions = {
  [K in MediaType]: FormatFunction<Extract<Media, { type: K }>>
}

export const formatFunctions: Record<MediaType, FormatFunction<Media>> = {
  [MEDIA_TYPE.TRACK]: formatTrack as FormatFunction<Media>,
  [MEDIA_TYPE.VIDEO]: formatVideo as FormatFunction<Media>
}

const componentMap: Record<MediaType, any> = {
  track: TrackItem,
  video: VideoItem
}

export const getComponentType = (item: Media) => {
  return componentMap[item.type]
}

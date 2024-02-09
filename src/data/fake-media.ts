import { MEDIA_TYPE, type Media } from '@/types/Media'
import type { Track } from '@/types/Track'
import type { Video } from '@/types/Video'

export const mockedMediaList = [
  {
    id: 1,
    title: 'Saudades',
    type: MEDIA_TYPE.TRACK,
    duration: 180,
    artist: 'Duda Nunes',
    album: 'Album 1',
    year: 2021,
    url: '/Duda_Nunes-Saudades.mp3',
    image:
      'https://media.istockphoto.com/id/1401070056/es/foto/hombre-mayor-tocando-la-pandereta-en-casa.jpg?s=612x612&w=0&k=20&c=rVbb9y8_4Tcok3CBg08rqsTXUurA0l2pU_TWVM06_Z8='
  } as Track,
  {
    id: 2,
    title: 'O que a gente tem',
    artist: 'Banda do Vento',
    album: 'Album 2',
    year: 2021,
    url: '/Banda_do_Vento-O_que_a_gente_tem.mp3',
    type: MEDIA_TYPE.TRACK,
    duration: 180,
    preview: 'test.mp3',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZEFDI0RP1i5cSf5Wd4bHTL0WJ1Y6hOA_Idw&usqp=CAU'
  } as Track,
  {
    id: 3,
    title: 'In the Summer',
    artist: 'Maiya',
    album: 'Album 3',
    year: 2021,
    url: '/Maiya_-_In_the_Summer.mp3',
    type: MEDIA_TYPE.TRACK,
    duration: 180,
    preview: 'test.mp3'
  } as Track,
  {
    id: 4,
    title: 'Video 1',
    thumbnail: 'https://i.ytimg.com/vi/5qap5aO4i9A/hqdefault.jpg',
    url: '/nieve.mp4',
    duration: 180,
    description: 'test',
    type: MEDIA_TYPE.VIDEO
  } as Video
] as Media[]

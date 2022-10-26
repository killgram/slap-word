import Sound from 'react-native-sound'
import { SoundTypes, SoundList } from '@utils'

/**
 * @description func to play know sound effect
 * @param {SoundTypes} type
 * @param {boolean} loop
 */
const playSound = (type: SoundTypes, loop?: boolean) => {
  const file = soundAdapter(type)
  if (file) {
    soundPlayer(file, loop)
  } else {
    // TODO add error toast here
    console.log("Can't play sound effect")
  }
}

/**
 * @description sound adapter
 * @param {SoundTypes} type
 * @return {unknown} sound file or null
 */
const soundAdapter = (type: SoundTypes) => {
  return SoundList[type] ?? null
}

/**
 * @description sound player
 * @param {unknown} file
 * @param {boolean} loop
 */
const soundPlayer = (file: unknown, loop?: boolean) => {
  Sound.setCategory('Playback')
  const sound = new Sound(file, () => {
    sound.setVolume(0.3)
    sound.play((_) => {
      if (loop) {
        soundPlayer(file, loop)
      }
    })
  })
}

export { playSound }

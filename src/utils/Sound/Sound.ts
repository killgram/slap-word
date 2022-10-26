import Sound from 'react-native-sound'
import { SoundTypes, SoundList, errorToast } from '@utils'

/**
 * @description func to play know sound effect
 * @param {SoundTypes} type
 */
const playSound = (type: SoundTypes) => {
  const file = soundAdapter(type)
  if (file) {
    soundPlayer(file)
  } else {
    errorToast('Не могу воспроизвести 😔')
  }
}

/**
 * @description func to get sound instance
 * @param type
 */
const getSound = (type: SoundTypes): Sound => {
  const file = soundAdapter(type)
  Sound.setCategory('Playback')
  const sound = new Sound(file, () => {
    sound.setVolume(0.1)
  })

  return sound
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
 */
const soundPlayer = (file: unknown) => {
  Sound.setCategory('Playback')
  const sound = new Sound(file, () => {
    sound.setVolume(0.1)
    sound.play()
  })
}

export { playSound, getSound }

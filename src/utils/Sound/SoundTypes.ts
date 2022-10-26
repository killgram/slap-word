import soundtrackSound from '@assets/audio/soundtrack.mp3'
import wrongWordSound from '@assets/audio/barking.mp3'

enum SoundTypes {
  SOUNDTRACK = 'SOUNDTRACK',
  WRONG_WORD = 'WRONG_WORD',
}

const SoundList = {
  SOUNDTRACK: soundtrackSound,
  WRONG_WORD: wrongWordSound,
}

export { SoundTypes, SoundList }

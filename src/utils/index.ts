import {
  width,
  height,
  sp,
  radius,
  screenWidth,
  screenHeight,
} from './Responsive'
import {
  ImageStyleType,
  RNStyleType,
  ThemeType,
  IThemes,
  getThemeColor,
  getThemeGradient,
  IStatusBarThemes,
  getThemeStatusBar,
} from './Theme'
import {
  playSound,
  SoundTypes,
  SoundList,
  getSound,
  playWrongSound,
} from './Sound'
import { errorToast, successToast } from './Toast'
import { getAccessTokenConfig } from './GetAccessTokenConfig'
import { copyToClipboard, getDataToBuffer } from './Clipboard'
import { keyGenerate } from './KeyGenerate'
import { openLink } from './OpenLink'
import { gamePossibility } from './GamePossibility'
import { getQueryParamsConfig } from './GetQueryParamsConfig'
import { generateKeyboardConfig } from './KeyboardUtils'
import { numberToArray } from './NumberToArray'
import { generateTableConfig } from './TableUtils'
import { getInputWord } from './GetInputWord'

export {
  width,
  screenWidth,
  screenHeight,
  height,
  sp,
  radius,
  getThemeColor,
  getThemeGradient,
  getThemeStatusBar,
  playSound,
  SoundTypes,
  SoundList,
  errorToast,
  successToast,
  getSound,
  getAccessTokenConfig,
  copyToClipboard,
  getDataToBuffer,
  keyGenerate,
  openLink,
  gamePossibility,
  getQueryParamsConfig,
  generateKeyboardConfig,
  numberToArray,
  generateTableConfig,
  getInputWord,
  playWrongSound,
}

export type {
  RNStyleType,
  ImageStyleType,
  ThemeType,
  IThemes,
  IStatusBarThemes,
}

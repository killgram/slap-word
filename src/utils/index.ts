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
import { playSound, SoundTypes, SoundList, getSound } from './Sound'
import { errorToast, successToast } from './Toast'
import { getAccessTokenConfig } from './GetAccessTokenConfig'
import { copyToClipboard, getDataToBuffer } from './Clipboard'
import { keyGenerate } from './KeyGenerate'

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
}

export type {
  RNStyleType,
  ImageStyleType,
  ThemeType,
  IThemes,
  IStatusBarThemes,
}

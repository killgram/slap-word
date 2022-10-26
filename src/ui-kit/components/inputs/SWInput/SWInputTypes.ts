import React from 'react'
import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native'
import { RNStyleType } from '@utils'

export interface ISWInputProps extends TextInputProps {
  inputContainerStyle?: RNStyleType
  disabled?: boolean
  onEndEditing?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void
  inputStyle?: RNStyleType
  error?: string
  defaultValue?: string
  errorStyle?: RNStyleType
  label?: string
  labelStyle?: RNStyleType
  SWContainerStyle?: RNStyleType
  rightElement?: React.ReactNode
  children?: React.ReactChild
}

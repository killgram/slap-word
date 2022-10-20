import React from 'react'
import { RNStyleType } from '@utils'
import { ViewProps } from 'react-native'

export interface ISWKeyShiftProps extends ViewProps {
  children?: React.ReactNode
  disabledKeyboardDismiss?: boolean
  style?: RNStyleType
  enabled?: boolean
}

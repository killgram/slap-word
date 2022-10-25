import { ISWModalTypes } from '../SWModal/SWModalTypes'
import { StyleProp, ViewStyle } from 'react-native'

export interface ISWCenterModalTypes extends ISWModalTypes {
  modalStyles?: StyleProp<ViewStyle>
}

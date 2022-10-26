import React from 'react'

import { StyleSheet, View } from 'react-native'
import getStyle from './ToastCustomStyles'
import { SWText } from '@ui-kit/components'
import { IToastCustomProps } from './ToastCustomTypes'

/**
 * @description custom toast component
 * @param {IToastCustomProps} props
 * @constructor
 */
const ToastCustom = (props: IToastCustomProps) => {
  const { text, isSuccess } = props
  const styles = getStyle()

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        isSuccess ? styles.successContainer : styles.errorContainer,
      ])}
    >
      <SWText isTitle style={styles.text}>
        {text}
      </SWText>
    </View>
  )
}

export default ToastCustom

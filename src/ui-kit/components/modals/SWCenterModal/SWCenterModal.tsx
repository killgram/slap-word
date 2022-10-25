import React from 'react'
import { SWModal } from '@ui-kit/components'
import { StyleSheet, View } from 'react-native'
import { ISWCenterModalTypes } from './SWCenterModalTypes'
import getStyle from './SWCenterModalStyles'

/**
 *
 * @param {ISWCenterModalTypes} props
 * @return {JSX}
 */
const SWCenterModal = (props: ISWCenterModalTypes) => {
  const { closeHandler, children, modalStyles, isVisible = false } = props

  const styles = getStyle()

  return (
    <SWModal
      isVisible={isVisible}
      closeHandler={closeHandler}
      animationType="fade"
      containerStyles={styles.modalContainer}
    >
      <View style={StyleSheet.flatten([styles.modal, modalStyles])}>
        {children}
      </View>
    </SWModal>
  )
}

export default SWCenterModal

import React from 'react'
import getStyle from './ExitTournamentModalStyles'
import { SWButton, SWCenterModal, SWIcon, SWText } from '@ui-kit/components'
import { IExitTournamentModalProps } from './ExitTournamentModalTypes'
import { getThemeColor } from '@utils'
import { StyleSheet, View } from 'react-native'

/**
 * @description exit in tournament game modal
 * @param {IExitTournamentModalProps} props
 * @constructor
 */
const ExitTournamentModal = (props: IExitTournamentModalProps) => {
  const { visible, closeHandler, score, closeModalHandler } = props
  const styles = getStyle()

  return (
    <SWCenterModal isVisible={visible} closeHandler={closeModalHandler}>
      <SWText isTitle inTheCenter style={styles.topTitle}>
        Уверены, что хотите выйти?
      </SWText>
      <SWText
        isTitle
        inTheCenter
        color={getThemeColor('LINK_TEXT')}
        style={styles.topTitle}
      >
        {`Текущий счет: ${score}`}
      </SWText>

      <View style={styles.btnBox}>
        <SWButton
          title="Да"
          style={StyleSheet.flatten([styles.btn, styles.closeBtn])}
          onPress={closeHandler}
        />
        <SWButton title="Нет" style={styles.btn} onPress={closeModalHandler} />
      </View>
    </SWCenterModal>
  )
}

export default ExitTournamentModal

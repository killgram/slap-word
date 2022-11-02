import React from 'react'
import getStyle from './WinNormalModalStyles'
import { SWButton, SWCenterModal, SWIcon, SWText } from '@ui-kit/components'
import { IWinNormalModalProps } from './WinNormalModalTypes'
import { getThemeColor } from '@utils'

/**
 * @description win classic game modal
 * @param {IWinNormalModalProps} props
 * @constructor
 */
const WinNormalModal = (props: IWinNormalModalProps) => {
  const { visible, closeHandler } = props
  const styles = getStyle()

  return (
    <SWCenterModal isVisible={visible} closeHandler={closeHandler}>
      <SWIcon
        iconName="winner"
        iconSize={80}
        iconColor={getThemeColor('WINNER_ICON')}
      />
      <SWText isTitle inTheCenter style={styles.topTitle}>
        Поздравляем, Вы выиграли!
      </SWText>

      <SWButton title="Закрыть" style={styles.btn} onPress={closeHandler} />
    </SWCenterModal>
  )
}

export default WinNormalModal

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
  const { visible, closeHandler, onPlayAgain, hitWord } = props
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

      <SWText style={styles.hitWord} isTitle color={getThemeColor('LINK_TEXT')}>
        {hitWord}
      </SWText>

      {onPlayAgain && (
        <SWButton
          style={styles.btn}
          title="Сыграть еще раз"
          onPress={onPlayAgain}
        />
      )}

      <SWButton title="Закрыть" style={styles.btn} onPress={closeHandler} />
    </SWCenterModal>
  )
}

export default WinNormalModal

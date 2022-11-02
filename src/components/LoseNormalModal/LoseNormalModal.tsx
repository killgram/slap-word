import React from 'react'
import getStyle from './LoseNormalModalStyles'
import { SWButton, SWCenterModal, SWIcon, SWText } from '@ui-kit/components'
import { ILoseNormalModalProps } from './LoseNormalModalTypes'
import { getThemeColor } from '@utils'

/**
 * @description lose classic game modal
 * @param {ILoseNormalModalProps} props
 * @constructor
 */
const LoseNormalModal = (props: ILoseNormalModalProps) => {
  const { visible, closeHandler, hitWord } = props
  const styles = getStyle()

  return (
    <SWCenterModal isVisible={visible} closeHandler={closeHandler}>
      <SWIcon
        iconName="loser"
        iconColor={getThemeColor('LOSER_ICON')}
        iconSize={80}
      />
      <SWText isTitle inTheCenter style={styles.topTitle}>
        Вы проиграли. Правильное слово:
      </SWText>
      <SWText style={styles.hitWord} isTitle color={getThemeColor('LINK_TEXT')}>
        {hitWord}
      </SWText>

      <SWText>Попытайте удачу в другой раз</SWText>

      <SWButton style={styles.btn} title="Закрыть" onPress={closeHandler} />
    </SWCenterModal>
  )
}

export default LoseNormalModal

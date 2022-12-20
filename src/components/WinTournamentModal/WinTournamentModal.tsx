import React from 'react'
import getStyle from './WinTournamentModalStyles'
import { SWButton, SWCenterModal, SWIcon, SWText } from '@ui-kit/components'
import { IWinTournamentModalProps } from './WinTournamentModalTypes'
import { getThemeColor } from '@utils'

/**
 * @description win tournament game modal
 * @param {IWinTournamentModalProps} props
 * @constructor
 */
const WinTournamentModal = (props: IWinTournamentModalProps) => {
  const { visible, closeHandler, hitWord, score, newScore } = props
  const styles = getStyle()

  return (
    <SWCenterModal isVisible={visible} closeHandler={closeHandler}>
      <SWIcon
        iconName="winner"
        iconSize={80}
        iconColor={getThemeColor('WINNER_ICON')}
      />
      <SWText isTitle inTheCenter style={styles.topTitle}>
        Раунд пройден!
      </SWText>

      <SWText style={styles.hitWord} isTitle color={getThemeColor('LINK_TEXT')}>
        {hitWord}
      </SWText>

      <SWText isTitle inTheCenter style={styles.bottomTitle}>
        Изменение счета:
      </SWText>

      <SWText isTitle inTheCenter style={styles.scoreBox}>
        {`${score}  >>>  ${newScore}`}
      </SWText>
      <SWButton title="Дальше" style={styles.btn} onPress={closeHandler} />
    </SWCenterModal>
  )
}

export default WinTournamentModal

import React from 'react'
import getStyle from './LoseNormalModalStyles'
import { SWButton, SWCenterModal, SWIcon, SWText } from '@ui-kit/components'
import { ILoseNormalModalProps } from './LoseNormalModalTypes'
import { getThemeColor } from '@utils'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'

/**
 * @description lose classic game modal
 * @param {ILoseNormalModalProps} props
 * @constructor
 */
const LoseNormalModal = (props: ILoseNormalModalProps) => {
  const { visible, closeHandler, hitWord, isPostLoading, onPostWord } = props
  const styles = getStyle()

  /**
   * @description close modal with send wrong word
   */
  const onIncorrectClose = () => {
    onPostWord?.()
    closeHandler?.()
  }

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

      <SWText style={styles.bottomTitle} inTheCenter>
        В следующий раз повезет 😔
      </SWText>

      {isPostLoading ? (
        <View style={styles.indicatorBox}>
          <ActivityIndicator size="small" />
        </View>
      ) : (
        <TouchableOpacity
          style={styles.incBox}
          activeOpacity={0.8}
          onPress={onIncorrectClose}
        >
          <SWText style={styles.incTitle}>Слово не правильное! 😱</SWText>
        </TouchableOpacity>
      )}

      <SWButton style={styles.btn} title="Закрыть" onPress={closeHandler} />
    </SWCenterModal>
  )
}

export default LoseNormalModal

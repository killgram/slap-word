import React from 'react'
import { View } from 'react-native'
import { SWText } from '@ui-kit/components'
import { IPanelContentWaitingTypes } from './PanelContentWaitingTypes'
import styles from './PanelContentWaitingStyles'

/**
 * @param { IPanelContentWaitingTypes } props
 * @return { JSX }
 */
const PanelContentWaiting = (props: IPanelContentWaitingTypes) => {
  const { title, contentElement } = props

  return (
    <View style={styles.container}>
      {contentElement || (
        <SWText isSecondary style={styles.textContent}>
          {title || 'Пусто'}
        </SWText>
      )}
    </View>
  )
}

export default PanelContentWaiting

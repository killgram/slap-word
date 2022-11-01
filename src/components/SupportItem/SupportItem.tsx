import React from 'react'
import getStyle from './SupportItemStyles'
import { SWCombineItem, SWIconButton, SWText } from '@ui-kit/components'
import { ISupportItemProps } from './SupportItemTypes'
import { getThemeColor } from '@utils'

/**
 * @description support item component
 * @param {ISupportItemProps} props
 * @constructor
 */
const SupportItem = (props: ISupportItemProps) => {
  const { bodyTitle, onCopy } = props
  const styles = getStyle()

  return (
    <SWCombineItem
      bodyElement={
        <SWText isTitle color={getThemeColor('TITLE_ITEMS')}>
          {bodyTitle}
        </SWText>
      }
      noPadding
      rightElement={
        <SWIconButton
          iconName="copy"
          iconColor={getThemeColor('TITLE_ITEMS')}
          onPress={onCopy}
        />
      }
      style={styles.container}
    />
  )
}

export default SupportItem

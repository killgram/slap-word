import React from 'react'
import getStyle from './AboutAppItemStyles'
import { SWCombineItem, SWText } from '@ui-kit/components'
import { IAboutAppItemProps } from './AboutAppItemTypes'
import { getThemeColor, openLink } from '@utils'
import { TouchableOpacity } from 'react-native'

/**
 * @description about app item component
 * @param {IAboutAppItemProps} props
 * @constructor
 */
const AboutAppItem = (props: IAboutAppItemProps) => {
  const { title, executeTitle, isExecuteLink } = props
  const styles = getStyle()

  return (
    <SWCombineItem
      bodyElement={<SWText isTitle>{title}</SWText>}
      noPadding
      rightElement={
        isExecuteLink ? (
          <TouchableOpacity
            onPress={() => openLink(executeTitle)}
            activeOpacity={0.7}
          >
            <SWText isTitle color={getThemeColor('LINK_TEXT')}>
              Ссылка
            </SWText>
          </TouchableOpacity>
        ) : (
          <SWText isTitle>{executeTitle}</SWText>
        )
      }
      style={styles.container}
    />
  )
}

export default AboutAppItem

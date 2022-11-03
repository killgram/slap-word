import React from 'react'
import getStyle from './ClassicGameHeaderStyles'
import { SWCombineItem, SWIconButton, SWText } from '@ui-kit/components'
import { IClassicGameHeaderProps } from './ClassicGameHeaderTypes'
import { getThemeColor } from '@utils'
import { ActivityIndicator } from 'react-native'

/**
 * @description classic game header
 * @param {IClassicGameHeaderProps} props
 * @constructor
 */
const ClassicGameHeader = (props: IClassicGameHeaderProps) => {
  const { title, onExit, isLoading } = props
  const styles = getStyle()

  return (
    <SWCombineItem
      leftElement={<SWIconButton iconName="back" onPress={onExit} />}
      bodyElement={
        <SWText inTheCenter isTitle>
          {title}
        </SWText>
      }
      rightElement={
        <ActivityIndicator
          color={
            !isLoading
              ? getThemeColor('BACKGROUND')
              : getThemeColor('ACTIVITY_INDICATOR')
          }
        />
      }
      noPadding
      style={styles.container}
    />
  )
}

export default ClassicGameHeader

import React from 'react'
import getStyle from './TopScoreListItemStyles'
import { SWCombineItem, SWText } from '@ui-kit/components'
import { ITopScoreListItemProps } from './TopScoreListItemTypes'
import { StyleSheet } from 'react-native'

/**
 * @description top score list item component
 * @param {ITopScoreListItemProps} props
 * @constructor
 */
const TopScoreListItem = (props: ITopScoreListItemProps) => {
  const { name, maxScore, indexNum } = props
  const styles = getStyle()

  return (
    <SWCombineItem
      leftElement={
        <SWText
          isTitle
          size={Boolean(indexNum < 4) ? 22 : 18}
          style={styles.number}
        >
          {`${indexNum}.`}
        </SWText>
      }
      bodyElement={<SWText isTitle>{name}</SWText>}
      rightElement={<SWText isTitle>{maxScore}</SWText>}
      style={StyleSheet.flatten([
        styles.container,
        Boolean(indexNum < 4) && styles.topScore,
      ])}
      noPadding
    />
  )
}

export default TopScoreListItem

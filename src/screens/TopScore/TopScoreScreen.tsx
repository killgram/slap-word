import React, { useEffect, useLayoutEffect } from 'react'
import { ITopScoreScreenTypesProps } from './TopScoreScreenTypes'
import getStyle from './TopScoreScreenStyles'
import { SWContainer, SWList, SWText } from '@ui-kit/components'
import { TopScoreListItem } from '@components'

/**
 * @description TopScoreScreen
 * @param {ITopScoreScreenTypesProps} props
 * @return {JSX}
 */
const TopScoreScreen = (props: ITopScoreScreenTypesProps) => {
  const { navigation, maxScore, getTopScore, list, isLoading } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: 'Список лучших',
    })
  }, [])

  useEffect(() => {
    !list && getTopScore?.()
  }, [])

  return (
    <SWContainer isTransparentHeader isKeyBoardDismiss={false}>
      <SWText inTheCenter isTitle size={20}>
        Ваш лучший счет:
      </SWText>
      <SWText inTheCenter isTitle style={styles.maxScore}>
        {maxScore}
      </SWText>

      <SWList
        isBounces
        listItems={list}
        onRefresh={getTopScore}
        isRefreshing={isLoading}
        listStyles={styles.listStyle}
        renderListItem={({ item, index }) => (
          <TopScoreListItem
            indexNum={index + 1}
            name={item.name}
            maxScore={item.maxScore}
          />
        )}
      />
    </SWContainer>
  )
}

export default TopScoreScreen

import React from 'react'
import getStyle from './TournamentHeaderStyles'
import { SWCombineItem, SWIconButton, SWText } from '@ui-kit/components'
import { ITournamentHeaderProps } from './TournamentHeaderTypes'
import { countForm, getThemeColor } from '@utils'
import { ActivityIndicator, View } from 'react-native'

/**
 * @description tournament game header
 * @param {ITournamentHeaderProps} props
 * @constructor
 */
const TournamentHeader = (props: ITournamentHeaderProps) => {
  const { wordLength, onExit, isLoading, score, round } = props
  const styles = getStyle()

  return (
    <SWCombineItem
      leftElement={<SWIconButton iconName="back" onPress={onExit} />}
      bodyElement={
        <>
          <SWText inTheCenter isTitle>
            {`${wordLength} ${countForm(Number(wordLength), [
              'буква',
              'буквы',
              'букв',
            ])}`}
          </SWText>
          <View style={styles.roundScoreBox}>
            <SWText isTitle>{`раунд - ${round},`}</SWText>
            <SWText isTitle>{` счет - ${score}`}</SWText>
          </View>
        </>
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

export default TournamentHeader

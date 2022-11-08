import React, { useLayoutEffect } from 'react'
import { IGameChooseScreenTypesProps } from './GameChooseScreenTypes'
import getStyle from './GameChooseScreenStyles'
import { SWButton, SWContainer, SWText } from '@ui-kit/components'
import { Navigate } from '@navigators'
import { gamePossibility } from '@utils'

/**
 * @description GameChooseScreen
 * @param {IGameChooseScreenTypesProps} props
 * @return {JSX}
 */
const GameChooseScreen = (props: IGameChooseScreenTypesProps) => {
  const { navigation, wordOfDayTime } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: 'Выберите тип игры',
    })
  }, [])

  return (
    <SWContainer isTransparentHeader>
      <SWText inTheCenter style={styles.title}>
        Отгадайте "Слово дня"! Режим доступен один раз в день
      </SWText>
      <SWButton
        isDisabled={!gamePossibility(wordOfDayTime)}
        title="Слово дня"
        onPress={() => Navigate.toWordOfTheDayScreen()}
      />

      <SWText inTheCenter style={styles.title}>
        Сыграйте в обычном режиме, отгадав слово выбранной длины
      </SWText>
      <SWButton
        title="Обычная игра"
        onPress={Navigate.toChooseDifficultScreen}
      />

      <SWText inTheCenter style={styles.title}>
        Пройдите режим "Турнир", заработав максимальное количество очков!
      </SWText>
      <SWButton title="Турнир" onPress={Navigate.toTournamentScreen} />
    </SWContainer>
  )
}

export default GameChooseScreen

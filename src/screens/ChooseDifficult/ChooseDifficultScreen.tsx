import React, { useLayoutEffect, useState } from 'react'
import { IChooseDifficultTypesProps } from './ChooseDifficultScreenTypes'
import getStyle from './ChooseDifficultScreenStyles'
import { SWButton, SWContainer } from '@ui-kit/components'
import { countForm, keyGenerate, numberToArray } from '@utils'
import { GameConfig } from '@configurations'
import { DifficultItem } from '@components'
import { View } from 'react-native'
import { Navigate } from '@navigators'

/**
 * @description ChooseDifficult
 * @param {IChooseDifficultTypesProps} props
 * @return {JSX}
 */
const ChooseDifficult = (props: IChooseDifficultTypesProps) => {
  const { navigation } = props
  const styles = getStyle()
  const [difficult, setDifficult] = useState(5)

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: 'Выберите сложность',
    })
  }, [])

  const chosenLength = numberToArray(
    GameConfig.MAX_WORD_LENGTH + 1 - GameConfig.MIN_WORD_LENGTH,
  )

  const onChoseDifficult = (value: number) => {
    setDifficult(value)
  }

  const renderItems = () => {
    return chosenLength.map((item, index) => {
      return (
        <DifficultItem
          key={keyGenerate()}
          value={GameConfig.MIN_WORD_LENGTH + index}
          onPress={onChoseDifficult}
          isActive={GameConfig.MIN_WORD_LENGTH + index === difficult}
        />
      )
    })
  }

  return (
    <SWContainer isTransparentHeader>
      <View style={styles.topSection}>{renderItems()}</View>

      <View style={styles.bottomSection}>
        <SWButton
          title={`Начать игру (${difficult} ${countForm(difficult, [
            'буква',
            'буквы',
            'букв',
          ])})`}
          onPress={() => Navigate.toWordOfTheDayScreen(String(difficult))}
        />
      </View>
    </SWContainer>
  )
}

export default ChooseDifficult

import React, { useEffect, useLayoutEffect, useState } from 'react'
import { IWordOfTheDayTypesProps } from './WordOfTheDayScreenTypes'
import getStyle from './WordOfTheDayScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'
import { ActivityIndicator, View } from 'react-native'
import { KeyboardPanel } from '@components'
import { getThemeColor } from '@utils'

/**
 * @description WordOfTheDay
 * @param {IWordOfTheDayTypesProps} props
 * @return {JSX}
 */
const WordOfTheDay = (props: IWordOfTheDayTypesProps) => {
  const {
    navigation,
    updateWordOfDayLastTime,
    getWordOfTheDay,
    keyboardWords,
    isLoading,
    hitWord = '',
    checkWordRequest,
  } = props
  const styles = getStyle()
  const [inputWord, setInputWord] = useState('')

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: () => null,
      headerLeft: () => null,
    })
  }, [])

  useEffect(() => {
    getWordOfTheDay?.()
  }, [])

  /**
   * @description handle input word in line
   * @param {string} word
   */
  const handleInputWord = (word: string) => {
    inputWord.length < hitWord.length && setInputWord(inputWord + word)
  }

  /**
   * @description handle delete word from line
   */
  const handleDeleteWord = () => {
    setInputWord(inputWord.slice(0, -1))
  }

  /**
   * @description check word
   */
  const handlePressWord = () => {
    checkWordRequest?.(inputWord)
  }

  return isLoading ? (
    <View style={styles.indicatorContainer}>
      <SWText isTitle style={styles.indicatorTitle}>
        Загружаем уровень
      </SWText>
      <ActivityIndicator
        size="large"
        color={getThemeColor('ACTIVITY_INDICATOR')}
      />
    </View>
  ) : (
    <SWContainer isKeyBoardDismiss={false}>
      <View style={styles.sectionTop}>
        <SWText isTitle size={20}>
          {inputWord.toUpperCase()}
        </SWText>
      </View>

      <View style={styles.sectionBottom}>
        <KeyboardPanel
          wordList={keyboardWords!}
          onPressWord={handleInputWord}
          onDeleteWord={handleDeleteWord}
          onCheckWord={handlePressWord}
          isCheckPossible={inputWord.length < hitWord.length}
        />
      </View>
    </SWContainer>
  )
}

export default WordOfTheDay

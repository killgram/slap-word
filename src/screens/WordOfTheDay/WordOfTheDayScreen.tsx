import React, { useEffect, useLayoutEffect, useState } from 'react'
import { IWordOfTheDayTypesProps } from './WordOfTheDayScreenTypes'
import getStyle from './WordOfTheDayScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'
import { ActivityIndicator, View } from 'react-native'
import { KeyboardPanel, WinNormalModal, LoseNormalModal } from '@components'
import { getThemeColor } from '@utils'
import { GameConfig } from '@configurations'

/**
 * @description WordOfTheDay
 * @param {IWordOfTheDayTypesProps} props
 * @return {JSX}
 */
const WordOfTheDay = (props: IWordOfTheDayTypesProps) => {
  const {
    navigation,
    closeGame,
    getWordOfTheDay,
    keyboardWords,
    isLoading,
    hitWord = '',
    checkWordRequest,
    isHit,
    isCheckLoading,
  } = props
  const styles = getStyle()
  const [inputWord, setInputWord] = useState('')
  const [currentTry, setCurrentTry] = useState(0)
  const [isWinModalVisible, setIsWinModalVisible] = useState(false)
  const [isLoseModalVisible, setIsLoseModalVisible] = useState(false)

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
    setCurrentTry(currentTry + 1)
  }

  useEffect(() => {
    if (isHit) {
      setIsWinModalVisible(true)
    } else if (
      currentTry >= GameConfig.WORD_OF_THE_DAY_LENGTH &&
      !isCheckLoading
    ) {
      setIsLoseModalVisible(true)
    }
  }, [currentTry, isCheckLoading, isHit])

  /**
   * @description close modals handler
   */
  const handleCloseModal = () => {
    setIsWinModalVisible(false)
    setIsLoseModalVisible(false)
    closeGame?.()
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
        <SWText isTitle size={20}>
          {hitWord}
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

      <WinNormalModal
        visible={isWinModalVisible}
        closeHandler={handleCloseModal}
      />
      <LoseNormalModal
        visible={isLoseModalVisible}
        closeHandler={handleCloseModal}
        hitWord={hitWord}
      />
    </SWContainer>
  )
}

export default WordOfTheDay

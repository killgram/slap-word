import React, { useEffect, useLayoutEffect, useState } from 'react'
import { IWordOfTheDayTypesProps } from './WordOfTheDayScreenTypes'
import getStyle from './WordOfTheDayScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'
import { ActivityIndicator, View } from 'react-native'
import {
  KeyboardPanel,
  WinNormalModal,
  LoseNormalModal,
  TablePanel,
  ClassicGameHeader,
} from '@components'
import { getInputWord, getThemeColor } from '@utils'

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
    wordLength = 5,
    tableWords,
    currentLine = 0,
    enterWord,
    deleteWord,
    isPostLoading,
    wrongWordRequest,
  } = props
  const styles = getStyle()
  const inputWord = getInputWord(tableWords?.[currentLine])
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
    inputWord.length < hitWord.length && enterWord?.(currentLine, word)
  }

  /**
   * @description handle delete word from line
   */
  const handleDeleteWord = () => {
    inputWord.length !== 0 && deleteWord?.(currentLine)
  }

  /**
   * @description check word
   */
  const handlePressWord = () => {
    checkWordRequest?.(inputWord)
  }

  useEffect(() => {
    if (isHit) {
      setIsWinModalVisible(true)
    } else if (currentLine >= wordLength + 1 && !isCheckLoading) {
      setIsLoseModalVisible(true)
    }
  }, [currentLine, isCheckLoading, isHit])

  /**
   * @description close modals handler
   */
  const handleCloseModal = () => {
    setIsWinModalVisible(false)
    setIsLoseModalVisible(false)
    closeGame?.(true)
  }

  /**
   * @description handler for post wrong word in modal
   */
  const handlePostWrongWord = () => {
    wrongWordRequest?.(hitWord)
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
        <ClassicGameHeader
          title="Слово дня"
          isLoading={isCheckLoading}
          onExit={() => closeGame?.(false)}
        />
        <TablePanel wordLength={wordLength} tableWords={tableWords!} />
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
        isPostLoading={isPostLoading}
        onPostWord={handlePostWrongWord}
      />
    </SWContainer>
  )
}

export default WordOfTheDay

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
import { countForm, getInputWord, getThemeColor } from '@utils'

/**
 * @description WordOfTheDay
 * @param {IWordOfTheDayTypesProps} props
 * @return {JSX}
 */
const WordOfTheDay = (props: IWordOfTheDayTypesProps) => {
  const {
    navigation,
    keyboardWords,
    isLoading,
    hitWord = '',
    isHit,
    isCheckLoading,
    wordLength = 5,
    tableWords,
    currentLine = 0,
    isPostLoading,
    wrongWordRequest,
    closeGame,
    getWordOfTheDay,
    checkWordRequest,
    enterWord,
    deleteWord,
    renderedTableLine,
    getWordRequest,
    route,
  } = props
  const possibleWordLength = route?.params?.wordLength
  const styles = getStyle()
  const inputWord = getInputWord(tableWords?.[currentLine])
  const [isWinModalVisible, setIsWinModalVisible] = useState(true)
  const [isLoseModalVisible, setIsLoseModalVisible] = useState(false)

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: () => null,
      headerLeft: () => null,
    })
  }, [])

  useEffect(() => {
    possibleWordLength
      ? getWordRequest?.(possibleWordLength)
      : getWordOfTheDay?.()
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
    closeGame?.(!possibleWordLength)
  }

  /**
   * @description handler for post wrong word in modal
   */
  const handlePostWrongWord = () => {
    wrongWordRequest?.(hitWord)
  }

  /**
   * @description run when line was rendered
   */
  const onRenderLine = () => {
    renderedTableLine?.(currentLine)
  }

  /**
   * @description handle play again
   */
  const handlePlayAgain = () => {
    setIsWinModalVisible(false)
    setIsLoseModalVisible(false)
    getWordRequest?.(possibleWordLength!)
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
          title={
            possibleWordLength
              ? `${possibleWordLength} ${countForm(Number(possibleWordLength), [
                  'буква',
                  'буквы',
                  'букв',
                ])}`
              : 'Слово дня'
          }
          isLoading={isCheckLoading}
          onExit={() => closeGame?.(false)}
        />
        <TablePanel
          wordLength={wordLength}
          tableWords={tableWords!}
          onRenderedLine={onRenderLine}
        />
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
        onPlayAgain={possibleWordLength ? handlePlayAgain : undefined}
      />
      <LoseNormalModal
        visible={isLoseModalVisible}
        closeHandler={handleCloseModal}
        hitWord={hitWord}
        isPostLoading={isPostLoading}
        onPostWord={handlePostWrongWord}
        onPlayAgain={possibleWordLength ? handlePlayAgain : undefined}
      />
    </SWContainer>
  )
}

export default WordOfTheDay

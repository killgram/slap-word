import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ITournamentScreenTypesProps } from './TournamentScreenTypes'
import getStyle from './TournamentScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'
import { ActivityIndicator, View } from 'react-native'
import { countForm, getInputWord, getThemeColor } from '@utils'
import {
  ClassicGameHeader,
  KeyboardPanel,
  LoseNormalModal,
  TablePanel,
  WinNormalModal,
} from '@components'

/**
 * @description TournamentScreen
 * @param {ITournamentScreenTypesProps} props
 * @return {JSX}
 */
const TournamentScreen = (props: ITournamentScreenTypesProps) => {
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
    checkWordRequest,
    enterWord,
    deleteWord,
    renderedTableLine,
    getWordRequest,
  } = props
  const styles = getStyle()
  const possibleWordLength = '5'

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
    getWordRequest?.(possibleWordLength)
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
          title={`${possibleWordLength} ${countForm(
            Number(possibleWordLength),
            ['буква', 'буквы', 'букв'],
          )}`}
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
        hitWord={hitWord}
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

export default TournamentScreen

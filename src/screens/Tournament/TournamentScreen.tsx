import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ITournamentScreenTypesProps } from './TournamentScreenTypes'
import getStyle from './TournamentScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'
import { ActivityIndicator, View } from 'react-native'
import { getInputWord, getThemeColor } from '@utils'
import {
  KeyboardPanel,
  LoseNormalModal,
  TablePanel,
  WinNormalModal,
  TournamentHeader,
  ExitTournamentModal,
} from '@components'
import { TournamentConfig } from '@configurations'

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
    setTournamentConfig,
    cleanTournament,
    wordLengthTournament,
    score,
    round,
    isDone,
  } = props
  const styles = getStyle()

  const inputWord = getInputWord(tableWords?.[currentLine])
  const [isWinModalVisible, setIsWinModalVisible] = useState(false)
  const [isLoseModalVisible, setIsLoseModalVisible] = useState(false)
  const [isExitModalVisible, setIsExitModalVisible] = useState(false)

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: () => null,
      headerLeft: () => null,
    })
  }, [])

  /**
   * @description handle input word in line
   * @param {string} word
   */
  const handleInputWord = (word: string) => {
    inputWord.length < hitWord.length && enterWord?.(currentLine, word)
  }

  /**
   * @description check word
   */
  const handlePressWord = () => {
    checkWordRequest?.(inputWord)
  }

  useEffect(() => {
    setTournamentConfig?.(
      TournamentConfig.BASE_TOURNAMENT_CONFIG.score,
      TournamentConfig.BASE_TOURNAMENT_CONFIG.round,
      TournamentConfig.BASE_TOURNAMENT_CONFIG.wordLength,
    )
  }, [])

  /**
   * @description handle delete word from line
   */
  const handleDeleteWord = () => {
    inputWord.length !== 0 && deleteWord?.(currentLine)
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
    setIsExitModalVisible(false)
    closeGame?.(!wordLengthTournament)
    cleanTournament?.()
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
        <TournamentHeader
          wordLength={wordLengthTournament!}
          round={String(round)}
          score={score!}
          isLoading={isCheckLoading}
          onExit={() => setIsExitModalVisible(true)}
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

      <ExitTournamentModal
        visible={isExitModalVisible}
        closeHandler={handleCloseModal}
        closeModalHandler={() => setIsExitModalVisible(false)}
        score={score!}
      />

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

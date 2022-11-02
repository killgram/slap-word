import React from 'react'
import getStyle from './KeyboardPanelStyles'
import { IKeyboardPanelProps } from './KeyboardPanelTypes'
import { View } from 'react-native'
import { KeyboardItem, KeyboardIcon } from '@components'
import { keyGenerate } from '@utils'

/**
 * @description keyboard panel component
 * @param {IKeyboardPanelProps} props
 * @constructor
 */
const KeyboardPanel = (props: IKeyboardPanelProps) => {
  const { wordList, onPressWord, onDeleteWord, onCheckWord, isCheckPossible } =
    props
  const styles = getStyle()

  const renderFirstPanel = () => {
    return wordList?.first?.map((item) => {
      return (
        <KeyboardItem
          key={keyGenerate()}
          name={item.name}
          onPress={onPressWord}
          coincidence={item.coincidence}
          missing={item.missing}
          hit={item.hit}
        />
      )
    })
  }

  const renderSecondPanel = () => {
    return wordList?.second?.map((item) => {
      return (
        <KeyboardItem
          key={keyGenerate()}
          name={item.name}
          onPress={onPressWord}
          coincidence={item.coincidence}
          missing={item.missing}
          hit={item.hit}
        />
      )
    })
  }

  const renderThirdPanel = () => {
    return wordList?.third?.map((item) => {
      return (
        <KeyboardItem
          key={keyGenerate()}
          name={item.name}
          onPress={onPressWord}
          coincidence={item.coincidence}
          missing={item.missing}
          hit={item.hit}
        />
      )
    })
  }

  const renderFourthPanel = () => {
    return wordList?.fourth?.map((item) => {
      return (
        <KeyboardItem
          key={keyGenerate()}
          name={item.name}
          onPress={onPressWord}
          coincidence={item.coincidence}
          missing={item.missing}
          hit={item.hit}
        />
      )
    })
  }

  return (
    <View style={styles.container}>
      {renderFirstPanel()}
      {renderSecondPanel()}
      {renderThirdPanel()}
      <KeyboardIcon name="delete" onPress={onDeleteWord} />
      {renderFourthPanel()}
      <KeyboardIcon
        name="enter"
        onPress={onCheckWord}
        disabled={isCheckPossible}
      />
    </View>
  )
}

export default KeyboardPanel

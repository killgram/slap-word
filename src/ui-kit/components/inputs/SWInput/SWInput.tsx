import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BaseInput } from '@ui-kit/components/inputs'
import getStyle from './SWInputStyles'
import { ISWInputProps } from './SWInputTypes'
import { SWText } from '@ui-kit/components'

/**
 * @description default SW input
 * @param {ISWInputProps} props
 * @constructor
 */
const SWInput = (props: ISWInputProps) => {
  const {
    inputContainerStyle,
    disabled,
    onEndEditing,
    inputStyle,
    error,
    defaultValue,
    errorStyle,
    labelStyle,
    label,
    WDRContainerStyle,
    rightElement,
    ...other
  } = props
  const styles = getStyle()

  return (
    <View style={WDRContainerStyle && WDRContainerStyle}>
      {!!label && (
        <SWText
          isSecondary
          style={StyleSheet.flatten([styles.label, labelStyle])}
        >
          {!!label && label}
        </SWText>
      )}
      <BaseInput
        containerStyle={inputContainerStyle}
        disabled={disabled}
        onEndEditing={onEndEditing}
        inputStyle={inputStyle}
        error={error}
        defaultValue={defaultValue}
        rightElement={rightElement}
        {...other}
      />
      <SWText isError style={StyleSheet.flatten([styles.error, errorStyle])}>
        {error ? error : ' '}
      </SWText>
    </View>
  )
}

export default SWInput

import React from 'react'
import { Pressable, StyleSheet, ActivityIndicator } from 'react-native'
import { SWText } from '@ui-kit/components'
import getStyle from './SWButtonStyles'
import { ISWButtonProps } from './SWButtonTypes'
import { getThemeColor } from '@utils'

/**
 *
 * @param {ISWButtonProps} props
 * @constructor
 */
const SWButton = (props: ISWButtonProps) => {
  const {
    title,
    style,
    isDisabled,
    isSecondary,
    isLoading,
    loaderStyle,
    titleStyle,
    isTransparent,
    ...other
  } = props
  const styles = getStyle()

  return isLoading ? (
    <ActivityIndicator
      color={getThemeColor('ACTIVITY_INDICATOR')}
      style={StyleSheet.flatten([
        style,
        styles.container,
        styles.loader,
        loaderStyle,
      ])}
    />
  ) : (
    <Pressable
      style={({ pressed }) =>
        StyleSheet.flatten([
          isSecondary
            ? pressed
              ? styles.pressedSecondary
              : styles.staticSecondary
            : pressed
            ? styles.pressed
            : styles.static,
          styles.container,
          style,
          isTransparent && styles.transparent,
          (isDisabled || (pressed && isTransparent)) && styles.opacity,
        ])
      }
      disabled={isDisabled}
      {...other}
    >
      <SWText
        isSecondary
        isLink={isTransparent}
        style={StyleSheet.flatten([
          isSecondary && styles.textSecondary,
          isTransparent && styles.textTransparent,
          titleStyle,
        ])}
      >
        {title}
      </SWText>
    </Pressable>
  )
}

export default SWButton

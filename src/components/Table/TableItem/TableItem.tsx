import React, { useEffect } from 'react'
import getStyle from './TableItemStyles'
import { ITableItemProps } from './TableItemTypes'
import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  runOnJS,
} from 'react-native-reanimated'
import { getThemeColor } from '@utils'

/**
 * @description table item component
 * @param {ITableItemProps} props
 * @constructor
 */
const TableItem = (props: ITableItemProps) => {
  const {
    value,
    hit,
    missing,
    coincidence,
    onRender,
    isRendered,
    lastItem,
    timeOutOrder,
  } = props
  const styles = getStyle()

  const calcBackgroundColor = () => {
    if (hit) {
      return getThemeColor('RIGHT_TARGET_BACKGROUND_KEYBOARD')
    }
    if (coincidence) {
      return getThemeColor('COINCIDENCE_BACKGROUND_KEYBOARD')
    }
    if (missing) {
      return getThemeColor('MISSING_BACKGROUND_KEYBOARD')
    }

    return getThemeColor('TABLE_ITEM_BACKGROUND')
  }

  const rotation = useSharedValue(0)
  const background = useSharedValue(
    (missing || hit || coincidence) && isRendered
      ? calcBackgroundColor()
      : getThemeColor('TABLE_ITEM_BACKGROUND'),
  )

  const aContainer = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${rotation.value}deg` }],
      backgroundColor: background.value,
    }
  })

  const aTitle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `-${rotation.value}deg` }],
    }
  })

  const animatedItem = () => {
    background.value = withDelay(
      timeOutOrder,
      withSpring(calcBackgroundColor(), {
        stiffness: 30,
        restSpeedThreshold: 4,
      }),
    )
    rotation.value = withDelay(
      timeOutOrder,
      withSpring(180, { stiffness: 30, restSpeedThreshold: 4 }, () => {
        lastItem && runOnJS(onRender)()
      }),
    )
  }

  useEffect(() => {
    if (!isRendered && value?.length && (hit || missing || coincidence)) {
      animatedItem()
    }
  }, [value])

  return (
    <Animated.View style={[styles.container, aContainer]}>
      <Animated.Text style={[styles.title, aTitle]}>
        {value?.toUpperCase()}
      </Animated.Text>
    </Animated.View>
  )
}

export default TableItem

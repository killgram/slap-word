import React from 'react'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import { sp } from '@utils'

import { ISWIconTypes } from './SWIconTypes'
import icoMoonConfig from '@configurations/selection.json'

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

/**
 *
 * @param { ISWIconTypes } props
 * @constructor
 */
const SWIcon = (props: ISWIconTypes) => {
  const { iconName, iconColor, iconSize = 20 } = props
  return <Icon name={iconName} color={iconColor} size={sp(iconSize)} />
}

export default SWIcon

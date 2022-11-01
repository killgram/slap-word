import React, { useLayoutEffect } from 'react'
import { IChooseDifficultTypesProps } from './ChooseDifficultScreenTypes'
import getStyle from './ChooseDifficultScreenStyles'
import { SWContainer, SWText } from '@ui-kit/components'

/**
 * @description ChooseDifficult
 * @param {IChooseDifficultTypesProps} props
 * @return {JSX}
 */
const ChooseDifficult = (props: IChooseDifficultTypesProps) => {
  const { navigation } = props
  const styles = getStyle()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: 'Выберите сложность',
    })
  }, [])

  return (
    <SWContainer isTransparentHeader>
      <SWText>ChooseDifficult</SWText>
    </SWContainer>
  )
}

export default ChooseDifficult

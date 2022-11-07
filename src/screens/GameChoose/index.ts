import GameChooseScreen from './GameChooseScreen'

import { connect } from 'react-redux'
import { IState, IGameChooseScreenTypesProps } from './GameChooseScreenTypes'

/**
 * @param {IState} state
 * @return {IGameChooseScreenTypesProps}
 */
const mapStateToProps = (state: IState): IGameChooseScreenTypesProps => ({
  wordOfDayTime: state?.settings?.wordOfDayTime,
})

export default connect(mapStateToProps)(GameChooseScreen)

import { app } from '@store/types'

interface IStateToProps {}

interface IDispatchToProps {
  startup?: () => app.IAction
}

export interface IState {
  app?: app.IInitialState
}

export type IRootScreenProps = IStateToProps & IDispatchToProps

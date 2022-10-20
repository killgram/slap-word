import rootSaga from '../sagas'
import rootReducer from './reducers'
import configureStore from './CreateStore'

export default () => configureStore(rootReducer, rootSaga)

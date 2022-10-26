import { combineReducers } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'

import appReducer from './app'

const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  app: persistReducer(appPersistConfig, appReducer),
})

export default rootReducer

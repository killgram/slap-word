import { combineReducers } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'

import appReducer from './app'
import settingsReducer from './settings'

const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
}

const settingsPersistConfig = {
  key: 'settings',
  storage: AsyncStorage,
  whitelist: ['isPlaySound'],
}

const rootReducer = combineReducers({
  app: persistReducer(appPersistConfig, appReducer),
  settings: persistReducer(settingsPersistConfig, settingsReducer),
})

export default rootReducer

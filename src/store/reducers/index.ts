import { combineReducers } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'

import appReducer from './app'

const rootReducer = combineReducers({
  app: appReducer,
})

export default rootReducer

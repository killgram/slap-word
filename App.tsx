import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { SafeAreaView, Text } from 'react-native'
import createStore from '@store'

const { store, persistor } = createStore()

const App = () => {
  console.log('fdfd')

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Text>gfgfgf</Text>
      </PersistGate>
    </Provider>
  )
}

export default App

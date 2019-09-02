import React, { Component } from 'react'
import { Provider } from 'react-redux'
import MainNavigator from './src/Publics/Navigator/MainNavigator'
import store from './src/Publics/Redux/store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
      <MainNavigator />
      </Provider>
    )
  }
}

export default App
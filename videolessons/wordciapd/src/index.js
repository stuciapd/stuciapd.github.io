'use strict'

import React from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { AppContainer } from 'react-hot-loader'
import myCustomTheme from 'root/materialui/theme'
import JssProvider from 'react-jss/lib/JssProvider'
import randomClasses from 'root/materialui/classes'
import CssBaseline from '@material-ui/core/CssBaseline'
import App from './app'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <MuiThemeProvider theme={myCustomTheme}>
        <JssProvider generateClassName={randomClasses}>
          <div>
            <CssBaseline />
            <NextApp />
          </div>
        </JssProvider>
      </MuiThemeProvider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}

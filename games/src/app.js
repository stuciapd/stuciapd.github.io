'use strict'

import React, { PureComponent } from 'react'
// import MainScreenSound, { mainScreenSoundState } from './sound'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import './global-style.css'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Topbar, { topbarHeight } from 'components/topbar'
import Navbar, { navbarHeight } from 'components/navbar'
import Sidebar from 'components/sidebar'

// import Jobs from 'components/content/forum/question'

const tbHeight = topbarHeight || 0
const nbHeight = navbarHeight || 0

const styles = (currentTheme) => ({
  root: {
    flexGrow: currentTheme.flexSettings.defaultGrow
  },
  container: {
    alignContent: 'flex-start',
    height: `calc(100vh  - ${tbHeight}px - ${nbHeight}px)`,
    marginTop: 0,
    overflowY: 'scroll',
    padding: currentTheme.flexSettings.defaultContainer.padding,
    width: 'auto'
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

class App extends PureComponent {
  // constructor (props) {
  //   super(props)
  //   this.state = { ...mainScreenSoundState }
  //   this.playSound = this.playSound.bind(this)
  // }

  // componentDidMount () {
  // setTimeout(() => {
  //   this.playSound('message.topico')
  //   setTimeout(() => {
  //     this.playSound('message.topico1')
  //     setTimeout(() => {
  //       this.playSound('message.autor')
  //       setTimeout(() => {
  //         this.playSound('message.pergunta')
  //         setTimeout(() => {
  //           this.playSound('message.introResp')
  //           setTimeout(() => {
  //             this.playSound('message.resposta')
  //           }, 6000)
  //         }, 10000)
  //       }, 5000)
  //     }, 5300)
  //   }, 2400)
  // }, 500)
  // }

  // playSound (requestedSound) {
  //   if (this.state.hasOwnProperty(requestedSound)) {
  //     for (const sound in this.state) {
  //       if (this.state[sound] === 'PLAYING') {
  //         this.setState({ [sound]: 'STOPPED' })
  //       }
  //     }

  //     setTimeout(() => {
  //       this.setState({ [requestedSound]: 'PLAYING' })
  //     }, 20)
  //   } else {
  //     throw new Error('playSound: unknown sound.')
  //   }
  // }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Topbar />
        <Navbar />
        <Sidebar active='games' />
        <Grid container className={classes.container} spacing={24}>
          <Grid item xs={12} className={classes.container2}>
            <Typography align='center' className={classes.title} variant='display2'>PÁGINA EM DESENVOLVIMENTO</Typography>
            <div style={{ marginTop: 20 }}>
              <Button
                onClick={() => { window.location.href = '/ciapd-preview/videolessons' }}
                style={{ marginRight: 10 }}
                variant='contained'
                color='primary'
              >
                VOLTAR
              </Button>
              <Button
                onClick={() => { window.location.href = '/ciapd-preview/forum' }}
                style={{ marginLeft: 10 }}
                variant='contained'
                color='primary'
              >
                AVANÇAR
              </Button>
            </div>
          </Grid>
        </Grid>
        {/* <MainScreenSound state={this.state} /> */}
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)

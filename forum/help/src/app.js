'use strict'

import React, { PureComponent } from 'react'
import MainScreenSound, { mainScreenSoundState } from './sound'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import './global-style.css'

import Topbar from 'components/topbar'
import Navbar from 'components/navbar'
import Sidebar from 'components/sidebar'
import Jobs from 'components/content/forum/question'

const styles = (currentTheme) => ({
  root: {
    flexGrow: currentTheme.flexSettings.defaultGrow
  }
})

class App extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { ...mainScreenSoundState }
    this.playSound = this.playSound.bind(this)
  }

  componentDidMount () {
    setTimeout(() => {
      this.playSound('message.topico')
      setTimeout(() => {
        this.playSound('message.topico1')
        setTimeout(() => {
          this.playSound('message.autor')
          setTimeout(() => {
            this.playSound('message.pergunta')
            setTimeout(() => {
              this.playSound('message.introResp')
              setTimeout(() => {
                this.playSound('message.resposta')
              }, 6000)
            }, 10000)
          }, 5000)
        }, 5300)
      }, 2400)
    }, 500)
  }

  playSound (requestedSound) {
    if (this.state.hasOwnProperty(requestedSound)) {
      for (const sound in this.state) {
        if (this.state[sound] === 'PLAYING') {
          this.setState({ [sound]: 'STOPPED' })
        }
      }

      setTimeout(() => {
        this.setState({ [requestedSound]: 'PLAYING' })
      }, 20)
    } else {
      throw new Error('playSound: unknown sound.')
    }
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Topbar />
        <Navbar />
        <Sidebar active='forum' />
        <Jobs
          title='Como acessar os cursos disponíveis no portal?'
          author='Thiago'
          date='12/08/2018'
          question='Estou com uma dificuldade para assistir os cursos disponibilizados pelo CIAPD, alguém pode me ajudar?'
        />
        <MainScreenSound state={this.state} />
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)

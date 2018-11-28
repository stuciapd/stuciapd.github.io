'use strict'

import React, { PureComponent } from 'react'
import MainScreenSound, { mainScreenSoundState } from './sound'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import './global-style.css'

import Topbar from 'components/topbar'
import Navbar from 'components/navbar'
import Sidebar from 'components/sidebar'
import Jobs from 'components/content/generic-list-screen/item-content/generic'

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
      // this.playSound('message.jobs')
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
        <Sidebar active='jobs' />
        <Jobs
          categoryTitle='Empregos'
          title='Atendente'
          expirationDate='13/08/18'
          content={`
            A Neoformula contrata atendentes com algum tipo de deficiência, para fazer parte de seu quadro de funcionários.
            Os selecionados atuarão em atendimento ao cliente, em apresentações dos produtos e em organização de prateleiras.
          `}
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

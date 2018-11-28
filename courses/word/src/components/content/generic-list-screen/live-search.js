'use strict'

import React, { PureComponent } from 'react'
import GlobalSound, { globalSoundState } from 'src/global-sound'
import GenericScreenSound, { genericScreenSoundState } from './sound'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

const styles = (currentTheme) => ({
  container: {
    padding: '1rem'
  },
  search: {
    width: '100%'
  }
})

class LiveSearch extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { ...globalSoundState, ...genericScreenSoundState }
    this.playSound = this.playSound.bind(this)
    this.handleType = this.handleType.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
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

  handleType (e) {
    const DOT = 190
    const TWO = 50
    const DASH = 189
    const CEDILLA = 186
    const DELETE = (i) => i === 8 || i === 46
    const LETTER_RANGE = (i) => i > 64 && i < 91
    const NUMBER_RANGE = (i) => (i > 47 && i < 58) || (i > 95 && i < 106)

    if (e.shiftKey) {
      if (e.keyCode === DASH) {
        this.playSound('character.underscore')
      } else if (e.keyCode === TWO) {
        this.playSound('character.at')
      }
    } else {
      if (e.keyCode === DOT) {
        this.playSound('character.dot')
      } else if (e.keyCode === DASH) {
        this.playSound('character.dash')
      } else if (DELETE(e.keyCode)) {
        this.playSound('character.delete')
      } else if (e.keyCode === CEDILLA) {
        this.playSound('character.cedilla')
      } else if (LETTER_RANGE(e.keyCode)) {
        const letter = String.fromCharCode(e.keyCode)
        this.playSound(`character.${letter.toLowerCase()}`)
      } else if (NUMBER_RANGE(e.keyCode)) {
        const number = String.fromCharCode(e.keyCode)
        this.playSound(`character.${number}`)
      }
    }
  }

  handleFocus (e) {
    const handleIdentifier = {
      cultureSearch: () => this.playSound('message.searchFieldFocus')
    }

    handleIdentifier[e.target.id]()
  }

  updateSearchValue (e, querySelector) {
    const items = document.querySelectorAll(`[live-search="${querySelector}"]`)
    for (let i = 0; i < items.length; i++) {
      const itemValue = items[i].textContent.toLowerCase()
      const inputValue = e.target.value.toLowerCase()
      if (itemValue.indexOf(inputValue) !== -1) {
        items[i].setAttribute('style', 'display: flex;')
        items[i].parentNode.setAttribute('style', 'display: block;')
      } else {
        items[i].setAttribute('style', 'display: none;')
        items[i].parentNode.setAttribute('style', 'display: none;') // Pode dar merda, cuidado
      }
    }
  }

  render () {
    return (
      <Paper className={this.props.classes.container}>
        <TextField
          className={this.props.classes.search}
          id='cultureSearch'
          onFocus={this.handleFocus}
          label='Pesquisar'
          placeholder='Pesquise aqui...'
          onKeyUp={e => {
            this.handleType(e)
            this.updateSearchValue(e, this.props.querySelector)
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <GlobalSound state={this.state} />
        <GenericScreenSound state={this.state} />
      </Paper>
    )
  }
}

LiveSearch.propTypes = {
  querySelector: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LiveSearch)

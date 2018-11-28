'use strict'

import React, { PureComponent } from 'react'
import GlobalSound, { globalSoundState } from 'src/global-sound'
import CurriculumSound, { curriculumSoundState } from './sound'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import DomainIcon from '@material-ui/icons/Domain'
import TextField from '@material-ui/core/TextField'
import AttachFileIcon from '@material-ui/icons/AttachFile'

const styles = (currentTheme) => ({
  spacingTop: {
    marginTop: currentTheme.spacing.unit,
    marginBottom: 50
  },
  fullWidth: {
    width: '100%'
  }
})

class ProfessionalQualification extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      ...globalSoundState,
      ...curriculumSoundState
    }

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
    if (e.target.id.indexOf('prof-qual-enterprise') !== -1) {
      this.playSound('message.empresaFocus')
    }

    if (e.target.id.indexOf('prof-qual-starter-date') !== -1) {
      this.playSound('message.dataInicioFocus')
    }

    if (e.target.id.indexOf('prof-qual-finish-date') !== -1) {
      this.playSound('message.dataTerminoFocus')
    }

    if (e.target.id.indexOf('prof-qual-office') !== -1) {
      this.playSound('message.cargoOcupado')
    }
  }

  render () {
    const { uuid, classes } = this.props
    return (
      <Grid container className={classes.spacingTop} spacing={16}>
        <Grid item xs={4}>
          <FormControl className={classes.fullWidth}>
            <InputLabel
              htmlFor={`prof-qual-enterprise-${uuid}`}
            >
              Digite o nome da empresa
        </InputLabel>
            <Input
              onFocus={this.handleFocus}
              onKeyUp={this.handleType}
              id={`prof-qual-enterprise-${uuid}`}
              type='text'
              placeholder='Empresa'
              required
              startAdornment={
                <InputAdornment position='start'>
                  <DomainIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <TextField
            onFocus={this.handleFocus}
            onKeyUp={this.handleType}
            id={`prof-qual-starter-date-${uuid}`}
            label='Data de início'
            type='date'
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            onFocus={this.handleFocus}
            onKeyUp={this.handleType}
            id={`prof-qual-finish-date-${uuid}`}
            label='Data de término'
            type='date'
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl className={classes.fullWidth}>
            <InputLabel
              htmlFor={`prof-qual-office-${uuid}`}
            >
              Cargo ocupado
        </InputLabel>
            <Input
              onFocus={this.handleFocus}
              onKeyUp={this.handleType}
              id={`prof-qual-office-${uuid}`}
              type='text'
              placeholder='Cargo'
              required
              startAdornment={
                <InputAdornment position='start'>
                  <AttachFileIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <GlobalSound state={this.state} />
        <CurriculumSound state={this.state} />
      </Grid>
    )
  }
}

ProfessionalQualification.propTypes = {
  uuid: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfessionalQualification)

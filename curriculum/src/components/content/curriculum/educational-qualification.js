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
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import ShoolIcon from '@material-ui/icons/School'
import ImportContactsIcon from '@material-ui/icons/ImportContacts'
import TextField from '@material-ui/core/TextField'

const styles = (currentTheme) => ({
  spacingTop: {
    marginTop: currentTheme.spacing.unit,
    marginBottom: 50
  },
  fullWidth: {
    width: '100%'
  }
})

class EducationalQualification extends PureComponent {
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
    if (e.target.id.indexOf('educ-qual-instituition-') !== -1) {
      this.playSound('message.instituicaoFocus')
    }

    if (e.target.id.indexOf('educ-qual-course-') !== -1) {
      this.playSound('message.nomeCursoFocus')
    }

    if (e.target.id.indexOf('educ-qual-degree-') !== -1) {
      this.playSound('message.grauEnsinoFocus')
    }

    if (e.target.id.indexOf('educ-qual-start-') !== -1) {
      this.playSound('message.dataInicioFocus')
    }

    if (e.target.id.indexOf('educ-qual-finish-') !== -1) {
      this.playSound('message.dataTerminoFocus')
    }
  }

  render () {
    const { uuid, classes } = this.props
    return (
      <Grid container className={classes.spacingTop} spacing={16}>
        <Grid item xs={6}>
          <FormControl className={classes.fullWidth}>
            <InputLabel
              htmlFor={`educ-qual-instituition-${uuid}`}
            >
              Digite o nome da instituição
        </InputLabel>
            <Input
              id={`educ-qual-instituition-${uuid}`}
              onFocus={this.handleFocus}
              onKeyUp={this.handleType}
              type='text'
              placeholder='Instituição'
              required
              startAdornment={
                <InputAdornment position='start'>
                  <AccountBalanceIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.fullWidth}>
            <InputLabel
              htmlFor={`educ-qual-course-${uuid}`}
            >
              Digite o nome do curso
        </InputLabel>
            <Input
              id={`educ-qual-course-${uuid}`}
              onFocus={this.handleFocus}
              onKeyUp={this.handleType}
              type='text'
              placeholder='Curso'
              required
              startAdornment={
                <InputAdornment position='start'>
                  <ShoolIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.fullWidth}>
            <InputLabel
              htmlFor={`educ-qual-degree-${uuid}`}
            >
              Digite o grau de ensino
        </InputLabel>
            <Input
              id={`educ-qual-degree-${uuid}`}
              onFocus={this.handleFocus}
              onKeyUp={this.handleType}
              type='text'
              placeholder='Grau de ensino'
              required
              startAdornment={
                <InputAdornment position='start'>
                  <ImportContactsIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id={`educ-qual-start-${uuid}`}
            onFocus={this.handleFocus}
            onKeyUp={this.handleType}
            label='Data de início'
            className={classes.fullWidth}
            type='date'
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id={`educ-qual-finish-${uuid}`}
            onFocus={this.handleFocus}
            onKeyUp={this.handleType}
            label='Data de término'
            className={classes.fullWidth}
            type='date'
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <GlobalSound state={this.state} />
        <CurriculumSound state={this.state} />
      </Grid>
    )
  }
}

EducationalQualification.propTypes = {
  uuid: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EducationalQualification)

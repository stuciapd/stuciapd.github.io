'use strict'

import React, { PureComponent } from 'react'
import GlobalSound, { globalSoundState } from 'src/global-sound'
import CurriculumSound, { curriculumSoundState } from './sound'
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import GroupWork from '@material-ui/icons/GroupWork'
import PeopleIcon from '@material-ui/icons/People'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto'
import Button from '@material-ui/core/Button'

import ProfessionalQualification from './professional-qualification'
import EducationalQualification from './educational-qualification'

// Rever as classes do <Paper /> na documentação.

import { topbarHeight } from 'components/topbar'
import { navbarHeight } from 'components/navbar'

const tbHeight = topbarHeight || 0
const nbHeight = navbarHeight || 0

const styles = (currentTheme) => ({
  container: {
    alignContent: 'flex-start',
    height: `calc(100vh  - ${tbHeight}px - ${nbHeight}px)`,
    marginTop: 0,
    overflowY: 'scroll',
    padding: currentTheme.flexSettings.defaultContainer.padding,
    width: 'auto'
  },
  title: {
    borderBottom: '1px solid #888'
  },
  paper: {
    padding: '1.2rem'
  },
  content: {
    marginTop: currentTheme.spacing.unit
  },
  link: {
    color: '#00b3ef',
    cursor: 'pointer'
  },
  area: {
    height: 166,
    resize: 'none',
    width: '100%'
  },
  fullwidth: {
    width: '100%'
  },
  button: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-evenly'
  }
})

class App extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      professionalQualification: 1,
      educationalQualification: 1,
      ...globalSoundState,
      ...curriculumSoundState
    }

    this.playSound = this.playSound.bind(this)
    this.handleType = this.handleType.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.incrementProfessional = this.incrementProfessional.bind(this)
    this.decrementProfessional = this.decrementProfessional.bind(this)
    this.incrementEducacional = this.incrementEducacional.bind(this)
    this.decrementEducacional = this.decrementEducacional.bind(this)
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
    if (e.target.id.indexOf('outros') !== -1) {
      this.playSound('message.outrosFocus')
    }

    if (e.target.id.indexOf('inkedin') !== -1) {
      this.playSound('message.linkedin')
    }

    if (e.target.id.indexOf('acebook') !== -1) {
      this.playSound('message.facebook')
    }

    if (e.target.id.indexOf('nstagram') !== -1) {
      this.playSound('message.instagram')
    }
  }

  incrementProfessional () {
    this.setState({
      professionalQualification: this.state.professionalQualification + 1
    })
  }

  decrementProfessional () {
    this.setState({
      professionalQualification: this.state.professionalQualification - 1
    })
  }

  incrementEducacional () {
    this.setState({
      educationalQualification: this.state.educationalQualification + 1
    })
  }

  decrementEducacional () {
    this.setState({
      educationalQualification: this.state.educationalQualification - 1
    })
  }

  render () {
    return (
      <Grid container className={this.props.classes.container} spacing={24}>
        <Grid item xs={12}>
          <Typography align='left' className={this.props.classes.title} variant='display3'>
            CURRICULUM
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={this.props.classes.paper}>
            <Typography align='left' variant='headline'>
              Qualificação Profissional
            </Typography>
            {Array.from({ length: this.state.professionalQualification }).map(i => {
              const uniqueId = uuid()
              return (
                <ProfessionalQualification
                  key={uniqueId}
                  uuid={uniqueId}
                />
              )
            })}
            <Grid container className={this.props.classes.content} style={{ marginTop: '-50px' }} spacing={16}>
              <Grid item xs={6}>
                <Typography
                  onClick={this.incrementProfessional}
                  align='left'
                  className={this.props.classes.link}
                  variant='body1'
                >
                  Adicionar outra qualificação profissional...
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {this.state.professionalQualification > 1 && <Typography
                  onClick={this.decrementProfessional}
                  align='right'
                  className={this.props.classes.link}
                  variant='body1'
                >
                  Remover qualificação profissional...
                </Typography>}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={this.props.classes.paper}>
            <Typography align='left' variant='headline'>
              Qualificação Educacional
            </Typography>
            {Array.from({ length: this.state.educationalQualification }).map(i => {
              const uniqueId = uuid()
              return (
                <EducationalQualification
                  key={uniqueId}
                  uuid={uniqueId}
                />
              )
            })}
            <Grid container className={this.props.classes.content} style={{ marginTop: '-50px' }} spacing={16}>
              <Grid item xs={6}>
                <Typography
                  onClick={this.incrementEducacional}
                  align='left'
                  className={this.props.classes.link}
                  variant='body1'
                >
                  Adicionar outra qualificação profissional...
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {this.state.educationalQualification > 1 && <Typography
                  onClick={this.decrementEducacional}
                  align='right'
                  className={this.props.classes.link}
                  variant='body1'
                >
                  Remover qualificação profissional...
                </Typography>}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={this.props.classes.paper}>
            <Typography align='left' variant='headline'>
              Outros conhecimentos
              </Typography>
            <Grid container className={this.props.classes.content} spacing={16}>
              <Grid item xs={12}>
                <textarea
                  onFocus={this.handleFocus}
                  onKeyUp={this.handleType}
                  id='outros'
                  className={this.props.classes.area}
                  placeholder='Digite aqui os seus conhecimentos adicionais...'
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={this.props.classes.paper}>
            <Typography align='left' variant='headline'>
              Social
              </Typography>
            <Grid container className={this.props.classes.content} spacing={16}>
              <Grid item xs={4}>
                <FormControl className={this.props.classes.fullwidth}>
                  <InputLabel htmlFor='socialLinkedin'>Digite o seu Linkedin</InputLabel>
                  <Input
                    onFocus={this.handleFocus}
                    onKeyUp={this.handleType}
                    id='socialLinkedin'
                    type='text'
                    placeholder='Linkedin'
                    required
                    startAdornment={
                      <InputAdornment position='start'>
                        <GroupWork />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl className={this.props.classes.fullwidth}>
                  <InputLabel htmlFor='socialFacebook'>Digite o seu Facebook</InputLabel>
                  <Input
                    onFocus={this.handleFocus}
                    onKeyUp={this.handleType}
                    id='socialFacebook'
                    type='text'
                    placeholder='Facebook'
                    required
                    startAdornment={
                      <InputAdornment position='start'>
                        <PeopleIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl className={this.props.classes.fullwidth}>
                  <InputLabel htmlFor='socialInstagram'>Digite o seu Instagram</InputLabel>
                  <Input
                    onFocus={this.handleFocus}
                    onKeyUp={this.handleType}
                    id='socialInstagram'
                    type='text'
                    placeholder='Instagram'
                    required
                    startAdornment={
                      <InputAdornment position='start'>
                        <InsertPhotoIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
        <Grid className={this.props.classes.button} item xs={12}>
          <Button variant='contained' color='primary'>
            SALVAR CURRICULUM
            </Button>
          <Button variant='contained' color='primary'>
            VOLTAR
            </Button>
        </Grid>
        <GlobalSound state={this.state} />
        <CurriculumSound state={this.state} />
      </Grid>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)

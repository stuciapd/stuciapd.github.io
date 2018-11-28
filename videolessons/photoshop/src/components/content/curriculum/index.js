'use strict'

import React, { PureComponent } from 'react'
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

const styles = (currentTheme) => ({
  container: {
    padding: `0px 5%`
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
      educationalQualification: 1
    }

    this.incrementProfessional = this.incrementProfessional.bind(this)
    this.decrementProfessional = this.decrementProfessional.bind(this)
    this.incrementEducacional = this.incrementEducacional.bind(this)
    this.decrementEducacional = this.decrementEducacional.bind(this)
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
          <Typography align='center' className={this.props.classes.title} variant='display3'>
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
                <textarea className={this.props.classes.area} placeholder='Digite aqui os seus conhecimentos adicionais...' />
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
      </Grid>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)

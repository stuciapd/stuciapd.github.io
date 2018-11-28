'use strict'

import React, { PureComponent } from 'react'
import GlobalSound, { globalSoundState } from 'src/global-sound'
import LoginSound, { loginSoundState } from './sound'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import KeyIcon from '@material-ui/icons/VpnKey'
import ciapdLogo from './media/ciapd.png'

const styles = (currentTheme) => ({
  container: {
    height: 550,
    width: 452
  },
  center: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    height: 100
  },
  fullwidth: {
    width: '100%'
  },
  submitButton: {
    fontSize: '1.6rem',
    width: 160
  }
})

class Login extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      timers: [],
      loading: false,
      ...globalSoundState,
      ...loginSoundState
    }

    this.playSound = this.playSound.bind(this)
    this.handleType = this.handleType.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.playSound('message.welcome')
  }

  componentWillUnmount () {
    for (let i = 0; i < this.state.timers.length; i++) {
      clearTimeout(this.state.timers[i])
    }
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

  handleSubmit (e) {
    e.preventDefault()
    const { email, password, submit } = e.target
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!email.value) {
      return this.playSound('message.emailFieldBlank')
    }

    if (!emailRegex.test(email.value)) {
      return this.playSound('message.emailFieldInvalid')
    }

    if (!password.value) {
      return this.playSound('message.passwordFieldBlank')
    }

    this.playSound('message.wait')

    email.disabled = true
    password.disabled = true
    submit.disabled = true
    this.setState({ loading: true })

    this.state.timers.push( // Fake request
      setTimeout(() => {
        if (email.value === 'thiago@ciapd.com.br') {
          if (password.value === '7316') {
            return this.playSound('message.welcomeThiago')
          }
        }

        email.disabled = false
        email.value = ''
        password.disabled = false
        password.value = ''
        submit.disabled = false
        document.getElementById('message').innerText = 'Email e/ou senha incorretos, por favor, tente novamente.'
        this.setState({ loading: false })
        return this.playSound('message.incorrectLogin')
      }, 3000)
    )
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
      email: () => this.playSound('message.emailFieldFocus'),
      password: () => this.playSound('message.passwordFieldFocus'),
      submit: () => this.playSound('message.submitButtonFocus')
    }

    handleIdentifier[e.target.id]()
  }

  render () {
    return (
      <div className={this.props.classes.container}>
        <Grid container spacing={24}>
          <Grid className={this.props.classes.center} item xs={12}>
            <img className={this.props.classes.image} src={ciapdLogo} />
          </Grid>
        </Grid>
        <Card>
          <form method='POST' onSubmit={this.handleSubmit}>
            <CardContent>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Typography id='message' color='error' component='p' variant='title'>
                    Bem-vindo ao CIAPD, digite o seu e-mail e sua senha para continuar.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl className={this.props.classes.fullwidth}>
                    <InputLabel htmlFor='email'>Digite o seu e-mail</InputLabel>
                    <Input
                      onFocus={this.handleFocus}
                      onKeyUp={this.handleType}
                      id='email'
                      type='text'
                      placeholder='E-mail'
                      required
                      startAdornment={
                        <InputAdornment position='start'>
                          <AccountCircleIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl className={this.props.classes.fullwidth}>
                    <InputLabel htmlFor='password'>Digite a sua senha</InputLabel>
                    <Input
                      onFocus={this.handleFocus}
                      onKeyUp={this.handleType}
                      id='password'
                      type='password'
                      placeholder='Senha'
                      required
                      startAdornment={
                        <InputAdornment position='start'>
                          <KeyIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={this.props.classes.center}>
              <Button
                onFocus={this.handleFocus}
                id='submit'
                variant='contained'
                color='primary'
                className={this.props.classes.submitButton}
                type='submit'
              >
                ENTRAR
              </Button>
            </CardActions>
            {this.state.loading && <LinearProgress color='primary' />}
          </form>
        </Card>
        <GlobalSound state={this.state} />
        <LoginSound state={this.state} />
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)

'use strict'

import React, { PureComponent } from 'react'
import MainScreenSound, { globalSoundState } from 'src/global-sound'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Answer from './answer'

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
  paddingPaper: {
    padding: currentTheme.flexSettings.defaultPaper.padding
  },
  spacingTop: {
    marginTop: currentTheme.spacing.unit * 3
  },
  title: {
    fontWeight: 500
  },
  answer: {
    height: '166px',
    resize: 'none',
    width: '100%'
  },
  temp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})

class Question extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { ...globalSoundState }

    this.playSound = this.playSound.bind(this)
    this.handleType = this.handleType.bind(this)
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
        console.log(`character.${letter.toLowerCase()}`)
        this.playSound(`character.${letter.toLowerCase()}`)
      } else if (NUMBER_RANGE(e.keyCode)) {
        const number = String.fromCharCode(e.keyCode)
        this.playSound(`character.${number}`)
      }
    }
  }

  render () {
    const { title, author, date, question, classes } = this.props
    return (
      <Grid container className={classes.container} spacing={24}>
        <Grid item xs={12}>
          <Typography align='left' className={classes.title} variant='display3'>FÓRUM</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paddingPaper}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <Typography component='h2' variant='display1'>
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component='p' variant='title'>
                  Perguntado por:&nbsp;{author}&nbsp;&nbsp;&nbsp;&nbsp;{date}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component='p' variant='headline'>
                  {question}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography component='h2' variant='display2' className={classes.spacingTop}>
            Respostas
      </Typography>
        </Grid>
        <Grid item xs={12}>
          <Answer
            answer='É só você clicar em vídeoaulas no menu esquerdo e acessar o curso que você quer.'
            answeredBy='Fernando'
            date='08/08/2018'
          />
        </Grid>
        <Grid item xs={12}>
          <Typography component='h2' variant='display2' className={classes.spacingTop}>
            Deixe sua resposta
      </Typography>
        </Grid>
        <Grid item xs={12}>
          <textarea onKeyUp={this.handleType} onFocus={() => this.playSound('message.focus')} id='resp' className={classes.answer} />
        </Grid>
        <Grid className={classes.temp} item xs={12}>
          <Button variant='contained' color='primary'>
            Responder
          </Button>
          <Button onClick={() => { window.location.href = '/ciapd-preview/forum' }} variant='contained' color='primary'>
            Voltar
          </Button>
        </Grid>
        <MainScreenSound state={this.state} />
      </Grid>
    )
  }
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Question)

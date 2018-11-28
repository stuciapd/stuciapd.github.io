'use strict'

import React, { PureComponent } from 'react'
import GenericScreenSound, { genericScreenSoundState } from '../sound'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

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
  categoryTitle: {
    borderBottom: '1px solid #888'
  },
  title: {
    fontSize: currentTheme.typography.display1.fontSize,
    marginBottom: currentTheme.spacing.unit
  },
  inline: {
    display: 'inline-block'
  },
  spacing: {
    marginRight: currentTheme.spacing.unit
  }
})

class ContentScreen extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { ...genericScreenSoundState }
    this.playSound = this.playSound.bind(this)
  }

  componentDidMount () {
    setTimeout(() => {
      this.playSound('message.cadeira')
      setTimeout(() => {
        this.playSound('message.cadeiraCore')
        setTimeout(() => {
          this.playSound('message.cadeiraCore2')
          setTimeout(() => {
            this.playSound('message.cadeiraCore3')
          }, 12000)
        }, 8500)
      }, 5800)
    }, 1000)
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
    const { categoryTitle, title, expirationDate, content, classes } = this.props
    return (
      <Grid container className={classes.container} spacing={24}>
        <Grid item xs={12}>
          <Typography align='left' className={classes.categoryTitle} variant='display3'>{categoryTitle.toUpperCase()}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.title} variant='headline'>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.inline} variant='subheading' color='textSecondary'>
            Data de expiração:&nbsp;&nbsp;
      </Typography>
          <Typography className={classes.inline} variant='subheading' color='textSecondary'>
            {expirationDate}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component='p' variant='headline'>
            {content}
            <br />
            <br />
            Data: 31 de Agosto de 2018.<br />
            Horário: 10h.<br />
            Taxa de inscrição: R$ 10,00.<br />
            Os participantes receberão camisas do evento e os vencedores medalhas.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' color='primary' onClick={() => { window.location.href = '/ciapd-preview/culture' }}>
            Voltar
          </Button>
        </Grid>
        <GenericScreenSound state={this.state} />
      </Grid>
    )
  }
}

ContentScreen.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ContentScreen)

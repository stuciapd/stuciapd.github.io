'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const styles = (currentTheme) => ({
  container: {
    padding: currentTheme.flexSettings.defaultContainer.padding
  },
  paddingPaper: {
    padding: currentTheme.flexSettings.defaultPaper.padding
  },
  spacingTop: {
    marginTop: currentTheme.spacing.unit * 3
  },
  answer: {
    height: '166px',
    resize: 'none',
    width: '100%'
  }
})

const Question = ({ title, author, date, question, classes }) => (
  <Grid container className={classes.container} spacing={24}>
    <Grid item xs={12}>
      <Typography align='center' variant='display3'>Fórum</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography component='h2' variant='display2'>
        Pergunta
      </Typography>
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
    {/* ANSWERS HERE */}
    <Grid item xs={12}>
      <Typography component='h2' variant='display2' className={classes.spacingTop}>
        Deixe sua resposta
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <textarea className={classes.answer} />
    </Grid>
    <Grid item xs={12}>
      <Button variant='contained' color='primary'>
        Responder
      </Button>
    </Grid>
  </Grid>
)

Question.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Question)

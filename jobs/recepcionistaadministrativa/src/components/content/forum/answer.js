'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = (currentTheme) => ({
  paddingPaper: {
    padding: currentTheme.flexSettings.defaultPaper.padding
  }
})

const Answer = ({ answer, answeredBy, date, classes }) => (
  <Grid item xs={12}>
    <Paper className={classes.paddingPaper}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography component='p' variant='headline'>
            {answer}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component='p' variant='title'>
            Respondido por:&nbsp;&nbsp;{answeredBy}&nbsp;&nbsp;&nbsp;&nbsp;{date}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
)

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  answeredBy: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Answer)

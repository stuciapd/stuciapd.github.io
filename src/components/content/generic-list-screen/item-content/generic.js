'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = (currentTheme) => ({
  container: {
    padding: currentTheme.spacing.unit
  },
  categoryTitle: {
    borderBottom: '1px solid #888'
  },
  title: {
    fontSize: currentTheme.typography.title.fontSize,
    marginBottom: currentTheme.spacing.unit
  },
  inline: {
    display: 'inline-block'
  },
  spacing: {
    marginRight: currentTheme.spacing.unit
  }
})

const ContentScreen = ({ categoryTitle, title, expirationDate, content, classes }) => (
  <Grid container className={classes.container} spacing={24}>
    <Grid item xs={12}>
      <Typography align='center' className={classes.categoryTitle} variant='display3'>{categoryTitle}</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography className={classes.title} color='textPrimary'>
        {title}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography className={classes.inline} color='textSecondary'>
        Data de expiração:&nbsp;&nbsp;
      </Typography>
      <Typography className={classes.inline} color='textSecondary'>
        {expirationDate}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography component='p'>
        {content}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Button variant='contained' className={classes.spacing} color='primary'>
        Encaminhar Curriculo
      </Button>
      <Button variant='contained' color='primary'>
        Voltar
      </Button>
    </Grid>
  </Grid>
)

ContentScreen.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ContentScreen)

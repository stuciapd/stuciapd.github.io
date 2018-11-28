'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LiveSearch from './live-search'
import Card from './card'

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
  }
})

const Screen = ({ type, classes }) => (
  <Grid container className={classes.container} spacing={24}>
    <Grid item xs={12}>
      <Typography align='left' className={classes.title} variant='display3'>{type.toUpperCase()}</Typography>
    </Grid>
    <Grid item xs={12}><LiveSearch querySelector={type} /></Grid>
    <Grid item xs={12}>
      <Card
        link='/ciapd-preview/courses/word'
        query={type}
        thumbnail='https://tecnoblog.net/wp-content/uploads/2016/07/word-700x438.jpg'
        title='Microsoft Word'
        content='Curso introdutório de Microsoft Word organizado por alunos do CEATEC.'
      />
    </Grid>
  </Grid>
)

Screen.propTypes = {
  type: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Screen)

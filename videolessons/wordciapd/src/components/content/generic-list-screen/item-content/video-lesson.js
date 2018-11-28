'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const videoWidth = 1088
const styles = (currentTheme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '0px !important'
  },
  video: {
    height: 612,
    width: videoWidth
  },
  content: {
    margin: currentTheme.spacing.unit,
    width: videoWidth - (currentTheme.spacing.unit * 2)
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const VideoLesson = ({ uri, title, description, classes }) => (
  <Grid container style={{ width: 'auto', marginTop: 26 }} spacing={24}>
    <Grid className={classes.container} item xs={12}>
      <iframe
        className={classes.video}
        src={`https://www.youtube-nocookie.com/embed/${uri}?rel=0&amp;showinfo=0&amp;autoplay=1'`}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
      />
      <Grid className={classes.content} container spacing={24}>
        <Grid className={classes.head} item xs={12}>
          <Typography align='left' variant='display1'>
            {title}
          </Typography>
          <Button onClick={() => { window.location.href = '/ciapd-preview/videolessons' }} variant='contained' color='primary'>
            VOLTAR
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography align='left' variant='headline'>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

VideoLesson.propTypes = {
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VideoLesson)

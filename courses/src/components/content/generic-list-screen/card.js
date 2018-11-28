'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'

const styles = (currentTheme) => ({
  card: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    maxHeight: 216
  },
  media: {
    height: 216,
    width: 359
  },
  title: {
    fontWeight: 500
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    width: '100%'
  },
  chipBox: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  chip: {
    margin: currentTheme.spacing.unit
  }
})

const ExportableCard = ({ link, query, thumbnail, title, content, answers = -1, classes }) => (
  <Card className={classes.card} live-search={query} onClick={() => { window.location.href = link }}>
    {thumbnail && <CardMedia className={classes.media} image={thumbnail} title={title} />}
    <CardContent className={classes.content}>
      <Grid container spacing={24}>
        <Grid item xs={answers === -1 ? 12 : 8}>
          <Typography className={classes.title} gutterBottom variant='headline' component='h2'>{title}</Typography>
          <Typography component='p' variant='headline'>{content}</Typography>
        </Grid>
        {answers !== -1 && <Grid item xs={4} className={classes.chipBox}>
          <Chip
            avatar={<Avatar>{answers}</Avatar>}
            label='Respostas'
            className={classes.chip}
          />
        </Grid>}
      </Grid>
    </CardContent>
  </Card>
)

ExportableCard.propTypes = {
  link: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  answers: PropTypes.number,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ExportableCard)

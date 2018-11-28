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
        link='/ciapd-preview/culture/corrida'
        query={type}
        thumbnail='https://portamedalhas.com.br/wp-content/uploads/2016/10/Corrida-de-rua-projeto.jpg?x79969'
        title='Corrida em cadeira de rodas'
        content='Organizado pela Prefeitura de Campinas, na Lagoa do Taquaral.'
      />
    </Grid>
  </Grid>
)

Screen.propTypes = {
  type: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Screen)

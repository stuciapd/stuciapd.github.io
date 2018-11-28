'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

export const topbarHeight = 40
const styles = (currentTheme) => ({
  topbar: {
    backgroundColor: currentTheme.palette.secondary.main,
    color: currentTheme.palette.secondary.contrastText,
    display: 'flex',
    justifyContent: 'center',
    minHeight: topbarHeight
  }
})

const TopBar = ({ classes }) => (
  <AppBar position='static'>
    <Toolbar className={classes.topbar} />
  </AppBar>
)

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TopBar)

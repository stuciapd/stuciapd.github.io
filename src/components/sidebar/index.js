'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import MenuList from './menulist'

import { topbarHeight } from 'components/topbar'
import { navbarHeight } from 'components/navbar'

const tbHeight = topbarHeight || 0
const nbHeight = navbarHeight || 0

export const sidebarHeight = 256

const styles = (currentTheme) => ({
  drawerPaper: {
    float: 'left',
    height: `calc(100vh  - ${tbHeight}px - ${nbHeight}px)`,
    position: 'relative',
    width: sidebarHeight
  },
  dependenciesError: {
    fontWeight: currentTheme.typography.caption.fontWeight,
    fontSize: currentTheme.typography.caption.fontSize,
    color: currentTheme.palette.error.main
  }
})

const Sidebar = ({ active, classes }) => (
  <Hidden smDown>
    <Drawer
      variant='permanent'
      classes={{
        paper: classes.drawerPaper
      }}
    >
      {<MenuList active={active} /> || <div className={classes.dependenciesError}>MenuList component is required.</div>}
    </Drawer>
  </Hidden>
)

Sidebar.propTypes = {
  active: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Sidebar)

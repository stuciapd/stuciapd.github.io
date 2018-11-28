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
  },
  libras: {
    height: sidebarHeight - 40,
    width: sidebarHeight,
    position: 'absolute',
    bottom: 0,
    zIndex: 3000,
    borderTop: '1px solid #444',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
    <div className={classes.libras}>
      <img src='https://i.pinimg.com/originals/73/c1/10/73c1104fef580320b1c8e57fe077fcf0.png' />
    </div>
  </Hidden>
)

Sidebar.propTypes = {
  active: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Sidebar)

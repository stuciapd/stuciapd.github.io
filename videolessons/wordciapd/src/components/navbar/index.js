'use strict'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuList from 'components/sidebar/menulist'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import MenuIcon from '@material-ui/icons/Menu'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import PersonIcon from '@material-ui/icons/Person'

import puc from './media/puc.png'
import ciapd from './media/ciapd.png'

export const navbarHeight = 120
const profileSize = 70

const styles = (currentTheme) => ({
  navbar: {
    backgroundColor: currentTheme.palette.primary.main,
    display: 'flex',
    justifyContent: 'space-around',
    minHeight: navbarHeight
  },
  logoPuc: {
    height: currentTheme.sizes.logo
  },
  burgerButton: {
    marginLeft: currentTheme.spacing.unit * -1,
    marginRight: currentTheme.spacing.unit + 8
  },
  mobileMenu: {
    width: require('components/sidebar').sidebarHeight // Por algum motivo importar utilizando o import bugava o export do navbarHeight
  },
  dependenciesError: {
    fontWeight: currentTheme.typography.caption.fontWeight,
    fontSize: currentTheme.typography.caption.fontSize,
    color: currentTheme.palette.error.main
  },
  icons: {
    width: '4rem',
    height: '4rem',
    margin: 0
  },
  logoCiapd: {
    height: currentTheme.sizes.logo,
    marginTop: currentTheme.spacing.unit
  },
  offset: {
    width: 1, // any size
    height: 1 // any size
  },
  aContainerMobile: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  aContainer: {
    alignItems: 'center',
    display: 'flex'
  },
  avatarBox: {
    height: profileSize,
    margin: `${currentTheme.spacing.unit}px auto`,
    textAlign: 'center',
    width: profileSize
  },
  avatar: {
    height: profileSize - currentTheme.spacing.unit,
    width: profileSize - currentTheme.spacing.unit
  },
  wMessage: {
    fontSize: currentTheme.typography.subheading.fontSize,
    marginLeft: currentTheme.spacing.unit
  },
  nameMobile: {
    fontSize: currentTheme.typography.headline.fontSize
  },
  name: {
    display: 'block',
    fontSize: currentTheme.typography.headline.fontSize,
    marginLeft: currentTheme.spacing.unit,
    marginTop: currentTheme.spacing.unit - 6
  }
})

class Navbar extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      drawerOpened: false
    }

    this.setDrawerState = (opened = false) => () => {
      this.setState({ drawerOpened: opened })
    }
  }

  render () {
    const { classes } = this.props

    const avatar = (mobile = false) => (
      <div className={mobile ? classes.aContainerMobile : classes.aContainer}>
        <Avatar className={classes.avatarBox}>
          <PersonIcon className={classes.avatar} />
        </Avatar>
        <Typography
          align={mobile ? 'center' : 'left'}
          variant='caption'
          color='inherit'
        >
          <span className={mobile ? classes.nameMobile : classes.wMessage}>Olá,</span>
          <span className={mobile ? classes.nameMobile : classes.name}> Thiago.</span>
        </Typography>
      </div>
    )

    const mobileBar = (
      <Hidden mdUp>
        <IconButton
          className={classes.burgerButton}
          color='inherit'
          aria-label='Menu'
          onClick={this.setDrawerState(true)}>
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          open={this.state.drawerOpened}
          onClose={this.setDrawerState()}
          onOpen={this.setDrawerState(true)}
        >
          <div
            tabIndex={0}
            role='button'
            onClick={this.setDrawerState()}
            onKeyDown={this.setDrawerState()}
            className={classes.mobileMenu}
          >
            <List>
              <ListItem>
                {avatar(true)}
              </ListItem>
            </List>
            <Divider />
            {<MenuList /> || <div className={classes.dependenciesError}>MenuList component is required.</div>}
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <LogoutIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary={
                  <Typography component='p' variant='headline'>
                    Sair
                  </Typography>
                } />
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </Hidden>
    )

    return (
      <AppBar position='static'>
        <Toolbar className={classes.navbar}>
          <Hidden smDown>
            <img src={puc} className={classes.logoPuc} />
          </Hidden>
          {mobileBar}
          <img src={ciapd} className={classes.logoCiapd} />
          <Hidden mdUp><div className={classes.offset} /></Hidden>
          <Hidden smDown>
            {avatar()}
          </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar)

'use strict'

import React, { PureComponent } from 'react'
import SidebarSound, { sidebarSoundState } from './sound'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import WorkIcon from '@material-ui/icons/Work'
import CurriculumIcon from '@material-ui/icons/ChromeReaderMode'
import CultureIcon from '@material-ui/icons/Palette'
import CoursesIcon from '@material-ui/icons/Book'
import VideoLessonsIcon from '@material-ui/icons/VideoLibrary'
import GamesIcon from '@material-ui/icons/VideogameAsset'
import ForumIcon from '@material-ui/icons/LiveHelp'
import LogoutIcon from '@material-ui/icons/ExitToApp'

const styles = (currentTheme) => ({
  active: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    textDecoration: 'none'
  },
  icons: {
    width: '4rem',
    height: '4rem',
    margin: 0
  }
})

class MenuList extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { ...sidebarSoundState }
    this.playSound = this.playSound.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }

  componentDidMount () {
    const Recognition = new (
      window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition
    )()

    Recognition.lang = 'pt-BR'
    Recognition.interimResults = false
    Recognition.maxAlternatives = 5
    Recognition.start()

    Recognition.onresult = (result) => {
      try {
        const handleSpeech = {
          'menu emprego': () => { window.location.href = '/ciapd-preview/jobs' },
          'menu empregos': () => { window.location.href = '/ciapd-preview/jobs' },
          'menu currículo': () => { window.location.href = '/ciapd-preview/curriculum' },
          'menu curriculum': () => { window.location.href = '/ciapd-preview/curriculum' },
          'menu cultura': () => { window.location.href = '/ciapd-preview/culture' },
          'menu curso': () => { window.location.href = '/ciapd-preview/courses' },
          'menu cursos': () => { window.location.href = '/ciapd-preview/courses' },
          'menu videoaula': () => { window.location.href = '/ciapd-preview/videolessons' },
          'menu videoaulas': () => { window.location.href = '/ciapd-preview/videolessons' },
          'menu vídeo aula': () => { window.location.href = '/ciapd-preview/videolessons' },
          'menu vídeo aulas': () => { window.location.href = '/ciapd-preview/videolessons' },
          'menu jogo': () => { window.location.href = '/ciapd-preview/games' },
          'menu jogos': () => { window.location.href = '/ciapd-preview/games' },
          'menu fórum': () => { window.location.href = '/ciapd-preview/forum' },
          'menu sair': () => { window.location.href = '/ciapd-preview/exit' }
        }

        handleSpeech[result.results[0][0].transcript.toLowerCase()]()
      } catch (e) { }

      Recognition.onend = () => {
        Recognition.start()
      }
    }
  }

  playSound (requestedSound) {
    if (this.state.hasOwnProperty(requestedSound)) {
      for (const sound in this.state) {
        if (this.state[sound] === 'PLAYING') {
          this.setState({ [sound]: 'STOPPED' })
        }
      }

      setTimeout(() => {
        this.setState({ [requestedSound]: 'PLAYING' })
      }, 20)
    } else {
      throw new Error('playSound: unknown sound.')
    }
  }

  handleFocus (e) {
    const handleIdentifier = {
      jobs: () => this.playSound('message.jobsMenu'),
      curriculum: () => this.playSound('message.curriculumMenu'),
      culture: () => this.playSound('message.cultureMenu'),
      courses: () => this.playSound('message.coursesMenu'),
      videolessons: () => this.playSound('message.videolessonsMenu'),
      games: () => this.playSound('message.gamesMenu'),
      forum: () => this.playSound('message.forumMenu'),
      exit: () => this.playSound('message.exitMenu')
    }

    handleIdentifier[e.target.id]()
  }

  render () {
    const { active, classes } = this.props
    return (
      <List>
        <ListItem id='jobs' onFocus={this.handleFocus}
          className={active === 'jobs' ? classes.active : null}
          button
          onClick={() => { window.location.href = '/ciapd-preview/jobs' }}>
          <ListItemIcon>
            <WorkIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={
            <Typography component='p' variant='headline'>
              Empregos
          </Typography>
          } />
        </ListItem>
        <ListItem id='curriculum' onFocus={this.handleFocus}
          className={active === 'curriculum' ? classes.active : null}
          button
          onClick={() => { window.location.href = '/ciapd-preview/curriculum' }}>
          <ListItemIcon>
            <CurriculumIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={
            <Typography component='p' variant='headline'>
              Curriculum
          </Typography>
          } />
        </ListItem>
        <ListItem id='culture' onFocus={this.handleFocus}
          className={active === 'culture' ? classes.active : null}
          button
          onClick={() => { window.location.href = '/ciapd-preview/culture' }}>
          <ListItemIcon>
            <CultureIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={
            <Typography component='p' variant='headline'>
              Cultura
          </Typography>
          } />
        </ListItem>
        <ListItem id='courses' onFocus={this.handleFocus}
          className={active === 'courses' ? classes.active : null}
          button
          onClick={() => { window.location.href = '/ciapd-preview/courses' }}>
          <ListItemIcon>
            <CoursesIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={
            <Typography component='p' variant='headline'>
              Cursos
          </Typography>
          } />
        </ListItem>
        <ListItem id='videolessons' onFocus={this.handleFocus}
          className={active === 'videolessons' ? classes.active : null}
          button
          onClick={() => { window.location.href = '/ciapd-preview/videolessons' }}>
          <ListItemIcon>
            <VideoLessonsIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={
            <Typography component='p' variant='headline'>
              Vídeoaulas
          </Typography>
          } />
        </ListItem>
        <ListItem id='games' onFocus={this.handleFocus}
          className={active === 'games' ? classes.active : null}
          button
          onClick={() => { window.location.href = '/ciapd-preview/games' }}>
          <ListItemIcon>
            <GamesIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={
            <Typography component='p' variant='headline'>
              Jogos
          </Typography>
          } />
        </ListItem>
        <ListItem id='forum' onFocus={this.handleFocus}
          className={active === 'forum' ? classes.active : null}
          button
          onClick={() => { window.location.href = '/ciapd-preview/forum' }}>
          <ListItemIcon>
            <ForumIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={
            <Typography component='p' variant='headline'>
              Fórum
          </Typography>
          } />
        </ListItem>
        <ListItem id='exit' onFocus={this.handleFocus} button onClick={() => { window.location.href = '/ciapd-preview/exit' }}>
          <ListItemIcon>
            <LogoutIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={
            <Typography component='p' variant='headline'>
              Sair
          </Typography>
          } />
        </ListItem>
        <SidebarSound state={this.state} />
      </List>
    )
  }
}

MenuList.propTypes = {
  active: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MenuList)

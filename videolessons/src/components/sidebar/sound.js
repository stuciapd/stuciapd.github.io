'use strict'

import React from 'react'
import ReactSound from 'react-sound'

const SidebarSound = ({ state }) => (
  <div>
    <ReactSound {...sidebarSoundProperties('message.coursesMenu', state)} />
    <ReactSound {...sidebarSoundProperties('message.cultureMenu', state)} />
    <ReactSound {...sidebarSoundProperties('message.curriculumMenu', state)} />
    <ReactSound {...sidebarSoundProperties('message.exitMenu', state)} />
    <ReactSound {...sidebarSoundProperties('message.forumMenu', state)} />
    <ReactSound {...sidebarSoundProperties('message.gamesMenu', state)} />
    <ReactSound {...sidebarSoundProperties('message.jobsMenu', state)} />
    <ReactSound {...sidebarSoundProperties('message.videolessonsMenu', state)} />
  </div>
)

const sidebarSoundImport = {
  'message.coursesMenu': require('./media/tts/courses_menu.mp3'),
  'message.cultureMenu': require('./media/tts/culture_menu.mp3'),
  'message.curriculumMenu': require('./media/tts/curriculum_menu.mp3'),
  'message.exitMenu': require('./media/tts/exit_menu.mp3'),
  'message.forumMenu': require('./media/tts/forum_menu.mp3'),
  'message.gamesMenu': require('./media/tts/games_menu.mp3'),
  'message.jobsMenu': require('./media/tts/jobs_menu.mp3'),
  'message.videolessonsMenu': require('./media/tts/videolessons_menu.mp3')
}

export const sidebarSoundState = {
  'message.coursesMenu': 'STOPPED',
  'message.cultureMenu': 'STOPPED',
  'message.curriculumMenu': 'STOPPED',
  'message.exitMenu': 'STOPPED',
  'message.forumMenu': 'STOPPED',
  'message.gamesMenu': 'STOPPED',
  'message.jobsMenu': 'STOPPED',
  'message.videolessonsMenu': 'STOPPED'
}

const sidebarSoundProperties = (url, state) => ({
  url: sidebarSoundImport[url],
  volume: 75,
  autoLoad: true,
  playStatus: ReactSound.status[state[url]]
})

export default SidebarSound

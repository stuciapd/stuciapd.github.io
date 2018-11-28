'use strict'

import React from 'react'
import ReactSound from 'react-sound'

const MainScreenSound = ({ state }) => (
  <div>
    <ReactSound
      {...mainScreenSoundProperties('message.jobs', state)}
      onFinishedPlaying={() => {
        setTimeout(() => {
          document.getElementById('cultureSearch').focus()
        }, 1000)
      }}
    />
    <ReactSound {...mainScreenSoundProperties('message.curriculum', state)} />
    <ReactSound {...mainScreenSoundProperties('message.culture', state)} />
    <ReactSound {...mainScreenSoundProperties('message.courses', state)} />
    <ReactSound {...mainScreenSoundProperties('message.videolessons', state)} />
    <ReactSound {...mainScreenSoundProperties('message.videolesson', state)} />
    <ReactSound {...mainScreenSoundProperties('message.games', state)} />
    <ReactSound {...mainScreenSoundProperties('message.forum', state)} />
  </div>
)

const mainScreenSoundImport = {
  'message.jobs': require('media/tts/jobs.mp3'),
  'message.curriculum': require('media/tts/curriculum.mp3'),
  'message.culture': require('media/tts/culture.mp3'),
  'message.courses': require('media/tts/courses.mp3'),
  'message.videolessons': require('media/tts/videolessons.mp3'),
  'message.videolesson': require('media/tts/videolesson.mp3'),
  'message.games': require('media/tts/games.mp3'),
  'message.forum': require('media/tts/forum.mp3')
}

export const mainScreenSoundState = {
  'message.jobs': 'STOPPED',
  'message.curriculum': 'STOPPED',
  'message.culture': 'STOPPED',
  'message.courses': 'STOPPED',
  'message.videolessons': 'STOPPED',
  'message.videolesson': 'STOPPED',
  'message.games': 'STOPPED',
  'message.forum': 'STOPPED'
}

const mainScreenSoundProperties = (url, state) => ({
  url: mainScreenSoundImport[url],
  volume: 75,
  autoLoad: true,
  playStatus: ReactSound.status[state[url]]
})

export default MainScreenSound

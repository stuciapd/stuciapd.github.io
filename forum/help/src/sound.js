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
    <ReactSound {...mainScreenSoundProperties('message.topico', state)} />
    <ReactSound {...mainScreenSoundProperties('message.topico1', state)} />
    <ReactSound {...mainScreenSoundProperties('message.autor', state)} />
    <ReactSound {...mainScreenSoundProperties('message.pergunta', state)} />
    <ReactSound {...mainScreenSoundProperties('message.introResp', state)} />
    <ReactSound
      {...mainScreenSoundProperties('message.resposta', state)}
      onFinishedPlaying={() => {
        setTimeout(() => {
          document.getElementById('resp').focus()
        }, 1000)
      }}
    />
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
  'message.forum': require('media/tts/forum.mp3'),
  'message.topico': require('components/content/forum/media/tts/topico.mp3'),
  'message.topico1': require('components/content/forum/media/tts/topico1.mp3'),
  'message.autor': require('components/content/forum/media/tts/autor.mp3'),
  'message.pergunta': require('components/content/forum/media/tts/pergunta.mp3'),
  'message.introResp': require('components/content/forum/media/tts/introResp.mp3'),
  'message.resposta': require('components/content/forum/media/tts/resposta.mp3')
}

export const mainScreenSoundState = {
  'message.jobs': 'STOPPED',
  'message.curriculum': 'STOPPED',
  'message.culture': 'STOPPED',
  'message.courses': 'STOPPED',
  'message.videolessons': 'STOPPED',
  'message.videolesson': 'STOPPED',
  'message.games': 'STOPPED',
  'message.forum': 'STOPPED',
  'message.topico': 'STOPPED',
  'message.topico1': 'STOPPED',
  'message.autor': 'STOPPED',
  'message.pergunta': 'STOPPED',
  'message.introResp': 'STOPPED',
  'message.resposta': 'STOPPED'
}

const mainScreenSoundProperties = (url, state) => ({
  url: mainScreenSoundImport[url],
  volume: 75,
  autoLoad: true,
  playStatus: ReactSound.status[state[url]]
})

export default MainScreenSound

'use strict'

import React from 'react'
import ReactSound from 'react-sound'

const GenericScreenSound = ({ state }) => (
  <div>
    <ReactSound {...genericScreenSoundProperties('message.searchFieldFocus', state)} />
    <ReactSound {...genericScreenSoundProperties('message.curso', state)} />
    <ReactSound {...genericScreenSoundProperties('message.cursoCore', state)} />
    <ReactSound {...genericScreenSoundProperties('message.cursoCore2', state)} />
  </div>
)

const genericScreenSoundImport = {
  'message.searchFieldFocus': require('./media/tts/search_field_focus.mp3'),
  'message.curso': require('./media/tts/curso.mp3'),
  'message.cursoCore': require('./media/tts/curso_core.mp3'),
  'message.cursoCore2': require('./media/tts/curso_core2.mp3')
}

export const genericScreenSoundState = {
  'message.searchFieldFocus': 'STOPPED',
  'message.curso': 'STOPPED',
  'message.cursoCore': 'STOPPED',
  'message.cursoCore2': 'STOPPED'
}

const genericScreenSoundProperties = (url, state) => ({
  url: genericScreenSoundImport[url],
  volume: 75,
  autoLoad: true,
  playStatus: ReactSound.status[state[url]]
})

export default GenericScreenSound

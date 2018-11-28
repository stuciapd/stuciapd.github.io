'use strict'

import React from 'react'
import ReactSound from 'react-sound'

const GenericScreenSound = ({ state }) => (
  <div>
    <ReactSound {...genericScreenSoundProperties('message.searchFieldFocus', state)} />
    <ReactSound {...genericScreenSoundProperties('message.auxiliar', state)} />
    <ReactSound {...genericScreenSoundProperties('message.auxiliarCore', state)} />
    <ReactSound {...genericScreenSoundProperties('message.auxiliarData', state)} />
  </div>
)

const genericScreenSoundImport = {
  'message.searchFieldFocus': require('./media/tts/search_field_focus.mp3'),
  'message.auxiliar': require('./media/tts/auxiliar.mp3'),
  'message.auxiliarCore': require('./media/tts/auxiliar_core.mp3'),
  'message.auxiliarData': require('./media/tts/auxiliar_data.mp3')
}

export const genericScreenSoundState = {
  'message.searchFieldFocus': 'STOPPED',
  'message.auxiliar': 'STOPPED',
  'message.auxiliarCore': 'STOPPED',
  'message.auxiliarData': 'STOPPED'
}

const genericScreenSoundProperties = (url, state) => ({
  url: genericScreenSoundImport[url],
  volume: 75,
  autoLoad: true,
  playStatus: ReactSound.status[state[url]]
})

export default GenericScreenSound

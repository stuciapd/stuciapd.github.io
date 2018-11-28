'use strict'

import React from 'react'
import ReactSound from 'react-sound'

const GenericScreenSound = ({ state }) => (
  <div>
    <ReactSound {...genericScreenSoundProperties('message.searchFieldFocus', state)} />
    <ReactSound {...genericScreenSoundProperties('message.recepcionista', state)} />
    <ReactSound {...genericScreenSoundProperties('message.recepcionistaCore', state)} />
    <ReactSound {...genericScreenSoundProperties('message.recepcionistaData', state)} />
  </div>
)

const genericScreenSoundImport = {
  'message.searchFieldFocus': require('./media/tts/search_field_focus.mp3'),
  'message.recepcionista': require('./media/tts/recepcionista.mp3'),
  'message.recepcionistaCore': require('./media/tts/recepcionista_core.mp3'),
  'message.recepcionistaData': require('./media/tts/recepcionista_data.mp3')
}

export const genericScreenSoundState = {
  'message.searchFieldFocus': 'STOPPED',
  'message.recepcionista': 'STOPPED',
  'message.recepcionistaCore': 'STOPPED',
  'message.recepcionistaData': 'STOPPED'
}

const genericScreenSoundProperties = (url, state) => ({
  url: genericScreenSoundImport[url],
  volume: 75,
  autoLoad: true,
  playStatus: ReactSound.status[state[url]]
})

export default GenericScreenSound

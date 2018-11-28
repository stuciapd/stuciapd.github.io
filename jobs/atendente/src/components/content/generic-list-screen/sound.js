'use strict'

import React from 'react'
import ReactSound from 'react-sound'

const GenericScreenSound = ({ state }) => (
  <div>
    <ReactSound {...genericScreenSoundProperties('message.searchFieldFocus', state)} />
    <ReactSound {...genericScreenSoundProperties('message.atendente', state)} />
    <ReactSound {...genericScreenSoundProperties('message.atendenteCore', state)} />
    <ReactSound {...genericScreenSoundProperties('message.atendenteCore2', state)} />
    <ReactSound {...genericScreenSoundProperties('message.atendenteData', state)} />
  </div>
)

const genericScreenSoundImport = {
  'message.searchFieldFocus': require('./media/tts/search_field_focus.mp3'),
  'message.atendente': require('./media/tts/atendente.mp3'),
  'message.atendenteCore': require('./media/tts/atendente_core.mp3'),
  'message.atendenteCore2': require('./media/tts/atendente_core2.mp3'),
  'message.atendenteData': require('./media/tts/atendente_data.mp3')
}

export const genericScreenSoundState = {
  'message.searchFieldFocus': 'STOPPED',
  'message.atendente': 'STOPPED',
  'message.atendenteCore': 'STOPPED',
  'message.atendenteCore2': 'STOPPED',
  'message.atendenteData': 'STOPPED'
}

const genericScreenSoundProperties = (url, state) => ({
  url: genericScreenSoundImport[url],
  volume: 75,
  autoLoad: true,
  playStatus: ReactSound.status[state[url]]
})

export default GenericScreenSound

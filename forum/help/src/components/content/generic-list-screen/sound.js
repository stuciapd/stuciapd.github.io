'use strict'

import React from 'react'
import ReactSound from 'react-sound'

const GenericScreenSound = ({ state }) => (
  <div>
    <ReactSound {...genericScreenSoundProperties('message.searchFieldFocus', state)} />
    <ReactSound {...genericScreenSoundProperties('message.cadeira', state)} />
    <ReactSound {...genericScreenSoundProperties('message.cadeiraCore', state)} />
    <ReactSound {...genericScreenSoundProperties('message.cadeiraCore2', state)} />
    <ReactSound {...genericScreenSoundProperties('message.cadeiraCore3', state)} />
  </div>
)

const genericScreenSoundImport = {
  'message.searchFieldFocus': require('./media/tts/search_field_focus.mp3'),
  'message.cadeira': require('./media/tts/cadeira.mp3'),
  'message.cadeiraCore': require('./media/tts/cadeira_core.mp3'),
  'message.cadeiraCore2': require('./media/tts/cadeira_core2.mp3'),
  'message.cadeiraCore3': require('./media/tts/cadeira_core3.mp3')
}

export const genericScreenSoundState = {
  'message.searchFieldFocus': 'STOPPED',
  'message.cadeira': 'STOPPED',
  'message.cadeiraCore': 'STOPPED',
  'message.cadeiraCore2': 'STOPPED',
  'message.cadeiraCore3': 'STOPPED'
}

const genericScreenSoundProperties = (url, state) => ({
  url: genericScreenSoundImport[url],
  volume: 75,
  autoLoad: true,
  playStatus: ReactSound.status[state[url]]
})

export default GenericScreenSound

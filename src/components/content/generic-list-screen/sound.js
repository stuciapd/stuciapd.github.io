'use strict'

import React from 'react'
import ReactSound from 'react-sound'

const GenericScreenSound = ({ state }) => (
  <div>
    <ReactSound {...genericScreenSoundProperties('message.searchFieldFocus', state)} />
  </div>
)

const genericScreenSoundImport = {
  'message.searchFieldFocus': require('./media/tts/search_field_focus.mp3')
}

export const genericScreenSoundState = {
  'message.searchFieldFocus': 'STOPPED'
}

const genericScreenSoundProperties = (url, state) => ({
  url: genericScreenSoundImport[url],
  volume: 75,
  autoLoad: true,
  playStatus: ReactSound.status[state[url]]
})

export default GenericScreenSound

'use strict'

import React from 'react'
import ReactSound from 'react-sound'

const CurriculumSound = ({ state }) => (
  <div>
    <ReactSound {...curriculumSoundProperties('message.cargoOcupado', state)} />
    <ReactSound {...curriculumSoundProperties('message.dataInicioFocus', state)} />
    <ReactSound {...curriculumSoundProperties('message.dataTerminoFocus', state)} />
    <ReactSound {...curriculumSoundProperties('message.empresaFocus', state)} />
    <ReactSound {...curriculumSoundProperties('message.grauEnsinoFocus', state)} />
    <ReactSound {...curriculumSoundProperties('message.instituicaoFocus', state)} />
    <ReactSound {...curriculumSoundProperties('message.nomeCursoFocus', state)} />
    <ReactSound {...curriculumSoundProperties('message.outrosFocus', state)} />
    <ReactSound {...curriculumSoundProperties('message.linkedin', state)} />
    <ReactSound {...curriculumSoundProperties('message.facebook', state)} />
    <ReactSound {...curriculumSoundProperties('message.instagram', state)} />
  </div>
)

const curriculumSoundImport = {
  'message.cargoOcupado': require('./media/tts/cargoOcupado.mp3'),
  'message.dataInicioFocus': require('./media/tts/dataInicioFocus.mp3'),
  'message.dataTerminoFocus': require('./media/tts/dataTerminoFocus.mp3'),
  'message.empresaFocus': require('./media/tts/empresaFocus.mp3'),
  'message.grauEnsinoFocus': require('./media/tts/grauEnsinoFocus.mp3'),
  'message.instituicaoFocus': require('./media/tts/instituicaoFocus.mp3'),
  'message.nomeCursoFocus': require('./media/tts/nomeCursoFocus.mp3'),
  'message.outrosFocus': require('./media/tts/outrosFocus.mp3'),
  'message.linkedin': require('./media/tts/linkedin.mp3'),
  'message.facebook': require('./media/tts/facebook.mp3'),
  'message.instagram': require('./media/tts/instagram.mp3')
}

export const curriculumSoundState = {
  'message.cargoOcupado': 'STOPPED',
  'message.dataInicioFocus': 'STOPPED',
  'message.dataTerminoFocus': 'STOPPED',
  'message.empresaFocus': 'STOPPED',
  'message.grauEnsinoFocus': 'STOPPED',
  'message.instituicaoFocus': 'STOPPED',
  'message.nomeCursoFocus': 'STOPPED',
  'message.outrosFocus': 'STOPPED',
  'message.linkedin': 'STOPPED',
  'message.facebook': 'STOPPED',
  'message.instagram': 'STOPPED'
}

const curriculumSoundProperties = (url, state) => ({
  url: curriculumSoundImport[url],
  volume: 75,
  autoLoad: true,
  playStatus: ReactSound.status[state[url]]
})

export default CurriculumSound

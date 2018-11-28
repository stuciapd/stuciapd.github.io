'use strict'

import React from 'react'
import ReactSound from 'react-sound'

const globalSound = ({ state }) => (
  <div>
    <ReactSound {...globalSoundProperties('character.a', state)} />
    <ReactSound {...globalSoundProperties('character.b', state)} />
    <ReactSound {...globalSoundProperties('character.c', state)} />
    <ReactSound {...globalSoundProperties('character.d', state)} />
    <ReactSound {...globalSoundProperties('character.e', state)} />
    <ReactSound {...globalSoundProperties('character.f', state)} />
    <ReactSound {...globalSoundProperties('character.g', state)} />
    <ReactSound {...globalSoundProperties('character.h', state)} />
    <ReactSound {...globalSoundProperties('character.i', state)} />
    <ReactSound {...globalSoundProperties('character.j', state)} />
    <ReactSound {...globalSoundProperties('character.k', state)} />
    <ReactSound {...globalSoundProperties('character.l', state)} />
    <ReactSound {...globalSoundProperties('character.m', state)} />
    <ReactSound {...globalSoundProperties('character.n', state)} />
    <ReactSound {...globalSoundProperties('character.o', state)} />
    <ReactSound {...globalSoundProperties('character.p', state)} />
    <ReactSound {...globalSoundProperties('character.q', state)} />
    <ReactSound {...globalSoundProperties('character.r', state)} />
    <ReactSound {...globalSoundProperties('character.s', state)} />
    <ReactSound {...globalSoundProperties('character.t', state)} />
    <ReactSound {...globalSoundProperties('character.u', state)} />
    <ReactSound {...globalSoundProperties('character.v', state)} />
    <ReactSound {...globalSoundProperties('character.w', state)} />
    <ReactSound {...globalSoundProperties('character.x', state)} />
    <ReactSound {...globalSoundProperties('character.y', state)} />
    <ReactSound {...globalSoundProperties('character.z', state)} />
    <ReactSound {...globalSoundProperties('character.0', state)} />
    <ReactSound {...globalSoundProperties('character.1', state)} />
    <ReactSound {...globalSoundProperties('character.2', state)} />
    <ReactSound {...globalSoundProperties('character.3', state)} />
    <ReactSound {...globalSoundProperties('character.4', state)} />
    <ReactSound {...globalSoundProperties('character.5', state)} />
    <ReactSound {...globalSoundProperties('character.6', state)} />
    <ReactSound {...globalSoundProperties('character.7', state)} />
    <ReactSound {...globalSoundProperties('character.8', state)} />
    <ReactSound {...globalSoundProperties('character.9', state)} />
    <ReactSound {...globalSoundProperties('character.at', state)} />
    <ReactSound {...globalSoundProperties('character.cedilla', state)} />
    <ReactSound {...globalSoundProperties('character.dash', state)} />
    <ReactSound {...globalSoundProperties('character.dot', state)} />
    <ReactSound {...globalSoundProperties('character.underscore', state)} />
    <ReactSound {...globalSoundProperties('character.delete', state)} />
    <ReactSound {...globalSoundProperties('message.focus', state)} />
  </div>
)

const globalSoundImport = {
  'character.a': require('media/tts/a.mp3'),
  'character.b': require('media/tts/b.mp3'),
  'character.c': require('media/tts/c.mp3'),
  'character.d': require('media/tts/d.mp3'),
  'character.e': require('media/tts/e.mp3'),
  'character.f': require('media/tts/f.mp3'),
  'character.g': require('media/tts/g.mp3'),
  'character.h': require('media/tts/h.mp3'),
  'character.i': require('media/tts/i.mp3'),
  'character.j': require('media/tts/j.mp3'),
  'character.k': require('media/tts/k.mp3'),
  'character.l': require('media/tts/l.mp3'),
  'character.m': require('media/tts/m.mp3'),
  'character.n': require('media/tts/n.mp3'),
  'character.o': require('media/tts/o.mp3'),
  'character.p': require('media/tts/p.mp3'),
  'character.q': require('media/tts/q.mp3'),
  'character.r': require('media/tts/r.mp3'),
  'character.s': require('media/tts/s.mp3'),
  'character.t': require('media/tts/t.mp3'),
  'character.u': require('media/tts/u.mp3'),
  'character.v': require('media/tts/v.mp3'),
  'character.w': require('media/tts/w.mp3'),
  'character.x': require('media/tts/x.mp3'),
  'character.y': require('media/tts/y.mp3'),
  'character.z': require('media/tts/z.mp3'),
  'character.0': require('media/tts/0.mp3'),
  'character.1': require('media/tts/1.mp3'),
  'character.2': require('media/tts/2.mp3'),
  'character.3': require('media/tts/3.mp3'),
  'character.4': require('media/tts/4.mp3'),
  'character.5': require('media/tts/5.mp3'),
  'character.6': require('media/tts/6.mp3'),
  'character.7': require('media/tts/7.mp3'),
  'character.8': require('media/tts/8.mp3'),
  'character.9': require('media/tts/9.mp3'),
  'character.at': require('media/tts/at.mp3'),
  'character.cedilla': require('media/tts/cedilla.mp3'),
  'character.dash': require('media/tts/dash.mp3'),
  'character.dot': require('media/tts/dot.mp3'),
  'character.underscore': require('media/tts/underscore.mp3'),
  'character.delete': require('media/tts/delete.mp3'),
  'message.focus': require('components/content/forum/media/tts/focus.mp3')
}

export const globalSoundState = {
  'character.a': 'STOPPED',
  'character.b': 'STOPPED',
  'character.c': 'STOPPED',
  'character.d': 'STOPPED',
  'character.e': 'STOPPED',
  'character.f': 'STOPPED',
  'character.g': 'STOPPED',
  'character.h': 'STOPPED',
  'character.i': 'STOPPED',
  'character.j': 'STOPPED',
  'character.k': 'STOPPED',
  'character.l': 'STOPPED',
  'character.m': 'STOPPED',
  'character.n': 'STOPPED',
  'character.o': 'STOPPED',
  'character.p': 'STOPPED',
  'character.q': 'STOPPED',
  'character.r': 'STOPPED',
  'character.s': 'STOPPED',
  'character.t': 'STOPPED',
  'character.u': 'STOPPED',
  'character.v': 'STOPPED',
  'character.w': 'STOPPED',
  'character.x': 'STOPPED',
  'character.y': 'STOPPED',
  'character.z': 'STOPPED',
  'character.0': 'STOPPED',
  'character.1': 'STOPPED',
  'character.2': 'STOPPED',
  'character.3': 'STOPPED',
  'character.4': 'STOPPED',
  'character.5': 'STOPPED',
  'character.6': 'STOPPED',
  'character.7': 'STOPPED',
  'character.8': 'STOPPED',
  'character.9': 'STOPPED',
  'character.at': 'STOPPED',
  'character.cedilla': 'STOPPED',
  'character.dash': 'STOPPED',
  'character.dot': 'STOPPED',
  'character.underscore': 'STOPPED',
  'character.delete': 'STOPPED',
  'message.focus': 'STOPPED'
}

const globalSoundProperties = (url, state) => ({
  url: globalSoundImport[url],
  volume: 75,
  autoLoad: true,
  playStatus: ReactSound.status[state[url]]
})

export default globalSound

'use strict'

import React from 'react'
import ReactSound from 'react-sound'

const loginSound = ({ state }) => (
  <div>
    <ReactSound {...loginSoundProperties('message.emailFieldFocus', state)} />
    <ReactSound
      {...loginSoundProperties('message.incorrectLogin', state)}
      onFinishedPlaying={() => {
        setTimeout(() => {
          document.getElementById('email').focus()
        }, 500)
      }}
    />

    <ReactSound {...loginSoundProperties('message.passwordFieldFocus', state)} />
    <ReactSound {...loginSoundProperties('message.submitButtonFocus', state)} />
    <ReactSound
      {...loginSoundProperties('message.welcome', state)}
      onFinishedPlaying={() => {
        setTimeout(() => {
          document.getElementById('email').focus()
          setTimeout(() => {
            const Recognition = new (
              window.SpeechRecognition ||
              window.webkitSpeechRecognition ||
              window.mozSpeechRecognition ||
              window.msSpeechRecognition
            )()

            Recognition.lang = 'pt-BR'
            Recognition.interimResults = false
            Recognition.maxAlternatives = 5
            Recognition.start()

            Recognition.onresult = (result) => {
              try {
                const text = result.results[0][0].transcript.toLowerCase().split(' ').join('').split('arroba').join('@')
                if (text === 'entrar') {
                  document.getElementById('submit').click()
                } else if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(text)) {
                  document.getElementById('email').value = text
                  setTimeout(() => { document.getElementById('password').focus() }, 1000)
                } else {
                  document.getElementById('password').value = text
                  setTimeout(() => { document.getElementById('submit').focus() }, 1000)
                }
              } catch (e) { }

              Recognition.onend = () => {
                Recognition.start()
              }
            }
          }, 3500)
        }, 500)
      }}
    />

    <ReactSound {...loginSoundProperties('message.wait', state)} />

    <ReactSound
      {...loginSoundProperties('message.emailFieldBlank', state)}
      onFinishedPlaying={() => {
        setTimeout(() => {
          document.getElementById('email').focus()
        }, 500)
      }}
    />

    <ReactSound
      {...loginSoundProperties('message.emailFieldInvalid', state)}
      onFinishedPlaying={() => {
        setTimeout(() => {
          document.getElementById('email').value = ''
          document.getElementById('email').focus()
        }, 500)
      }}
    />

    <ReactSound
      {...loginSoundProperties('message.passwordFieldBlank', state)}
      onFinishedPlaying={() => {
        setTimeout(() => {
          document.getElementById('password').focus()
        }, 500)
      }}
    />

    <ReactSound
      {...loginSoundProperties('message.welcomeThiago', state)}
      onFinishedPlaying={() => {
        setTimeout(() => {
          window.location.href = '/ciapd-preview/jobs'
        }, 500)
      }}
    />
  </div>
)

const loginSoundImport = {
  'message.emailFieldFocus': require('./media/tts/email_field_focus.mp3'),
  'message.incorrectLogin': require('./media/tts/incorrect_login.mp3'),
  'message.passwordFieldFocus': require('./media/tts/password_field_focus.mp3'),
  'message.submitButtonFocus': require('./media/tts/submit_button_focus.mp3'),
  'message.welcome': require('./media/tts/welcome.mp3'),
  'message.wait': require('./media/tts/wait.mp3'),
  'message.emailFieldBlank': require('./media/tts/email_field_blank.mp3'),
  'message.emailFieldInvalid': require('./media/tts/email_field_invalid.mp3'),
  'message.passwordFieldBlank': require('./media/tts/password_field_blank.mp3'),
  'message.welcomeThiago': require('./media/tts/welcome_thiago.mp3')
}

export const loginSoundState = {
  'message.emailFieldFocus': 'STOPPED',
  'message.incorrectLogin': 'STOPPED',
  'message.passwordFieldFocus': 'STOPPED',
  'message.submitButtonFocus': 'STOPPED',
  'message.welcome': 'STOPPED',
  'message.wait': 'STOPPED',
  'message.emailFieldBlank': 'STOPPED',
  'message.emailFieldInvalid': 'STOPPED',
  'message.passwordFieldBlank': 'STOPPED',
  'message.welcomeThiago': 'STOPPED'
}

const loginSoundProperties = (url, state) => ({
  url: loginSoundImport[url],
  volume: 75,
  autoLoad: true,
  playStatus: ReactSound.status[state[url]]
})

export default loginSound

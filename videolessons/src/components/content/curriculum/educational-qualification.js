'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import ShoolIcon from '@material-ui/icons/School'
import ImportContactsIcon from '@material-ui/icons/ImportContacts'
import TextField from '@material-ui/core/TextField'

const styles = (currentTheme) => ({
  spacingTop: {
    marginTop: currentTheme.spacing.unit,
    marginBottom: 50
  },
  fullWidth: {
    width: '100%'
  }
})

const EducationalQualification = ({ uuid, classes }) => (
  <Grid container className={classes.spacingTop} spacing={16}>
    <Grid item xs={6}>
      <FormControl className={classes.fullWidth}>
        <InputLabel
          htmlFor={`educ-qual-instituition-${uuid}`}
        >
          Digite o nome da instituição
        </InputLabel>
        <Input
          id={`educ-qual-instituition-${uuid}`}
          type='text'
          placeholder='Instituição'
          required
          startAdornment={
            <InputAdornment position='start'>
              <AccountBalanceIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl className={classes.fullWidth}>
        <InputLabel
          htmlFor={`educ-qual-course-${uuid}`}
        >
          Digite o nome do curso
        </InputLabel>
        <Input
          id={`educ-qual-course-${uuid}`}
          type='text'
          placeholder='Curso'
          required
          startAdornment={
            <InputAdornment position='start'>
              <ShoolIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl className={classes.fullWidth}>
        <InputLabel
          htmlFor={`educ-qual-degree-${uuid}`}
        >
          Digite o grau de ensino
        </InputLabel>
        <Input
          id={`educ-qual-degree-${uuid}`}
          type='text'
          placeholder='Grau de ensino'
          required
          startAdornment={
            <InputAdornment position='start'>
              <ImportContactsIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Grid>
    <Grid item xs={3}>
      <TextField
        id={`educ-qual-start-${uuid}`}
        label='Data de início'
        className={classes.fullWidth}
        type='date'
        InputLabelProps={{
          shrink: true
        }}
      />
    </Grid>
    <Grid item xs={3}>
      <TextField
        id={`educ-qual-finish-${uuid}`}
        label='Data de término'
        className={classes.fullWidth}
        type='date'
        InputLabelProps={{
          shrink: true
        }}
      />
    </Grid>
  </Grid>
)

EducationalQualification.propTypes = {
  uuid: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EducationalQualification)

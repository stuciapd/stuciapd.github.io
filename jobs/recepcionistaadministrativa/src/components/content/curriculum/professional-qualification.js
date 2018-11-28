'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import DomainIcon from '@material-ui/icons/Domain'
import TextField from '@material-ui/core/TextField'
import AttachFileIcon from '@material-ui/icons/AttachFile'

const styles = (currentTheme) => ({
  spacingTop: {
    marginTop: currentTheme.spacing.unit,
    marginBottom: 50
  },
  fullWidth: {
    width: '100%'
  }
})

const ProfessionalQualification = ({ uuid, classes }) => (
  <Grid container className={classes.spacingTop} spacing={16}>
    <Grid item xs={4}>
      <FormControl className={classes.fullWidth}>
        <InputLabel
          htmlFor={`prof-qual-enterprise-${uuid}`}
        >
          Digite o nome da empresa
        </InputLabel>
        <Input
          id={`prof-qual-enterprise-${uuid}`}
          type='text'
          placeholder='Empresa'
          required
          startAdornment={
            <InputAdornment position='start'>
              <DomainIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Grid>
    <Grid item xs={2}>
      <TextField
        id={`prof-qual-starter-date-${uuid}`}
        label='Data de início'
        type='date'
        InputLabelProps={{
          shrink: true
        }}
      />
    </Grid>
    <Grid item xs={2}>
      <TextField
        id={`prof-qual-finish-date-${uuid}`}
        label='Data de término'
        type='date'
        InputLabelProps={{
          shrink: true
        }}
      />
    </Grid>
    <Grid item xs={4}>
      <FormControl className={classes.fullWidth}>
        <InputLabel
          htmlFor={`prof-qual-office-${uuid}`}
        >
          Cargo ocupado
        </InputLabel>
        <Input
          id={`prof-qual-office-${uuid}`}
          type='text'
          placeholder='Cargo'
          required
          startAdornment={
            <InputAdornment position='start'>
              <AttachFileIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Grid>
  </Grid>
)

ProfessionalQualification.propTypes = {
  uuid: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfessionalQualification)

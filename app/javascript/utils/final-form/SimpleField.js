import React from 'react'
import { Field } from 'react-final-form'

// By default empty values are not set. This allows resetting values.
const identity = value => (value)

export const SimpleField = ({ fieldName, fieldLabel, validation, placeholder }) => (
  <Field name={fieldName} validate={validation} parse={identity}>
    {({ input, meta }) => (
      <React.Fragment>
        <label htmlFor={`form-${fieldName}`}>{fieldLabel}:</label>
        <input {...input}
          id={`form-${fieldName}`}
          className={(meta.error && meta.touched && 'error') || ''}
          type='text'
          placeholder={placeholder} />
        {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
      </React.Fragment>
    )}
  </Field>
)

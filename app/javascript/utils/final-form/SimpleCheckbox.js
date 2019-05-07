import React from 'react'
import { Field } from 'react-final-form'

export const SimpleCheckbox = ({ fieldName, fieldLabel }) => (
  <Field name={fieldName}>
    {({ input, meta }) => (
      <React.Fragment>
        <input {...input} checked={(input && (input.value === true || input.value === 'true'))} id={`form-${fieldName}`} type='checkbox' />
        <label htmlFor={`form-${fieldName}`}>{fieldLabel}</label>
      </React.Fragment>
    )}
  </Field>
)

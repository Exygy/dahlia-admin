import React from 'react'
import { Field } from 'formik'

export const SimpleField = ({ name, label, validation, ...fieldProps }) => (
  <Field name={name} validate={validation} {...fieldProps} >
    {({ field, form: { touched, errors } }) => {
      const isTouched = touched[name]
      const error = errors[name]
      return (
        <React.Fragment>
          <label htmlFor={`form-${name}`}>{label}:</label>
          <input
            id={`form-${name}`}
            className={(error && isTouched && 'error') || ''}
            {...field} />
          {error && isTouched && <span className='error'>{error}</span>}
        </React.Fragment>
      )
    }}
  </Field>
)

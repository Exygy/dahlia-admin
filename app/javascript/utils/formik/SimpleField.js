import React from 'react'
import { Field } from 'formik'

export const SimpleField = ({ name, label, validation, type, ...fieldProps }) => (
  <Field name={name} validate={validation} {...fieldProps} >
    {({ field, form: { touched, errors } }) => {
      const isTouched = touched[name]
      const error = errors[name]
      return (
        <React.Fragment>
          {type !== 'checkbox' && <label htmlFor={`form-${name}`}>{label}:</label>}
          <input
            id={`form-${name}`}
            className={(error && isTouched && 'error') || ''}
            type={type || 'text'}
            {...Object.assign(field, fieldProps)} />
          {type && type === 'checkbox' && <label htmlFor={`form-${name}`}>{label}:</label>}
          {error && isTouched && <span className='error'>{error}</span>}
        </React.Fragment>
      )
    }}
  </Field>
)

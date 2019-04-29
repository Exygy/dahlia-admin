import React from 'react'
import { Field } from 'react-final-form'

export const SimpleTextArea = ({ fieldName, fieldLabel, validation, placeholder, rows }) => {
  const computedRows = rows || 10
  return (
    <Field name={fieldName} validate={validation}>
      {({ input, meta }) => (
        <React.Fragment>
          <label htmlFor={`form-${fieldName}`}>{fieldLabel}:</label>
          <textarea rows={computedRows} {...input} id={`form-${fieldName}`} className={meta.error && meta.touched && 'error'} type='text' placeholder={placeholder} />
          {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
        </React.Fragment>
      )}
    </Field>
  )
}

import React from 'react'

export const FormRow = ({ children }) => (
  <div className='row inner--3x full-width'>
    {children}
  </div>
)

export const FormColumn = ({ children }) => (
  <div className='column medium-9 large-6'>
    {children}
  </div>
)

export const Spacer = ({ height }) => (<div style={{height: height || '25px'}} />)

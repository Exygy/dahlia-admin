import React from 'react'
import FormGroup from '../../atoms/FormGroup'
import { SimpleTextArea } from '~/utils/final-form/SimpleTextArea'

const ListingFormSectionsPolicies = ({ listing }) => {
  return (
    <React.Fragment>
      <h3>Policies</h3>

      <FormGroup>
        <SimpleTextArea fieldName='smoking_policy' fieldLabel='Smoking Policy' />
        <SimpleTextArea fieldName='pet_policy' fieldLabel='Pet Policy' />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsPolicies

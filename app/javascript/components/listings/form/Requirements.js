import React from 'react'
import FormGroup from '../../atoms/FormGroup'
import { SimpleTextArea } from '~/utils/final-form/SimpleTextArea'

const ListingFormSectionsRequirements = ({ listing }) => {
  return (
    <React.Fragment>
      <h3>Additional Requirements</h3>

      <FormGroup>
        <SimpleTextArea fieldName='credit_history' fieldLabel='Credit History' />
        <SimpleTextArea fieldName='rental_history' fieldLabel='Rental History' />
        <SimpleTextArea fieldName='criminal_background' fieldLabel='Criminal Background' />
        <SimpleTextArea fieldName='required_documents' fieldLabel='Required Documents Description' />
        <SimpleTextArea fieldName='program_rules' fieldLabel='Program Rules' />
        <SimpleTextArea fieldName='unit_amenities' fieldLabel='Unit Amenities' />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsRequirements

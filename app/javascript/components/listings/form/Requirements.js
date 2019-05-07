import React from 'react'
import FormGroup from '../../atoms/FormGroup'
import { SimpleTextArea } from '~/utils/final-form/SimpleTextArea'

const ListingFormSectionsRequirements = ({ listing }) => {
  return (
    <React.Fragment>
      <h3>Additional Requirements</h3>

      <FormGroup>
        <SimpleTextArea fieldName='credit_rating' fieldLabel='Credit Rating Description' />
        <SimpleTextArea fieldName='building_selection_criteria' fieldLabel='Building Selection Criteria Description' />
        <SimpleTextArea fieldName='required_documents' fieldLabel='Required Documents Description' />
        <SimpleTextArea fieldName='legal_disclaimers' fieldLabel='Legal Disclaimers' />
        <SimpleTextArea fieldName='unit_amenities' fieldLabel='Unit Amenities' />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsRequirements

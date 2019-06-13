import React from 'react'
import FormGroup from '../../atoms/FormGroup'
import { Required, MustBeNumberOrDashes } from '~/utils/final-form/validations'
import { SimpleField } from '~/utils/final-form/SimpleField'
import { SimpleCheckbox } from '~/utils/final-form/SimpleCheckbox'
import { SimpleTextArea } from '~/utils/final-form/SimpleTextArea'

const ListingFormSectionsBuilding = ({ listing }) => {
  return (
    <React.Fragment>
      <h3>Building</h3>

      <FormGroup>
        <SimpleField fieldName='building_name' fieldLabel='Name' validation={Required} />
        <SimpleField fieldName='building_street_address' fieldLabel='Address' validation={Required} />
        <SimpleField fieldName='building_city' fieldLabel='City' validation={Required} />
        <SimpleField fieldName='building_state' fieldLabel='State' validation={Required} />
        <SimpleField fieldName='building_zip_code' fieldLabel='Zip Code' validation={MustBeNumberOrDashes} />
        <SimpleField fieldName='neighborhood' fieldLabel='Neighborhood' />
        <SimpleField fieldName='building_total_units' fieldLabel='Total Units' validation={MustBeNumberOrDashes} />
        <SimpleField fieldName='year_built' fieldLabel='Year Built' validation={MustBeNumberOrDashes} />
        <SimpleField fieldName='developer' fieldLabel='Developer' validation={Required} />
        <SimpleTextArea fieldName='building_selection_criteria' fieldLabel='Building Selection Criteria' />
      </FormGroup>
      <FormGroup>
        <SimpleField fieldName='accessibility' fieldLabel='Accessibility' />
        <SimpleField fieldName='amenities' fieldLabel='Amenities' />
        <SimpleCheckbox fieldName='show_unit_features' fieldLabel='Show unit features?' />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsBuilding

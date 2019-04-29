import React from 'react'
import FormGroup from '../../atoms/FormGroup'
import { Required, MustBeNumberOrDashes } from '~/utils/final-form/validations'
import { SimpleField } from '~/utils/final-form/SimpleField'

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
        <SimpleField fieldName='building_url' fieldLabel='Building URL' />
        <SimpleField fieldName='neighborhood' fieldLabel='Neighborhood' />
        <SimpleField fieldName='year_built' fieldLabel='Year Built' validation={MustBeNumberOrDashes} />
        <SimpleField fieldName='developer' fieldLabel='Developer' validation={Required} />
      </FormGroup>
      <FormGroup>
        <SimpleField fieldName='accessibility' fieldLabel='Accessibility' />
        <SimpleField fieldName='amenities' fieldLabel='Amenities' />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsBuilding

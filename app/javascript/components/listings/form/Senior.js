import React from 'react'
import FormGroup from '../../atoms/FormGroup'
import { MustBeNumberOrDashes } from '~/utils/final-form/validations'
import { SimpleField } from '~/utils/final-form/SimpleField'

const ListingFormSectionsSenior = ({ listing }) => {
  return (
    <React.Fragment>
      <h3>Senior Building?</h3>

      <FormGroup>
        <SimpleField fieldName='reserved_descriptor' fieldLabel='Reserved community summary' />
        <SimpleField fieldName='reserved_community_minimum_age' fieldLabel='Reserved community minimum age' validation={MustBeNumberOrDashes} />
        <SimpleField fieldName='reserved_community_maximum_age' fieldLabel='Reserved community maximum age' validation={MustBeNumberOrDashes} />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsSenior

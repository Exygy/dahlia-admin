import React from 'react'
import FormGroup from '../../atoms/FormGroup'
import { MustBeNumberOrDashes } from '~/utils/final-form/validations'
import { SimpleField } from '~/utils/final-form/SimpleField'

const ListingFormSectionsWaitlist = ({ listing }) => {
  return (
    <React.Fragment>
      <h3>Waitlist</h3>

      <FormGroup>
        <SimpleField fieldName='waitlist_max_size' fieldLabel='Maximum Waitlist Size' validation={MustBeNumberOrDashes} />
        <SimpleField fieldName='waitlist_current_size' fieldLabel='Current Waitlist Size' validation={MustBeNumberOrDashes} />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsWaitlist

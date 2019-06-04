import React from 'react'
import FormGroup from '../../atoms/FormGroup'
import { MustBeNumberOrDashes } from '~/utils/final-form/validations'
import { SimpleField } from '~/utils/final-form/SimpleField'
import { SimpleCheckbox } from '~/utils/final-form/SimpleCheckbox'

const ListingFormSectionsWaitlist = ({ listing }) => {
  return (
    <React.Fragment>
      <h3>Waitlist</h3>

      <FormGroup>
        <SimpleCheckbox fieldName='first_come_first_served' fieldLabel='First come first served?' />
        <SimpleCheckbox fieldName='has_waitlist' fieldLabel='Has waitlist?' />
        <SimpleField fieldName='maximum_waitlist_size' fieldLabel='Maximum waitlist size' validation={MustBeNumberOrDashes} />
        <SimpleField fieldName='total_waitlist_openings' fieldLabel='Total waitlist openings' validation={MustBeNumberOrDashes} />
        <SimpleField fieldName='number_of_people_currently_on_waitlist' fieldLabel='Number of people currently on waitlist' validation={MustBeNumberOrDashes} />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsWaitlist

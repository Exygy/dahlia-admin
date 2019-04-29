import React from 'react'
import { Field } from 'react-final-form'
import FormGroup from '../../atoms/FormGroup'
import { MustBeNumberOrDashes } from '~/utils/final-form/validations'
import { SimpleField } from '~/utils/final-form/SimpleField'
import { SimpleCheckbox } from '~/utils/final-form/SimpleCheckbox'
import { SimpleDatePicker } from '~/utils/final-form/SimpleDatePicker'

const ListingFormSectionsLottery = ({ listing }) => {
  return (
    <React.Fragment>
      <h3>Lottery/Waitlist</h3>

      <FormGroup>
        <SimpleCheckbox fieldName='first_come_first_served' fieldLabel='First come first served?' />
        <SimpleCheckbox fieldName='in_lottery' fieldLabel='In lottery?' />
        <SimpleCheckbox fieldName='has_waitlist' fieldLabel='Has waitlist?' />
        <SimpleField fieldName='maximum_waitlist_size' fieldLabel='Maximum waitlist size' validation={MustBeNumberOrDashes} />
        <SimpleField fieldName='total_waitlist_openings' fieldLabel='Total waitlist openings' validation={MustBeNumberOrDashes} />
        <SimpleField fieldName='number_of_people_currently_on_waitlist' fieldLabel='Number of people currently on waitlist' validation={MustBeNumberOrDashes} />
        <SimpleField fieldName='lottery_venue' fieldLabel='Lottery Venue' />
        <SimpleField fieldName='lottery_street_address' fieldLabel='Address' />
        <SimpleField fieldName='lottery_city' fieldLabel='City' />
        <SimpleCheckbox fieldName='lottery_results' fieldLabel='Lottery results?' />
        <Field component={SimpleDatePicker} name='lottery_results_date' label='Lottery Results Date' />
        <SimpleField fieldName='lottery_status' fieldLabel='Status' />
        <SimpleField fieldName='lottery_winners' fieldLabel='Winners' validation={MustBeNumberOrDashes} />
        <SimpleField fieldName='lottery_results_url' fieldLabel='Results URL' />
        <SimpleCheckbox fieldName='sase_required_for_lottery_ticket' fieldLabel='SASE required for lottery ticket?' />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsLottery

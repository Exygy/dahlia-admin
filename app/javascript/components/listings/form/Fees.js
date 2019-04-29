import React from 'react'
import FormGroup from '../../atoms/FormGroup'
import { MustBeNumberOrDashes } from '~/utils/final-form/validations'
import { SimpleField } from '~/utils/final-form/SimpleField'
import { SimpleTextArea } from '~/utils/final-form/SimpleTextArea'

const ListingFormSectionsFees = ({ listing }) => {
  return (
    <React.Fragment>
      <h3>Fees</h3>

      <FormGroup>
        <SimpleField fieldName='deposit_min' fieldLabel='Deposit Min' validation={MustBeNumberOrDashes} />
        <SimpleField fieldName='deposit_max' fieldLabel='Deposit Max' validation={MustBeNumberOrDashes} />
        <SimpleTextArea fieldName='costs_not_included' fieldLabel='Costs not included' />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsFees

import React from 'react'
import { Field } from 'react-final-form'
import FormGroup from '../../atoms/FormGroup'
import { Required, MustBeNumberOrDashes } from '~/utils/final-form/validations'
import { SimpleField } from '~/utils/final-form/SimpleField'
import { SimpleCheckbox } from '~/utils/final-form/SimpleCheckbox'
import { SimpleDatePicker } from '~/utils/final-form/SimpleDatePicker'

const ListingFormSectionsGeneral = ({ listing }) => {
  return (
    <React.Fragment>
      <h3>General</h3>

      <FormGroup>
        <SimpleField fieldName='name' fieldLabel='Name' validation={Required} />
        <SimpleField fieldName='image_url' fieldLabel='Image URL' />
      </FormGroup>

      <br />
      <h3>Application</h3>

      <FormGroup>
        <SimpleField fieldName='application_download_url' fieldLabel='Application Download URL' />
        <SimpleField fieldName='application_organization' fieldLabel='Organization' />
        <SimpleField fieldName='application_city' fieldLabel='City' />
        <SimpleField fieldName='application_phone' fieldLabel='Phone' />
        <SimpleField fieldName='application_postal_code' fieldLabel='Zip Code' validation={MustBeNumberOrDashes} />
        <Field component={SimpleDatePicker} name='application_due_date' label='Due Date' />
        <br />
        <SimpleCheckbox fieldName='accepting_applications_by_po_box' fieldLabel='Accepting applications by PO box?' />
        <SimpleCheckbox fieldName='accepting_applications_at_leasing_agent' fieldLabel='Accepting applications at leasing agent?' />
        <SimpleCheckbox fieldName='blank_paper_application_can_be_picked_up' fieldLabel='Blank paper application can be picked up?' />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsGeneral

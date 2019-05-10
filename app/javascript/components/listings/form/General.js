import React from 'react'
import { Field } from 'react-final-form'
import FormGroup from '../../atoms/FormGroup'
import { Required, MustBeNumberOrDashes } from '~/utils/final-form/validations'
import { SimpleField } from '~/utils/formik/SimpleField'
import { SimpleCheckbox } from '~/utils/final-form/SimpleCheckbox'
import { SimpleDatePicker } from '~/utils/final-form/SimpleDatePicker'

const ListingFormSectionsGeneral = ({ listing }) => {
  return (
    <React.Fragment>
      <h3>General</h3>

      <FormGroup>
        <SimpleField name='name' label='Name' validation={Required} />
        <SimpleField name='image_url' label='Image URL' />
        <SimpleField name='marketing_url' label='Marketing URL' />
        <SimpleField name='priorities_descriptor' label='Priorities descriptor' />
        <SimpleField name='program_type' label='Program type' />
      </FormGroup>

      <br />
      <h3>Application</h3>

      <FormGroup>
        <SimpleField name='application_organization' label='Organization' validation={Required} />
        <SimpleField name='application_city' label='City' validation={Required} />
        <SimpleField name='application_phone' label='Phone' validation={Required} />
        <SimpleField name='application_postal_code' label='Zip Code' validation={MustBeNumberOrDashes} />
        <Field component={SimpleDatePicker} name='application_due_date' label='Due Date' />
        <br />
        <SimpleField name='general_application_total' label='General application total' validation={MustBeNumberOrDashes} />
        <SimpleCheckbox name='accepting_applications_by_po_box' label='Accepting applications by PO box?' />
        <SimpleCheckbox name='accepting_applications_at_leasing_agent' label='Accepting applications at leasing agent?' />
        <SimpleCheckbox name='blank_paper_application_can_be_picked_up' label='Blank paper application can be picked up?' />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsGeneral

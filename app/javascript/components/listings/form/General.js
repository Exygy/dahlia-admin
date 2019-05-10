import React from 'react'
import { Field } from 'react-final-form'
import FormGroup from '../../atoms/FormGroup'
import { Required, MustBeNumberOrDashes } from '~/utils/final-form/validations'
import { SimpleField } from '~/utils/formik/SimpleField'
import { SimpleDatePicker } from '~/utils/final-form/SimpleDatePicker'

const ListingFormSectionsGeneral = ({ values }) => {
  return (
    <React.Fragment>
      <h3>General</h3>

      <FormGroup>
        <SimpleField name='name' label='Name' validation={Required} value={values.name || ''} />
        <SimpleField name='image_url' label='Image URL' value={values.image_url || ''} />
        <SimpleField name='marketing_url' label='Marketing URL' value={values.marketing_url || ''} />
        <SimpleField name='priorities_descriptor' label='Priorities descriptor' value={values.priorities_descriptor || ''} />
        <SimpleField name='program_type' label='Program type' value={values.program_type || ''} />
      </FormGroup>

      <br />
      <h3>Application</h3>

      <FormGroup>
        <SimpleField name='application_organization' label='Organization' validation={Required} value={values.application_organization || ''} />
        <SimpleField name='application_city' label='City' validation={Required} value={values.application_city || ''} />
        <SimpleField name='application_phone' label='Phone' validation={Required} value={values.application_phone || ''} />
        <SimpleField name='application_postal_code' label='Zip Code' validation={MustBeNumberOrDashes} value={values.application_postal_code || ''} />
        <Field component={SimpleDatePicker} name='application_due_date' label='Due Date' />
        <br />
        <SimpleField name='general_application_total' label='General application total' validation={MustBeNumberOrDashes} value={values.general_application_total || ''} />
        <SimpleField name='accepting_applications_by_po_box' label='Accepting applications by PO box?' type='checkbox' />
        <SimpleField name='accepting_applications_at_leasing_agent' label='Accepting applications at leasing agent?' type='checkbox' />
        <SimpleField name='blank_paper_application_can_be_picked_up' label='Blank paper application can be picked up?' type='checkbox' />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsGeneral

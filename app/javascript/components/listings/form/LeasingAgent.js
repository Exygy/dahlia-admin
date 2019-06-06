import React from 'react'
import FormGroup from '../../atoms/FormGroup'
import { MustBeNumberOrDashes } from '~/utils/final-form/validations'
import { SimpleField } from '~/utils/final-form/SimpleField'

const ListingFormSectionsLeasingAgent = ({ listing }) => {
  return (
    <React.Fragment>
      <h3>Leasing Agent</h3>
      <FormGroup>
        <SimpleField fieldName='leasing_agent_name' fieldLabel='Leasing Agent Name' />
        <SimpleField fieldName='leasing_agent_title' fieldLabel='Leasing Agent Title' />
        <SimpleField fieldName='leasing_agent_phone' fieldLabel='Leasing Agent Phone' />
        <SimpleField fieldName='leasing_agent_email' fieldLabel='Leasing Agent Email' />
        <SimpleField fieldName='leasing_agent_office_hours' fieldLabel='Leasing Agent Office Hours' />
        <SimpleField fieldName='leasing_agent_street' fieldLabel='Leasing Agent Street Address' />
        <SimpleField fieldName='leasing_agent_city' fieldLabel='Leasing Agent City' />
        <SimpleField fieldName='leasing_agent_state' fieldLabel='Leasing Agent State' />
        <SimpleField fieldName='leasing_agent_zip' fieldLabel='Leasing Agent Zip Code' validation={MustBeNumberOrDashes} />
      </FormGroup>
    </React.Fragment>
  )
}

export default ListingFormSectionsLeasingAgent

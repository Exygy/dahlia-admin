import React from 'react'
import { Form, Text, Select } from 'react-form'
import formUtils from '~/utils/formUtils'
import Loading from '~/components/molecules/Loading'

const submissionTypeOptions = formUtils.toOptions(["Paper", "Electronic", [null, "Any type"]])

const buildListingOptions = (listings) => {
  return formUtils.toOptions([
    [null, 'Any Listing'],
    ...listings.map(i => [i.id, i.name])
  ])
}

const ApplicationsFilter = ({ onSubmit, listings = [], loading = false }) => {
  const listingOptions = buildListingOptions(listings)

  return (
    <Loading isLoading={loading}>
      <Form onSubmit={onSubmit}>
        { formApi => (
          <form onSubmit={formApi.submitForm} >
            <div className='filter-row'>
              <div className='filter-group'>
                <div className='filter-group_item'>
                  <Text field="application_number" placeholder='Application Number'/>
                </div>
                <div className='filter-group_item'>
                  <Select field="listing" options={listingOptions}  placeholder="Any Listing"/>
                </div>
                <div className='filter-group_item'>
                  <Text field="first_name" placeholder="First Name"/>
                </div>
                <div className='filter-group_item'>
                  <Text field="last_name" placeholder="Last Name"/>
                </div>
                <div className='filter-group_item'>
                  <Select field="submission_type" options={submissionTypeOptions} placeholder="Submission Type"/>
                </div>
                <div className='filter-group_action'>
                  <button className='small'>Filter</button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Form>
    </Loading>
  )
}

export default ApplicationsFilter
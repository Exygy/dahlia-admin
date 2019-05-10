import React from 'react'
import { Formik as Form } from 'formik'
import { isNil } from 'lodash'

import apiService from '~/apiService'
import appPaths from '~/utils/appPaths'
import PageHeader from '../organisms/PageHeader'

import ListingFormSectionsBuilding from './form/Building'
import ListingFormSectionsFees from './form/Fees'
import ListingFormSectionsGeneral from './form/General'
import ListingFormSectionsLottery from './form/Lottery'
import ListingFormSectionsPolicies from './form/Policies'
import ListingFormSectionsRequirements from './form/Requirements'
import ListingFormSectionsSenior from './form/Senior'
import { FormRow, FormColumn, Spacer } from '~/utils/form/layout'

const onSubmit = async (values, actions) => {
  let response = null
  if (isNil(values.id)) {
    response = await apiService.createListing(values)
  } else {
    response = await apiService.updateListing(values)
  }

  if (response) {
    window.Turbolinks.visit(appPaths.toListing(response.id))
  } else {
    window.alert("I'm sorry, there was an unknown error saving your listing to the server.")
  }
}

const ListingForm = ({ listing }) => (
  <React.Fragment>
    <PageHeader
      title={isNil(listing.id) ? 'New Listing' : 'Edit Listing'} />
    <Spacer />
    <Form
      onSubmit={onSubmit}
      initialValues={listing}
      render={({ handleSubmit, isSubmitting, dirty, ...formikProps }) => (
        <form onSubmit={handleSubmit}>
          <FormRow>
            <FormColumn>
              <ListingFormSectionsGeneral {...formikProps} />
            </FormColumn>
            <FormColumn>
              <ListingFormSectionsBuilding {...formikProps} />
            </FormColumn>
          </FormRow>
          <Spacer />
          <FormRow>
            <FormColumn>
              <ListingFormSectionsLottery {...formikProps} />
            </FormColumn>
            <FormColumn>
              <ListingFormSectionsSenior {...formikProps} />
              <br />
              <ListingFormSectionsFees {...formikProps} />
            </FormColumn>
          </FormRow>
          <Spacer />
          <FormRow>
            <FormColumn>
              <ListingFormSectionsRequirements {...formikProps} />
            </FormColumn>
            <FormColumn>
              <ListingFormSectionsPolicies {...formikProps} />
            </FormColumn>
          </FormRow>
          <Spacer />
          <FormRow>
            <FormColumn>
              <button type='submit' disabled={isSubmitting || dirty}>
                Submit
              </button>
            </FormColumn>
          </FormRow>
        </form>
      )}
    />
  </React.Fragment>
)

export default ListingForm

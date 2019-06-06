import React from 'react'
import { Form } from 'react-final-form'
import { isNil } from 'lodash'

import apiService from '~/apiService'
import appPaths from '~/utils/appPaths'
import PageHeader from '../organisms/PageHeader'

import ListingFormSectionsBuilding from './form/Building'
import ListingFormSectionsFees from './form/Fees'
import ListingFormSectionsGeneral from './form/General'
import ListingFormSectionsLeasingAgent from './form/LeasingAgent'
import ListingFormSectionsPolicies from './form/Policies'
import ListingFormSectionsRequirements from './form/Requirements'
import ListingFormSectionsSenior from './form/Senior'
import ListingFormSectionsWaitlist from './form/Waitlist'

const onSubmit = async values => {
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

const ListingForm = ({ listing }) => {
  const rowClass = 'row inner--3x full-width'
  const columnClass = 'column medium-9 large-6'

  return (
    <React.Fragment>
      <PageHeader
        title={isNil(listing.id) ? 'New Listing' : 'Edit Listing'} />
      <div style={{height: '25px'}} />
      <Form
        onSubmit={onSubmit}
        initialValues={listing}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={rowClass}>
              <div className={columnClass}>
                <ListingFormSectionsGeneral listing={listing} />
                <br />
                <ListingFormSectionsWaitlist listing={listing} />
              </div>
              <div className={columnClass}>
                <ListingFormSectionsBuilding listing={listing} />
              </div>
            </div>

            <div style={{height: '25px'}} />

            <div className={rowClass}>
              <div className={columnClass}>
                <ListingFormSectionsLeasingAgent listing={listing} />
              </div>
              <div className={columnClass}>
                <ListingFormSectionsSenior listing={listing} />
                <br />
                <ListingFormSectionsFees listing={listing} />
              </div>
            </div>

            <div style={{height: '25px'}} />

            <div className={rowClass}>
              <div className={columnClass}>
                <ListingFormSectionsRequirements listing={listing} />
              </div>
              <div className={columnClass}>
                <ListingFormSectionsPolicies listing={listing} />
              </div>
            </div>

            <div style={{height: '25px'}} />

            <div className={rowClass}>
              <div className={columnClass}>
                <button type='submit' disabled={submitting}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      />
    </React.Fragment>
  )
}

export default ListingForm

import React from 'react'
import { Form } from 'react-final-form'
import axios from 'axios'
import { axiosInit } from '~/utils/utils'
import appPaths from '~/utils/appPaths'
import PageHeader from '../organisms/PageHeader'
import ListingFormSectionsGeneral from './form/General'
import ListingFormSectionsBuilding from './form/Building'
import ListingFormSectionsSenior from './form/Senior'
import ListingFormSectionsLottery from './form/Lottery'
import ListingFormSectionsRequirements from './form/Requirements'
import ListingFormSectionsPolicies from './form/Policies'
import ListingFormSectionsFees from './form/Fees'

const onSubmit = async values => {
  axiosInit(axios)

  let request = null
  if (values.id === null) {
    // Create a new listing
    request = await axios.post(appPaths.toListing(''), {listing: values})
  } else {
    // Update  listing
    request = await axios.put(appPaths.toListing(values.id), {listing: values})
  }

  if (request.status === 200) {
    window.Turbolinks.visit(appPaths.toListing(''))
  } else {
    window.alert("I'm sorry, there was an unknown error saving this to the server.")
  }
}

const ListingForm = ({ listing }) => {
  const rowClass = 'row inner--3x full-width'
  const columnClass = 'column medium-9 large-6'

  return (
    <React.Fragment>
      <PageHeader
        title={listing.id === null ? 'New Listing' : 'Edit Listing'} />
      <div style={{height: '25px'}} />
      <Form
        onSubmit={onSubmit}
        initialValues={listing}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={rowClass}>
              <div className={columnClass}>
                <ListingFormSectionsGeneral listing={listing} />
              </div>
              <div className={columnClass}>
                <ListingFormSectionsBuilding listing={listing} />
              </div>
            </div>
            <div style={{height: '25px'}} />
            <div className={rowClass}>
              <div className={columnClass}>
                <ListingFormSectionsLottery listing={listing} />
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

import React from 'react'
import { isEmpty } from 'lodash'
import ListingDetailsContentCard from './ListingDetailsContentCard'
import ListingDetailsContentTable from './ListingDetailsContentTable'

import {
  detailsFields,
  buildingInformationFields,
  preferencesFields,
  aafFields,
  appInfoFields,
  agentDevInfoFields,
  eligibilityRulesFields,
  additionalInfoFields,
  openHousesFields,
  infoSessionsFields
} from './fields'

const ListingDetails = ({ listing }) => {
  const Card = (cardProps) => <ListingDetailsContentCard listing={listing} {...cardProps} />
  const Table = (tableProps) => <ListingDetailsContentTable listing={listing} {...tableProps} />

  return (
    <div>
      <Card title='Details' fields={detailsFields} />
      <Card title='Building Information' fields={buildingInformationFields} />
      { !isEmpty(listing.preferences) && (
        <Table title='Listing Preferences'
          table='listing_preferences'
          fields={preferencesFields} />
      )
      }
      <Card title='Accessibility, Amenities, Fees' fields={aafFields} />
      <Card title='Application Information' fields={appInfoFields} />
      <Card title='Leasing Agent and Developer Information' fields={agentDevInfoFields} />
      <Card title='Additional Eligibility Rules' fields={eligibilityRulesFields} />
      <Card title='Additional Information' fields={additionalInfoFields} />
      { !isEmpty(listing.open_houses) && (
        <Table title='Open Houses'
          table='open_houses'
          fields={openHousesFields} />
      )
      }
      { !isEmpty(listing.information_sessions) && (
        <Table title='Information Sessions'
          table='information_sessions'
          fields={infoSessionsFields} />
      )
      }
    </div>
  )
}

export default ListingDetails

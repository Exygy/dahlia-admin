import React from 'react'

import IndexTable from '../IndexTable'
import TableLayout from '../layouts/TableLayout'
import mapProps from '~/utils/mapProps'
import { mapListing } from '~/components/mappers/soqlToDomain'

const tableFields = {
  'id': null,
  'name': {
    'label': 'Listing Name',
    'minWidth': 225
  },
  'application_due_date': {
    'type': 'date',
    'label': 'Application Due Date'
  },
  'lottery_date': {
    'type': 'date',
    'label': 'Lottery Date'
  },
  'lottery_results_date': {
    'type': 'date',
    'label': 'Lottery Results Date'
  },
  'lottery_status': {
    'label': 'Lottery Status'
  },
  'nflagged_applications': {
    'label': 'Flagged Applications'
  },
  'in_lottery': {
    'label': 'Applications In Lottery'
  }
}

const ListingsPageTable = ({ page, listings, fields }) => {
  return (
    <IndexTable
      page={page}
      results={listings}
      fields={fields}
      links={['View Listing', 'Edit Listing', 'Add Application', 'Lease Ups']} />
  )
}

const layout = (listings) => {
  const listingsLength = listings ? listings.length : 0
  return {
    pageHeader: {
      title: 'Listings',
      content: `${listingsLength} listings were found.`,
      action: {
        link: '/listings/new',
        title: 'New Listing'
      }
    }
  }
}

const ListingsPage = ({ page, listings }) => {
  return (
    <TableLayout {...layout(listings)}>
      <ListingsPageTable page={page} listings={listings} fields={tableFields} />
    </TableLayout>
  )
}

const mapProperties = ({ page, listings }) => {
  return {
    page: page,
    listings: listings.map(mapListing)
  }
}

export default mapProps(mapProperties)(ListingsPage)

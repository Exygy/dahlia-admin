import React from 'react'

import IndexTable from '../IndexTable'
import TableLayout from '../layouts/TableLayout'

const tableFields = {
  'id': null,
  'name': {
    'label': 'Listing Name',
    'minWidth': 225
  },
  'application_due_date': {
    'type': 'date',
    'label': 'Application Due Date'
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

export default ListingsPage

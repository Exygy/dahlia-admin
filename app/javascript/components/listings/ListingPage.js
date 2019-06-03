import React from 'react'

import ListingDetails from './ListingDetails'
import CardLayout from '../layouts/CardLayout'

const editListingButton = (listing) => (
  <a
    key='edit-listing'
    href={`/listings/${listing.id}/edit`}
    className='button tiny margin-left--half'
  >
    Edit Listing
  </a>
)

const ListingPage = ({ listing }) => {
  const pageHeader = {
    title: listing.name,
    action: [editListingButton(listing)]
  }

  return (
    <CardLayout pageHeader={pageHeader}>
      <ListingDetails listing={listing} />
    </CardLayout>
  )
}

export default ListingPage

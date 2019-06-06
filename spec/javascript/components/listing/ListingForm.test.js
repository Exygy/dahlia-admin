/* global mount */
import React from 'react'

import { blankListing, listing } from '../../fixtures/listing'
import ListingForm from 'components/listings/ListingForm'

import {
  LISTING_FORM_NUMBERS_DASHES_FIELDS,
  LISTING_FORM_REQUIRED_FIELDS,
  testNumbersOrDashes,
  testRequired
} from './utils'

describe('ListingForm', () => {
  describe('should validate fields correctly: ', () => {
    const testListing = blankListing

    LISTING_FORM_REQUIRED_FIELDS.forEach(field => { testRequired(field, ListingForm, { listing: testListing }) })

    LISTING_FORM_NUMBERS_DASHES_FIELDS.forEach(field => { testListing[field.name] = 'abcd' })
    LISTING_FORM_NUMBERS_DASHES_FIELDS.forEach(field => testNumbersOrDashes(field, ListingForm, { listing: testListing }))
  })

  test(`New Listing Prop Effects`, async () => {
    const wrapper = mount(
      <ListingForm listing={{}} />
    )

    expect(wrapper.find('h1.lead-header_title').text()).toEqual('New Listing')
  })

  test(`Edit Listing Prop Effects`, async () => {
    listing.id = '12345'
    const wrapper = mount(
      <ListingForm listing={listing} />
    )

    expect(wrapper.find('h1.lead-header_title').text()).toEqual('Edit Listing')
  })
})

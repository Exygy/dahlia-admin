/* global mount */
import React from 'react'

import listing from '../../fixtures/listing'
import ListingForm from 'components/listings/ListingForm'

import { testRequired, testNumbersOrDashes } from './utils'
import { LISTING_FORM_REQUIRED_FIELDS, LISTING_FORM_NUMBERS_DASHES_FIELDS } from '../../utils'

describe.only('ListingForm', () => {
  describe('should validate fields correctly: ', () => {
    beforeEach(() => {
      listing.name = ''
      LISTING_FORM_NUMBERS_DASHES_FIELDS.map(field => { listing[field.name] = 'abcd' })
    })

    LISTING_FORM_REQUIRED_FIELDS.map(field => testRequired(field, ListingForm, { listing }))

    LISTING_FORM_NUMBERS_DASHES_FIELDS.map(field => testNumbersOrDashes(field, ListingForm, { listing }))

    test(`New Listing Prop Effects`, async () => {
      const wrapper = mount(
        <ListingForm listing={listing} />
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
})

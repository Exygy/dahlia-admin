/* global mount */
/* global wait */
import React from 'react'

import { blankListing, listing } from '../../fixtures/listing'
import ListingForm from 'components/listings/ListingForm'

import {
  LISTING_FORM_NUMBERS_DASHES_FIELDS,
  LISTING_FORM_REQUIRED_FIELDS,
  testNumbersOrDashes,
  testRequired
} from './utils'

const mockSubmitListing = jest.fn()

jest.mock('apiService', () => {
  return {
    updateListing: async (data) => {
      mockSubmitListing(data)
      return true
    }
  }
})

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

  test('it should pass the cleared field to submit', async () => {
    listing.application_fee = 123
    const wrapper = mount(
      <ListingForm listing={listing} />
    )
    wrapper.find('#form-application_fee').simulate('change', {target: {value: ''}})
    wrapper.find('form').first().simulate('submit')

    await wait(100)

    expect(mockSubmitListing.mock.calls.length).toBe(1)
    expect(mockSubmitListing.mock.calls[0][0].application_fee).toBeDefined()
  })
})

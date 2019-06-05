import React from 'react'
import renderer from 'react-test-renderer'

import ListingsPage from 'components/listings/ListingsPage'
import listings from '../../fixtures/listings'

describe('ListingsPage', () => {
  const listingFields = {
    application_due_date: {
      label: 'Application Due Date',
      type: 'date'
    },
    id: null,
    name: {
      label: 'Listing Name',
      minWidth: 225
    }
  }

  test('should render successfully', () => {
    const wrapper = renderer.create(
      <ListingsPage listings={listings} fields={listingFields} />
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

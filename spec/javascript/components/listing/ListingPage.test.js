import React from 'react'
import renderer from 'react-test-renderer'
import moment from 'moment-timezone'

import _ from 'lodash'
import { listing } from '../../fixtures/listing'

import ListingPage from 'components/listings/ListingPage'
import ListingDetailsContentCard from 'components/listings/ListingDetailsContentCard'
import {
  detailsFields,
  buildingInformationFields,
  aafFields,
  appInfoFields,
  agentDevInfoFields,
  eligibilityRulesFields,
  additionalInfoFields
} from 'components/listings/fields'

describe('ListingPage', () => {
  test('should render successfully', () => {
    moment.tz.setDefault('America/Los_Angeles')

    const wrapper = renderer.create(
      <ListingPage listing={listing} />
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  describe('individual fields', () => {
    _.each([
      { title: 'Details', fields: detailsFields },
      { title: 'Building Information', fields: buildingInformationFields },
      { title: 'Accessibility, Amenities, Fees', fields: aafFields },
      { title: 'Application Information', fields: appInfoFields },
      { title: 'Leasing Agent and Developer Information', fields: agentDevInfoFields },
      { title: 'Additional Eligibility Rules', fields: eligibilityRulesFields },
      { title: 'Additional Information', fields: additionalInfoFields }
    ], ({ title, fields }) => {
      test(`${title} fields`, () => {
        const wrapper = renderer.create(
          <ListingDetailsContentCard
            listing={listing}
            title={title}
            fields={fields} />
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
      })
    })
  })
})

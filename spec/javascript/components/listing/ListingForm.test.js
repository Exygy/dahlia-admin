/* global wait */
import React from 'react'
import { mount } from 'enzyme'

import listing from '../../fixtures/listing'
import ListingForm from 'components/listings/ListingForm'

describe('ListingForm', () => {
  describe('should validate fields correctly: ', () => {
    beforeEach(() => {
      listing.name = ''
      listing.deposit_min = 'abcd'
    })

    test('Required', async () => {
      const wrapper = mount(
        <ListingForm
          listing={listing}
        />
      )

      wrapper.find('form').first().simulate('submit')
      await wait(100)
      expect(wrapper.exists('.form-group')).toEqual(true)

      const errorElementSel =
        `#form-name + .error`
      expect(wrapper.find(errorElementSel).text()).toEqual('This field is required')

      const nameFieldSel =
        `#form-name`
      wrapper.find(nameFieldSel).first().simulate('change', { target: { value: 'A Name' } })
      wrapper.find('form').first().simulate('submit')
      await wait(100)
      expect(wrapper.find(errorElementSel).length).toEqual(0)
    })

    test('MustBeNumberOrDashes', async () => {
      const wrapper = mount(
        <ListingForm
          listing={listing}
        />
      )

      wrapper.find('form').first().simulate('submit')
      await wait(100)
      const errorElementSel =
        `#form-deposit_min + .error`
      expect(wrapper.find(errorElementSel).text()).toEqual('This field must be a number')

      const depositMinFieldSel =
        `#form-deposit_min`
      wrapper.find(depositMinFieldSel).first().simulate('change', { target: { value: '2000.50' } })
      wrapper.find('form').first().simulate('submit')
      await wait(100)
      expect(wrapper.find(errorElementSel).length).toEqual(0)
    })
  })
})

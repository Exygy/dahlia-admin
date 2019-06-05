/* global wait */
/* global mount */
import React from 'react'

export const LISTING_FORM_REQUIRED_FIELDS = [
  { name: 'building_city', value: 'Building City' },
  { name: 'building_name', value: 'Building Name' },
  { name: 'building_state', value: 'Building State' },
  { name: 'building_street_address', value: '123 Fake Street' },
  { name: 'developer', value: 'Developer' },
  { name: 'name', value: 'A Name' }
]

export const LISTING_FORM_NUMBERS_DASHES_FIELDS = [
  { name: 'application_postal_code', value: '11111' },
  { name: 'building_zip_code', value: '11111' },
  { name: 'deposit_max', value: '3000' },
  { name: 'deposit_min', value: '100' },
  { name: 'leasing_agent_zip', value: '11111' },
  { name: 'reserved_community_maximum_age', value: '65' },
  { name: 'reserved_community_minimum_age', value: '55' },
  { name: 'waitlist_current_size', value: '0' },
  { name: 'waitlist_max_size', value: '50' },
  { name: 'year_built', value: '1927' }
]

export async function testRequired ({ name, value }, TestedComponent, props) {
  test(`Test Required Field: ${name}`, async () => {
    const wrapper = mount(
      <TestedComponent {...props} />
    )

    wrapper.find('form').first().simulate('submit')
    await wait(100)
    expect(wrapper.exists('.form-group')).toEqual(true)

    const errorElementSel = `#form-${name} + .error`
    expect(wrapper.find(errorElementSel).text()).toEqual('This field is required')

    const fieldSel = `#form-${name}`
    wrapper.find(fieldSel).first().simulate('change', { target: { value } })
    wrapper.find('form').first().simulate('submit')
    await wait(100)
    expect(wrapper.find(errorElementSel).length).toEqual(0)
  })
}

export async function testNumbersOrDashes ({ name, value }, TestedComponent, props) {
  test(`Test NumberOrDashes: ${name}`, async () => {
    const wrapper = mount(
      <TestedComponent {...props} />
    )

    wrapper.find('form').first().simulate('submit')
    await wait(100)

    const errorElementSel = `#form-${name} + .error`
    expect(wrapper.find(errorElementSel).text()).toEqual('This field must be a number')

    const fieldSel = `#form-${name}`
    wrapper.find(fieldSel).first().simulate('change', { target: { value } })
    wrapper.find('form').first().simulate('submit')
    await wait(100)
    expect(wrapper.find(errorElementSel).length).toEqual(0)
  })
}

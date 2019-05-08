/* global wait */
/* global mount */
import React from 'react'

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

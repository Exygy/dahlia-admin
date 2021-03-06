import { TEST_HOST, TEST_USER_EMAIL, TEST_USER_PASSWORD } from '../consts'

export const goto = async (page, path) => {
  await page.goto(`${TEST_HOST}/${path}`)
  await waitForApp(page)
}

export const loginAsAgent = async (page) => {
  await goto(page, 'users/sign_in')

  await page.type('#user_email', TEST_USER_EMAIL)
  await page.type('#user_password', TEST_USER_PASSWORD)

  await page.click('.actions input[type=submit]')

  await page.waitForNavigation()
  await page.waitForSelector('#root')
}

export const waitForApp = async (page) => {
  await page.waitForSelector('#root')
}

export const enterValue = async (page, selector, value) => {
  // Wait for the field to appear
  await page.waitForSelector(selector)
  // Clear the value that's there
  await page.$eval(selector, (el) => { el.value = '' })
  // Enter the value
  await page.type(selector, value)
}

export const checkForListing = async (page, listingMatch) => {
  await loginAsAgent(page)

  await goto(page, 'listings')

  const found = (await page.content()).match(listingMatch)
  expect(found.length).toBe(1)
}

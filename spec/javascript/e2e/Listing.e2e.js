import puppeteer from 'puppeteer'
import { HEADLESS, TEST_HOST } from '../support/puppeteer/consts'
import { loginAsAgent, goto, enterValue, checkForListing } from '../support/puppeteer/steps/sharedSteps'
import { LISTING_FORM_REQUIRED_FIELDS } from '../components/listing/utils'

describe('Listings', () => {
  test('New Listing', async () => {
    let browser = await puppeteer.launch({
      headless: HEADLESS
    })
    let page = await browser.newPage()
    await loginAsAgent(page)

    await goto(page, 'listings')

    const pageTitle = await page.$eval('h1.lead-header_title', e => e.innerHTML)
    expect(pageTitle).toBe('Listings')

    const link = await page.$eval('span.lead-header_secondary-action a', e => e.href)
    expect(link).toBe(`${TEST_HOST}/listings/new`)
    const linkText = await page.$eval('span.lead-header_secondary-action a', e => e.innerHTML)
    expect(linkText).toBe('New Listing')

    await page.click('span.lead-header_secondary-action a')
    await page.waitFor(1000)

    const nameInput = await page.$eval('input#form-name', e => e.value)
    expect(nameInput).toBe('')

    await browser.close()
  }, 16000)

  test('Create New Listing', async () => {
    let browser = await puppeteer.launch({
      headless: HEADLESS
    })
    let page = await browser.newPage()
    await loginAsAgent(page)

    await goto(page, 'listings')

    await page.click('span.lead-header_secondary-action a')
    await page.waitFor('#form-name')

    let pageTitle = await page.$eval('h1.lead-header_title', e => e.innerHTML)
    expect(pageTitle).toBe('New Listing')
    // Promise.all does not work when typing simultaneously apparently
    await page.type('#form-name', 'A Name')
    await page.type('#form-building_name', 'A Name')
    await page.type('#form-building_street_address', 'An Address')
    await page.type('#form-building_city', 'City')
    await page.type('#form-building_state', 'State')
    await page.type('#form-developer', 'Developer')

    const nameInput = await page.$eval('#form-name', e => e.value)
    expect(nameInput).toBe(LISTING_FORM_REQUIRED_FIELDS[5].value)

    await page.click('button[type=submit]')
    await page.waitFor(1000)

    pageTitle = await page.$eval('h1.lead-header_title', e => e.innerHTML)
    expect(pageTitle).toBe('A Name')

    await browser.close()
  }, 16000)

  test('View Created Listings', async () => {
    let browser = await puppeteer.launch({
      headless: HEADLESS
    })
    let page = await browser.newPage()

    await checkForListing(page, 'A Name')

    await browser.close()
  }, 16000)

  test('Update Listing', async () => {
    let browser = await puppeteer.launch({
      headless: HEADLESS
    })
    let page = await browser.newPage()
    page.on('console', msg => console.log(msg.text()))
    await loginAsAgent(page)

    await goto(page, 'listings')

    await page.waitFor('.rt-tbody .rt-tr-group .rt-tr')
    await page.click('.rt-tbody .rt-tr-group .rt-tr')

    await page.waitFor(1000)
    await page.evaluate(() => {
      document.querySelector('.rt-tbody ul li:nth-child(2) a').click()
    })

    await page.waitFor(1000)

    let pageTitle = await page.$eval('h1.lead-header_title', e => e.innerHTML)
    expect(pageTitle).toBe('Edit Listing')

    // Promise.all does not work when typing simultaneously apparently
    await enterValue(page, '#form-name', 'An Updated Name')
    await enterValue(page, '#form-building_name', 'An Updated Name')
    await enterValue(page, '#form-building_street_address', 'An Updated Address')
    await enterValue(page, '#form-building_city', 'Updated City')
    await enterValue(page, '#form-building_state', 'Updated State')
    await enterValue(page, '#form-developer', 'Updated Developer')

    await page.click('button[type=submit]')
    await page.waitFor(2000)

    pageTitle = await page.$eval('h1.lead-header_title', e => e.innerHTML)
    expect(pageTitle).toContain('An Updated Name')

    await browser.close()
  }, 16000)

  test('View Updated Listings', async () => {
    let browser = await puppeteer.launch({
      headless: HEADLESS
    })
    let page = await browser.newPage()

    await checkForListing(page, 'An Updated Name')

    await browser.close()
  }, 16000)
})

import puppeteer from 'puppeteer'
import { HEADLESS, TEST_HOST } from '../support/puppeteer/consts'
import { loginAsAgent, goto, enterValue, viewListing } from '../support/puppeteer/steps/sharedSteps'
import { LISTING_FORM_REQUIRED_FIELDS } from '../utils'

describe.only('Listings', () => {
  test('New Listing', async () => {
    let browser = await puppeteer.launch({
      headless: HEADLESS
    })
    let page = await browser.newPage()
    await loginAsAgent(page)

    await goto(page, 'listings')

    const titleHtml = await page.$eval('h1.lead-header_title', e => e.innerHTML)
    expect(titleHtml).toBe('Listings')

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

    const titleHtml = await page.$eval('h1.lead-header_title', e => e.innerHTML)
    expect(titleHtml).toBe('New Listing')
    // Promise.all does not work when typing simultaneously apparently
    await page.type('#form-name', 'A Name')
    await page.type('#form-application_organization', 'An Organization')
    await page.type('#form-application_city', 'City')
    await page.type('#form-application_phone', '1234567890')
    await page.type('#form-building_name', 'A Name')
    await page.type('#form-building_street_address', 'An Address')
    await page.type('#form-building_city', 'City')
    await page.type('#form-building_state', 'State')
    await page.type('#form-developer', 'Developer')

    const nameInput = await page.$eval('#form-name', e => e.value)
    expect(nameInput).toBe(LISTING_FORM_REQUIRED_FIELDS[0].value)

    await page.click('button[type=submit]')
    await page.waitFor(1000)

    const newListingTab = await page.$eval('li.active a', e => e.innerHTML)
    expect(newListingTab).toBe('Listing Details')

    await browser.close()
  }, 16000)

  test('View Created Listings', async () => {
    let browser = await puppeteer.launch({
      headless: HEADLESS
    })
    let page = await browser.newPage()

    await viewListing(page, 'A Name')

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

    const titleHtml = await page.$eval('h1.lead-header_title', e => e.innerHTML)
    expect(titleHtml).toBe('Edit Listing')

    // Promise.all does not work when typing simultaneously apparently
    await enterValue(page, '#form-name', 'An Updated Name')
    await enterValue(page, '#form-application_organization', 'An Updated Organization')
    await enterValue(page, '#form-application_city', 'Updated City')
    await enterValue(page, '#form-application_phone', '0123456789')
    await enterValue(page, '#form-building_name', 'An Updated Name')
    await enterValue(page, '#form-building_street_address', 'An Updated Address')
    await enterValue(page, '#form-building_city', 'Updated City')
    await enterValue(page, '#form-building_state', 'Updated State')
    await enterValue(page, '#form-developer', 'Updated Developer')

    await page.click('button[type=submit]')
    await page.waitFor(1000)

    const listingTab = await page.$eval('li.active a', e => e.innerHTML)
    expect(listingTab).toBe('Listing Details')

    await browser.close()
  }, 16000)

  test('View Updated Listings', async () => {
    let browser = await puppeteer.launch({
      headless: HEADLESS
    })
    let page = await browser.newPage()

    await viewListing(page, 'An Updated Name')

    await browser.close()
  }, 16000)
})

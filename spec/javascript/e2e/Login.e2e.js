import puppeteer from 'puppeteer'
import { TEST_USER_EMAIL, TEST_USER_PASSWORD, HEADLESS } from '../support/puppeteer/consts'

describe('Lead header', () => {
  test('lead header loads correctly', async () => {
    let browser = await puppeteer.launch({
      headless: HEADLESS
    })
    let page = await browser.newPage()

    await page.goto('http://localhost:3000/')
    await page.waitForSelector('#root')

    const html = await page.$eval('.lead-header_title', e => e.innerHTML)
    expect(html).toBe('Welcome to DAHLIA Partners.')

    await browser.close()
  }, 16000)
})

describe('Sign in page', () => {
  test('loads correctly', async () => {
    let browser = await puppeteer.launch({
      headless: HEADLESS
    })
    let page = await browser.newPage()

    await page.goto('http://localhost:3000/users/sign_in')
    await page.waitForSelector('#root')

    const titleHtml = await page.$eval('h1.dash-title', e => e.innerHTML)
    expect(titleHtml).toBe('Sign in')

    const formHtml = await page.$eval('form#new_user', e => e.innerHTML)
    expect(formHtml).toMatch(/[Email|Password]/)

    await browser.close()
  }, 16000)

  test('handles invalid login', async () => {
    let browser = await puppeteer.launch({
      headless: HEADLESS
    })
    let page = await browser.newPage()

    await page.goto('http://localhost:3000/users/sign_in')
    await page.waitForSelector('#root')

    await page.type('#user_email', 'nope@testing.test')
    await page.type('#user_password', 'badpassword')

    await page.click('.actions input[type=submit]')
    await page.waitForNavigation()

    const alertHtml = await page.$eval('.alert-body', e => e.innerHTML)
    expect(alertHtml).toBe('Invalid Email or password.')

    await browser.close()
  }, 16000)

  test('handles successful login', async () => {
    let browser = await puppeteer.launch({
      headless: HEADLESS
    })
    let page = await browser.newPage()

    await page.goto('http://localhost:3000/users/sign_in')
    await page.waitForSelector('#root')

    await page.type('#user_email', TEST_USER_EMAIL)
    await page.type('#user_password', TEST_USER_PASSWORD)

    await page.click('.actions input[type=submit]')
    await page.waitForNavigation()

    const alertHtml = await page.$eval('.alert-box div', e => e.innerHTML)
    expect(alertHtml).toBe('Signed in successfully.')

    await browser.close()
  }, 16000)
})

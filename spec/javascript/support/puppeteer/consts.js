// Seeded test user login
export const TEST_USER_EMAIL = process.env.E2E_TEST_USER_EMAIL || 'test@domain.com'
export const TEST_USER_PASSWORD = process.env.E2E_TEST_USER_PASSWORD || 'dc29b69cb66321f'

// Default to Automated Test Listing on Full
export const NON_LEASE_UP_LISTING_ID = process.env.E2E_NON_LEASE_UP_LISTING_ID || 'a0W0P00000F8YG4UAN'

// Default to Yellow Acres on Full
export const LEASE_UP_LISTING_ID = process.env.E2E_LEASE_UP_LISTING_ID || 'a0W0P00000GbyuQ'

// Default to an application from Yellow Acres on Full
export const LEASE_UP_LISTING_APPLICATION_ID = process.env.E2E_LEASE_UP_LISTING_APPLICATION_ID || 'a0o0P00000GZazOQAT'

export const DEFAULT_E2E_TIME_OUT = 260000

// Change to false to see tests running on browser locally
export const HEADLESS = true

// For e2e tests, we run a Rails server in the test env on port 3001
export const TEST_HOST = 'http://localhost:3001'

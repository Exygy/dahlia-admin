import { isNil } from 'lodash'

const toListing = (listingId) => `/listings${isNil(listingId) ? '' : `/${listingId}`}`

export default {
  toListing
}

import { isString, map, mapValues, propertyOf } from 'lodash'

// FIXME Rename to a more useful filename.
export const SALESFORCE_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZZ'

export const API_DATE_FORMAT = 'YYYY-MM-DD'

const cleanField = (field) => {
  return field.replace(/__c/g, '').replace(/_/g, ' ')
}

export const pluck = (...args) => (obj) => {
  return map(args, propertyOf(obj))
}

export const decorateComponents = (inputs, fn) => {
  return mapValues(inputs, Component => fn(Component))
}

export const formatPercent = (value) => {
  return ((value * 100).toFixed(0) + '%')
}

export default {
  cleanField,
  API_DATE_FORMAT
}

export const currencyToFloat = (value) => {
  if (isString(value)) {
    return parseFloat(value.replace('$', '').replace(',', ''))
  } else {
    return value
  }
}

export const axiosInit = (axios) => {
  axios.defaults.headers.common['X-CSRF-Token'] = document.getElementsByName('csrf-token')[0].getAttribute('content')
  axios.defaults.headers.common['Accept'] = 'application/json'
}

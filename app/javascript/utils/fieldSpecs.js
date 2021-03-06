import { each, replace, get, toLower, includes, isString, camelCase, startCase, map } from 'lodash'
import moment from 'moment-timezone'

import { cleanField, DATE_FORMAT } from '~/utils/utils'

export const getFormatType = (field) => {
  if (includes(toLower(field), 'date')) { return 'date' } else { return null }
}

const getRenderType = (value) => {
  if (includes(value, 'http')) {
    return 'link'
  } else {
    return null
  }
}

export const formatValue = (value, type) => {
  if (type === 'date') {
    // Convert domain date array to string if needed
    let dateString = value
    if (value && value.length === 3) {
      dateString = value.join('-') + 'T12:00:00.000Z'
    }
    return moment(dateString, DATE_FORMAT, true).format('L')
  } else {
    return value
  }
}

const cleanupWords = (value) => {
  each([
    [' Or ', ' or '],
    [' Of ', ' of '],
    ['Proof', 'proof'],
    ['Who', 'who'],
    ['Ada', 'ADA'],
    [' To ', ' to '],
    ['Claimed', 'claimed']
  ], ([a, b]) => {
    value = replace(value, a, b)
  })

  return value
}

const formatLabel = (label) => {
  if (includes(label, '.')) {
    const parts = label.split('.')
    return startCase(camelCase(cleanField(parts[0])))
  } else {
    return cleanupWords(startCase(camelCase(label)))
  }
}

export const buildFieldEntry = (item, spec, options = {}) => {
  let value = get(item, spec.field)

  if (spec.value) {
    value = spec.value(value)
  }

  let label = cleanField(spec.label)
  let renderType = spec.renderType || getRenderType(value)
  value = formatValue(value, spec.formatType)

  if (!value && options.defaultValue) {
    value = options.defaultValue
  }

  return { label, value, renderType }
}

export const buildFieldSpecs = (entry) => {
  let specs = isString(entry) ? { field: entry } : entry

  specs.field = toLower(specs.field)
  if (!specs.label) {
    specs.label = formatLabel(specs.field)
  }

  if (!specs.formatType) { specs.formatType = getFormatType(specs.field) }

  return specs
}

export const buildFields = (data, fields, options = {}) => {
  const fieldSpecs = map(fields, buildFieldSpecs)
  return map(fieldSpecs, (f) => buildFieldEntry(data, f, options))
}

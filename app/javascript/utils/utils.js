// FIXME Rename to a more useful filename.
export const DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.sssZ'

export const cleanField = (field) => {
  return field.replace(/__c/g, '').replace(/_/g, ' ')
}

export const Required = value => (value ? undefined : 'This field is required')
export const MustBeNumberOrDashes = value => {
  if (!value) return undefined
  return (isNaN(`${value}`.replace(/-/g, '')) ? 'This field must be a number' : undefined)
}

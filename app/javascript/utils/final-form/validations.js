export const Required = value => (value ? undefined : 'This field is required')
export const MustBeNumberOrDashes = value => (isNaN(`${value}`.replace(/-/g, '')) ? 'This field must be a number' : undefined)

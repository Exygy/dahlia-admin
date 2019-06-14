export const detailsFields = [
  'name',
  'application_due_date'
]

export const buildingInformationFields = [
  'building_name',
  'building_street_address',
  'building_city',
  'building_state',
  'building_zip_code',
  'neighborhood',
  'building_total_units',
  'developer',
  'year_built',
  'description'
]

export const preferencesFields = [
  { field: 'preference.name', label: 'Name' },
  'Description',
  { field: 'PDF_URL', label: 'PDF URL' },
  'Order',
  'Available_Units'
]

export const aafFields = [
  'accessibility',
  'fee',
  'amenities',
  'deposit_min',
  'deposit_max',
  'costs_not_included'
]

export const appInfoFields = [
  'application_phone',
  'application_organization',
  'application_street_address',
  'application_city',
  'application_state',
  'application_postal_code'
]

export const agentDevInfoFields = [
  'leasing_agent_name',
  'leasing_agent_title',
  'leasing_agent_email',
  'leasing_agent_phone'
]

export const eligibilityRulesFields = [
  'building_selection_criteria',
  'credit_history'
]

export const additionalInfoFields = [
  'required_documents',
  'smoking_policy',
  { field: 'program_rules', renderType: 'html' },
  'pet_policy',
  'unit_amenities'
]

export const openHousesFields = [
  'Date',
  'Start_Time',
  'End_Time'
]

export const infoSessionsFields = [
  'Date',
  'Start_Time',
  'End_Time',
  'Venue',
  'Street_Address',
  'City'
]

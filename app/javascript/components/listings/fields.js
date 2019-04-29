export const detailsFields = [
  'name',
  'application_due_date',
  { field: 'in_lottery', label: 'Applications in Lottery' },
  'lottery_winners',
  'lottery_results'
]

export const buildingInformationFields = [
  'building_name',
  'building_street_address',
  'building_city',
  'building_state',
  'building_zip_code',
  'neighborhood',
  'developer',
  { field: 'building_url', label: 'Building URL' },
  'year_built',
  'description'
]

export const lotteryPreferencesFields = [
  { field: 'Lottery_Preference.Name', label: 'Name' },
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

export const lotteryInfoFields = [
  'lottery_date',
  'lottery_results_date',
  'lottery_venue',
  'lottery_status',
  'lottery_street_address',
  'lottery_city'
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
  'Leasing_Agent_Name',
  'Leasing_Agent_Title',
  'Leasing_Agent_Email',
  'Leasing_Agent_Phone',
  'Preference_Detail'
]

export const eligibilityRulesFields = [
  'building_selection_criteria',
  'credit_rating'
]

export const additionalInfoFields = [
  'required_documents',
  'smoking_policy',
  { field: 'legal_disclaimers', renderType: 'html' },
  'pet_policy'
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

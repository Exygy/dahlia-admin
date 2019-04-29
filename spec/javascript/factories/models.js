const listingDetail = () => {
  return {
    'attributes': {
      'type': 'Listing',
      'url': '/services/data/v26.0/sobjects/Listing/a0W0x000000GhJUEA0'
    },
    'Id': 'a0W0x000000GhJUEA0',
    'OwnerId': '0050P000007H5XsQAK',
    'Owner': {
      'attributes': {
        'type': 'Name',
        'url': '/services/data/v26.0/sobjects/User/0050P000007H5XsQAK'
      },
      'Name': 'Prod Vertiba'
    },
    'Application_Due_Date': '2018-05-31T20:59:00.000+0000',
    'Name': 'Test 5/30',
    'Status': 'Active',
    'Building': {
      'attributes': {
        'type': 'Building',
        'url': '/services/data/v26.0/sobjects/Building/a0aU00000098I4WIAU'
      },
      'Name': 'PR-000001'
    },
    'Min_BR': null,
    'Lottery_Winners': 0,
    'Max_BR': null,
    'Lottery_Results': false,
    'Min_Income': 0,
    'Account': {
      'attributes': {
        'type': 'Account',
        'url': '/services/data/v26.0/sobjects/Account/0010P00001pIXNcQAO'
      },
      'Name': 'Equity Residential'
    },
    'Max_Income': null,
    'Min_Occupancy': 1,
    'Max_Occupancy': null,
    'Building_Name': '77 Bluxome',
    'Neighborhood': 'South of Market',
    'Building_Street_Address': '77 Bluxome Street',
    'Developer': 'Equity Residential',
    'Building_City': 'San Francisco',
    'Building_URL': 'https://i.imgur.com/Jh8OHJY.jpg',
    'Building_State': 'CA',
    'Year_Built': 2008,
    'Building_Zip_Code': '94107',
    'Description': null,
    'Lottery_Preferences': null,
    'Accessibility': null,
    'Fee': null,
    'Amenities': null,
    'Deposit_Min': null,
    'Costs_Not_Included': null,
    'Deposit_Max': null,
    'Lottery_Date': null,
    'Lottery_Results_Date': null,
    'Lottery_Venue': null,
    'Lottery_Summary': null,
    'Lottery_Street_Address': null,
    'Lottery_City': 'San Francisco',
    'Lottery_URL': null,
    'Reserved_community_type': null,
    'Application_Phone': null,
    'Application_Organization': null,
    'Application_Street_Address': null,
    'Application_City': null,
    'Download_URL': null,
    'Application_State': 'CA',
    'Application_Postal_Code': null,
    'In_Lottery': 2,
    'Leasing_Agent_Name': 'Cullen McCaffrey',
    'Leasing_Agent_Title': null,
    'Leasing_Agent_Email': '77bluxome@eqr.com',
    'Leasing_Agent_Phone': '(415) 957-5887',
    'Legal_Disclaimers': 'some disclaimer',
    'Building_Selection_Criteria': null,
    'Pet_Policy': null,
    'Required_Documents': null,
    'Smoking_Policy': null,
    'Eviction_History': null,
    'Criminal_History': null,
    'Credit_Rating': null,
    'Lottery_Status': 'Not Yet Run',
    'Office_Hours': null,
    'Information_Sessions': null,
    'Open_Houses': null,
    'Listing_Lottery_Preferences': [
      {
        'attributes': {
          'type': 'Listing_Lottery_Preference',
          'url': '/services/data/v26.0/sobjects/Listing_Lottery_Preference/a0l0x000000RI8nAAG'
        },
        'Id': 'a0l0x000000RI8nAAG',
        'Total_Submitted_Apps': 0,
        'Order': null,
        'Description': 'For households in which at least one member was a resident of the Alice Griffith housing development. This includes baseline and current residents that lived in the targeted redevelopment site on or after the time of application for Choice Neighborhoods of October 26, 2010.',
        'Available_Units': null,
        'PDF_URL': null,
        'Lottery_Preference': {
          'attributes': {
            'type': 'Lottery_Preference',
            'url': '/services/data/v26.0/sobjects/Lottery_Preference/a0m0P00000yuzO0QAI'
          },
          'Id': 'a0m0P00000yuzO0QAI',
          'Name': 'Alice Griffith Housing Development Resident'
        }
      }
    ],
    'Units': [
      {
        'attributes': {
          'type': 'Unit',
          'url': '/services/data/v26.0/sobjects/Unit/a0b0x000000yyMBAAY'
        },
        'Unit_Type': 'Studio',
        'BMR_Rent_Monthly': null,
        'BMR_Rental_Minimum_Monthly_Income_Needed': 0,
        'Status': 'Available',
        'Property_Type': null,
        'AMI_chart_type': 'HUD Unadjusted',
        'AMI_chart_year': 2017,
        'of_AMI_for_Pricing_Unit': null,
        'Reserved_Type': null
      }
    ]
  }
}

const listingFields = () => {
  return {
    'Id': null,
    'Name': {
      'label': 'Listing Name',
      'minWidth': 225
    },
    'Application_Due_Date': {
      'type': 'date'
    },
    'Lottery_Date': {
      'type': 'date'
    },
    'Lottery_Results_Date': {
      'type': 'date'
    },
    'Lottery_Status': null,
    'nFlagged_Applications': {
      'label': 'Flagged Applications'
    },
    'In_Lottery': {
      'label': 'Applications In Lottery'
    }
  }
}

const listings = [
  {
    'id': 0,
    'accepting_applications_at_leasing_agent': false,
    'accepting_applications_by_po_box': true,
    'accepting_online_applications': true,
    'accessibility': 'Elevator to all floors',
    'amenities': 'Laundry room, underground parking, courtyard, bike room',
    'application_due_date': '2021-01-01T12:00:00.000Z',
    'application_organization': '280 Fell-BMR',
    'application_city': 'San Francisco',
    'application_phone': '(415) 227-2256',
    'application_postal_code': '94142',
    'application_state': 'CA',
    'application_street_address': 'P.O. Box 420847',
    'blank_paper_application_can_be_picked_up': false,
    'building_city': 'San Francisco',
    'building_name': 'Automated Test Building',
    'building_selection_criteria': 'https://us.awp.autotask.net/1/filelink/113bd-37ed41a1-53a7f01459-2',
    'building_state': 'CA',
    'building_street_address': '2601 Mission St',
    'building_url': 'https://s-media-cache-ak0.pinimg.com/736x/a4/b7/e1/a4b7e1cb9732fb672483fcd61c7f70b9.jpg',
    'building_zip_code': null,
    'costs_not_included': 'Tenants pay for gas, electricity.\r\n\r\nFor pet fees:  Cat is allowed with a $500 refundable deposit, $250 non-refundable cleaning fee and a pet addendum.  \r\n\r\nDogs are not allowed in the building.  \r\n\r\nOne parking space per unit available for $175 a month.',
    'credit_rating': 'Provide a credit report with score from Equifax, Experian, or TransUnion dated within thirty (30) days of the application. \r\n\r\nAccounts that are not current or that are derogatory will negatively affect the overall scoring, which could result in the denial of the application or an additional deposit may be required. \r\n\r\nCollection accounts exceeding a combined amount of $1,000.00 (excluding student loans and medical debt) will negatively affect the overall scoring, which could result in the denial of the application or an additional deposit may be required. \r\n\r\nBankruptcy if not cleared will be an automatic denial of the rental application. \r\n\r\nNo Guarantors permitted.\r\n\r\nMitigating circumstances may be considered.',
    'deposit_max': '2355.0',
    'deposit_min': '2102.0',
    'developer': 'TEST Property Manager',
    'does_match': false,
    'first_come_first_served': false,
    'has_waitlist': true,
    'image_url': 'https://s-media-cache-ak0.pinimg.com/736x/a4/b7/e1/a4b7e1cb9732fb672483fcd61c7f70b9.jpg',
    'in_lottery': true,
    'last_modified_date': '2018-11-27T21:59:57.000Z',
    'legal_disclaimers': '<span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'>All BMR renters must review and acknowledge the </span></span><a href=\'http://sf-moh.org/index.aspx?page=295\' target=\'_blank\'><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'><span style=\'color: rgb(0, 0, 255);\'>Inclusionary Affordable Housing Program Monitoring and Procedures Manual 2013</span></span></span></a><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'> that governs this property upon the signing of a lease for a BMR unit. </span></span><br> <br><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'>Applicants should be informed that BMR rental units in some buildings may convert to ownership units in the future.  In the case of conversion, BMR renters will be afforded certain rights as explained in the </span></span><a href=\'http://sf-moh.org/index.aspx?page=295\' target=\'_blank\'><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'><span style=\'color: rgb(0, 0, 255);\'>Inclusionary Affordable Housing Program Monitoring and Procedures Manual 2013</span></span></span></a><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'>. Applicants should inquire with the building contact person listed above to determine if the building has a minimum number of years that it must remain a rental building.  (Some buildings may have such restrictions based on government sources of financing for their building.) Most buildings may have no restrictions on conversion at all. </span></span><br> <br><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'>It is also important to note that units governed by the Inclusionary Housing Program are NOT governed by the San Francisco Rent Ordinance (also known as “rent control”). Among other rules, rents may increase beyond increases allowed under “rent control.”  Please see the </span></span><span style=\'font-size: 12pt;\'><span style=\'font-family: times new roman,serif;\'><a href=\'http://sf-moh.org/index.aspx?page=295\' target=\'_blank\'><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'><span style=\'color: rgb(0, 0, 255);\'>Inclusionary Affordable Housing Program Monitoring and Procedures Manual 2013</span></span></span></a></span></span><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'> for more information. </span></span>',
    'listing_id': 'a0W0P00000F8YG4UAN',
    'lottery_city': 'San Francisco',
    'lottery_date': '2017-03-22T18:00:00.000Z',
    'lottery_results': false,
    'lottery_results_date': '2017-03-23T00:00:00.000Z',
    'lottery_status': 'Not Yet Run',
    'lottery_street_address': '1 S. Van Ness Avenue 5th FL',
    'lottery_venue': 'MOHCD',
    'lottery_winners': 0,
    'lottery_results_url': 'http://sfmohcd.org/sites/default/files/Documents/MOH/Lottery%20Results/280%20Fell%20Street%20Ranked%20List-%203-22-2017.pdf',
    'marketing_url': 'A',
    'maximum_waitlist_size': 888,
    'name': 'Automated Test Listing (please do not modify)',
    'neighborhood': 'Hayes Valley',
    'general_application_total': 724,
    'number_of_people_currently_on_waitlist': 10,
    'pet_policy': 'Dogs are not allowed in the building.',
    'priorities_descriptor': null,
    'program_type': 'IH-RENTAL',
    'project_id': '2012-021',
    'required_documents': 'Lottery winners will be required to fill out a building application and provide a copy of your current credit report, 3 most recent paystubs, current tax returns and W-2, and 3 most recent bank statements.',
    'reserved_community_maximum_age': 0,
    'reserved_community_minimum_age': 0,
    'reserved_descriptor': null,
    'sase_required_for_lottery_ticket': true,
    'smoking_policy': 'Non-smoking building',
    'total_waitlist_openings': 878,
    'units_available': 1,
    'year_built': 0,
    'created_at': '2019-04-29T15:01:58.076Z',
    'updated_at': '2019-04-29T15:01:58.076Z'
  },
  {
    'id': 2,
    'accepting_applications_at_leasing_agent': false,
    'accepting_applications_by_po_box': true,
    'accepting_online_applications': true,
    'accessibility': 'Elevator to all floors',
    'amenities': 'Laundry room, underground parking, courtyard, bike room',
    'application_due_date': '2021-01-01T12:00:00.000Z',
    'application_organization': '280 Fell-BMR',
    'application_city': 'San Mateo',
    'application_phone': '(415) 227-2256',
    'application_postal_code': '94142',
    'application_state': 'CA',
    'application_street_address': 'P.O. Box 420847',
    'blank_paper_application_can_be_picked_up': false,
    'building_city': 'San Mateo',
    'building_name': 'Delaware Pacific',
    'building_selection_criteria': 'https://us.awp.autotask.net/1/filelink/113bd-37ed41a1-53a7f01459-2',
    'building_state': 'CA',
    'building_street_address': '1990 S Delaware St',
    'building_url': 'https://s-media-cache-ak0.pinimg.com/736x/a4/b7/e1/a4b7e1cb9732fb672483fcd61c7f70b9.jpg',
    'building_zip_code': '94403',
    'costs_not_included': 'Tenants pay for gas, electricity.\n\nFor pet fees:  Cat is allowed with a $500 refundable deposit, $250 non-refundable cleaning fee and a pet addendum.  \n\nDogs are not allowed in the building.  \n\nOne parking space per unit available for $175 a month.',
    'credit_rating': 'Provide a credit report with score from Equifax, Experian, or TransUnion dated within thirty (30) days of the application. \n\nAccounts that are not current or that are derogatory will negatively affect the overall scoring, which could result in the denial of the application or an additional deposit may be required. \n\nCollection accounts exceeding a combined amount of $1,000.00 (excluding student loans and medical debt) will negatively affect the overall scoring, which could result in the denial of the application or an additional deposit may be required. \n\nBankruptcy if not cleared will be an automatic denial of the rental application. \n\nNo Guarantors permitted.\n\nMitigating circumstances may be considered.',
    'deposit_max': '2355.0',
    'deposit_min': '2102.0',
    'developer': 'Midpen',
    'does_match': false,
    'first_come_first_served': false,
    'has_waitlist': true,
    'image_url': 'https://midpenproperty.midpen-housing.org/servlet/servlet.FileDownload?retURL=%2Fapex%2FPropertySearch&file=00P46000000RliEEAS',
    'in_lottery': false,
    'last_modified_date': null,
    'legal_disclaimers': '<span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'>All BMR renters must review and acknowledge the </span></span><a href=\'http://sf-moh.org/index.aspx?page=295\' target=\'_blank\'><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'><span style=\'color: rgb(0, 0, 255);\'>Inclusionary Affordable Housing Program Monitoring and Procedures Manual 2013</span></span></span></a><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'> that governs this property upon the signing of a lease for a BMR unit. </span></span><br> <br><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'>Applicants should be informed that BMR rental units in some buildings may convert to ownership units in the future.  In the case of conversion, BMR renters will be afforded certain rights as explained in the </span></span><a href=\'http://sf-moh.org/index.aspx?page=295\' target=\'_blank\'><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'><span style=\'color: rgb(0, 0, 255);\'>Inclusionary Affordable Housing Program Monitoring and Procedures Manual 2013</span></span></span></a><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'>. Applicants should inquire with the building contact person listed above to determine if the building has a minimum number of years that it must remain a rental building.  (Some buildings may have such restrictions based on government sources of financing for their building.) Most buildings may have no restrictions on conversion at all. </span></span><br> <br><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'>It is also important to note that units governed by the Inclusionary Housing Program are NOT governed by the San Francisco Rent Ordinance (also known as “rent control”). Among other rules, rents may increase beyond increases allowed under “rent control.”  Please see the </span></span><span style=\'font-size: 12pt;\'><span style=\'font-family: times new roman,serif;\'><a href=\'http://sf-moh.org/index.aspx?page=295\' target=\'_blank\'><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'><span style=\'color: rgb(0, 0, 255);\'>Inclusionary Affordable Housing Program Monitoring and Procedures Manual 2013</span></span></span></a></span></span><span style=\'font-size: 10pt;\'><span style=\'font-family: arial,sans-serif;\'> for more information. </span></span>',
    'listing_id': '1',
    'lottery_city': 'San Mateo',
    'lottery_date': '2017-03-22T18:00:00.000Z',
    'lottery_results': false,
    'lottery_results_date': '2017-03-23T07:00:00.000Z',
    'lottery_status': 'Not Yet Run',
    'lottery_street_address': '1 S. Van Ness Avenue 5th FL',
    'lottery_venue': 'MOHCD',
    'lottery_winners': 0,
    'lottery_results_url': 'http://sfmohcd.org/sites/default/files/Documents/MOH/Lottery%20Results/280%20Fell%20Street%20Ranked%20List-%203-22-2017.pdf',
    'marketing_url': 'Automated-Test--Feb18',
    'maximum_waitlist_size': 888,
    'name': 'Delaware Pacific',
    'neighborhood': 'Fiesta Gardens',
    'general_application_total': 724,
    'number_of_people_currently_on_waitlist': 10,
    'pet_policy': 'Dogs are not allowed in the building.',
    'priorities_descriptor': null,
    'program_type': 'IH-RENTAL',
    'project_id': '2012-021',
    'required_documents': 'Lottery winners will be required to fill out a building application and provide a copy of your current credit report, 3 most recent paystubs, current tax returns and W-2, and 3 most recent bank statements.',
    'reserved_community_maximum_age': 0,
    'reserved_community_minimum_age': 0,
    'reserved_descriptor': null,
    'sase_required_for_lottery_ticket': true,
    'smoking_policy': 'Non-smoking building',
    'total_waitlist_openings': 878,
    'units_available': 1,
    'year_built': 0,
    'created_at': '2019-04-22T16:26:39.580Z',
    'updated_at': '2019-04-22T16:26:39.580Z'
  }
]

export default {
  listingDetail,
  listingFields,
  listings
}

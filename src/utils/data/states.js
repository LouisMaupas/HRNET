const statesObject = [
  {
    label: "Alabama",
    abbreviation: "AL",
  },
  {
    label: "Alaska",
    abbreviation: "AK",
  },
  {
    label: "American Samoa",
    abbreviation: "AS",
  },
  {
    label: "Arizona",
    abbreviation: "AZ",
  },
  {
    label: "Arkansas",
    abbreviation: "AR",
  },
  {
    label: "California",
    abbreviation: "CA",
  },
  {
    label: "Colorado",
    abbreviation: "CO",
  },
  {
    label: "Connecticut",
    abbreviation: "CT",
  },
  {
    label: "Delaware",
    abbreviation: "DE",
  },
  {
    label: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    label: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    label: "Florida",
    abbreviation: "FL",
  },
  {
    label: "Georgia",
    abbreviation: "GA",
  },
  {
    label: "Guam",
    abbreviation: "GU",
  },
  {
    label: "Hawaii",
    abbreviation: "HI",
  },
  {
    label: "Idaho",
    abbreviation: "ID",
  },
  {
    label: "Illinois",
    abbreviation: "IL",
  },
  {
    label: "Indiana",
    abbreviation: "IN",
  },
  {
    label: "Iowa",
    abbreviation: "IA",
  },
  {
    label: "Kansas",
    abbreviation: "KS",
  },
  {
    label: "Kentucky",
    abbreviation: "KY",
  },
  {
    label: "Louisiana",
    abbreviation: "LA",
  },
  {
    label: "Maine",
    abbreviation: "ME",
  },
  {
    label: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    label: "Maryland",
    abbreviation: "MD",
  },
  {
    label: "Massachusetts",
    abbreviation: "MA",
  },
  {
    label: "Michigan",
    abbreviation: "MI",
  },
  {
    label: "Minnesota",
    abbreviation: "MN",
  },
  {
    label: "Mississippi",
    abbreviation: "MS",
  },
  {
    label: "Missouri",
    abbreviation: "MO",
  },
  {
    label: "Montana",
    abbreviation: "MT",
  },
  {
    label: "Nebraska",
    abbreviation: "NE",
  },
  {
    label: "Nevada",
    abbreviation: "NV",
  },
  {
    label: "New Hampshire",
    abbreviation: "NH",
  },
  {
    label: "New Jersey",
    abbreviation: "NJ",
  },
  {
    label: "New Mexico",
    abbreviation: "NM",
  },
  {
    label: "New York",
    abbreviation: "NY",
  },
  {
    label: "North Carolina",
    abbreviation: "NC",
  },
  {
    label: "North Dakota",
    abbreviation: "ND",
  },
  {
    label: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    label: "Ohio",
    abbreviation: "OH",
  },
  {
    label: "Oklahoma",
    abbreviation: "OK",
  },
  {
    label: "Oregon",
    abbreviation: "OR",
  },
  {
    label: "Palau",
    abbreviation: "PW",
  },
  {
    label: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    label: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    label: "Rhode Island",
    abbreviation: "RI",
  },
  {
    label: "South Carolina",
    abbreviation: "SC",
  },
  {
    label: "South Dakota",
    abbreviation: "SD",
  },
  {
    label: "Tennessee",
    abbreviation: "TN",
  },
  {
    label: "Texas",
    abbreviation: "TX",
  },
  {
    label: "Utah",
    abbreviation: "UT",
  },
  {
    label: "Vermont",
    abbreviation: "VT",
  },
  {
    label: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    label: "Virginia",
    abbreviation: "VA",
  },
  {
    label: "Washington",
    abbreviation: "WA",
  },
  {
    label: "West Virginia",
    abbreviation: "WV",
  },
  {
    label: "Wisconsin",
    abbreviation: "WI",
  },
  {
    label: "Wyoming",
    abbreviation: "WY",
  },
];

const statesOptions = [
  {
    label: "Alabama",
    value: "Alabama",
  },
  {
    label: "Alaska",
    value: "Alaska",
  },
  {
    label: "American Samoa",
    value: "American Samoa",
  },
  {
    label: "Arizona",
    value: "Arizona",
  },
  {
    label: "Arkansas",
    value: "Arkansas",
  },
  {
    label: "California",
    value: "California",
  },
  {
    label: "Colorado",
    value: "Colorado",
  },
  {
    label: "Connecticut",
    value: "Connecticut",
  },
  {
    label: "Delaware",
    value: "Delaware",
  },
  {
    label: "District Of Columbia",
    value: "District Of Columbia",
  },
  {
    label: "Federated States Of Micronesia",
    value: "Federated States Of Micronesia",
  },
  {
    label: "Florida",
    value: "Florida",
  },
  {
    label: "Georgia",
    value: "Georgia",
  },
  {
    label: "Guam",
    value: "Guam",
  },
  {
    label: "Hawaii",
    value: "Hawaii",
  },
  {
    label: "Idaho",
    value: "Idaho",
  },
  {
    label: "Illinois",
    value: "Illinois",
  },
  {
    label: "Indiana",
    value: "Indiana",
  },
  {
    label: "Iowa",
    value: "Iowa",
  },
  {
    label: "Kansas",
    value: "Kansas",
  },
  {
    label: "Kentucky",
    value: "Kentucky",
  },
  {
    label: "Louisiana",
    value: "Louisiana",
  },
  {
    label: "Maine",
    value: "Maine",
  },
  {
    label: "Marshall Islands",
    value: "Marshall Islands",
  },
  {
    label: "Maryland",
    value: "Maryland",
  },
  {
    label: "Massachusetts",
    value: "Massachusetts",
  },
  {
    label: "Michigan",
    value: "Michigan",
  },
  {
    label: "Minnesota",
    value: "Minnesota",
  },
  {
    label: "Mississippi",
    value: "Mississippi",
  },
  {
    label: "Missouri",
    value: "Missouri",
  },
  {
    label: "Montana",
    value: "Montana",
  },
  {
    label: "Nebraska",
    value: "Nebraska",
  },
  {
    label: "Nevada",
    value: "Nevada",
  },
  {
    label: "New Hampshire",
    value: "New Hampshire",
  },
  {
    label: "New Jersey",
    value: "New Jersey",
  },
  {
    label: "New Mexico",
    value: "New Mexico",
  },
  {
    label: "New York",
    value: "New York",
  },
  {
    label: "North Carolina",
    value: "North Carolina",
  },
  {
    label: "North Dakota",
    value: "North Dakota",
  },
  {
    label: "Northern Mariana Islands",
    value: "Northern Mariana Islands",
  },
  {
    label: "Ohio",
    value: "Ohio",
  },
  {
    label: "Oklahoma",
    value: "Oklahoma",
  },
  {
    label: "Oregon",
    value: "Oregon",
  },
  {
    label: "Palau",
    value: "Palau",
  },
  {
    label: "Pennsylvania",
    value: "Pennsylvania",
  },
  {
    label: "Puerto Rico",
    value: "Puerto Rico",
  },
  {
    label: "Rhode Island",
    value: "Rhode Island",
  },
  {
    label: "South Carolina",
    value: "South Carolina",
  },
  {
    label: "South Dakota",
    value: "South Dakota",
  },
  {
    label: "Tennessee",
    value: "Tennessee",
  },
  {
    label: "Texas",
    value: "Texas",
  },
  {
    label: "Utah",
    value: "Utah",
  },
  {
    label: "Vermont",
    value: "Vermont",
  },
  {
    label: "Virgin Islands",
    value: "Virgin Islands",
  },
  {
    label: "Virginia",
    value: "Virginia",
  },
  {
    label: "Washington",
    value: "Washington",
  },
  {
    label: "West Virginia",
    value: "West Virginia",
  },
  {
    label: "Wisconsin",
    value: "Wisconsin",
  },
  {
    label: "Wyoming",
    value: "Wyoming",
  },
];

export { statesOptions, statesObject };

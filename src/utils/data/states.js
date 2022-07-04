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
  },
  {
    label: "Alaska",
  },
  {
    label: "American Samoa",
  },
  {
    label: "Arizona",
  },
  {
    label: "Arkansas",
  },
  {
    label: "California",
  },
  {
    label: "Colorado",
  },
  {
    label: "Connecticut",
  },
  {
    label: "Delaware",
  },
  {
    label: "District Of Columbia",
  },
  {
    label: "Federated States Of Micronesia",
  },
  {
    label: "Florida",
  },
  {
    label: "Georgia",
  },
  {
    label: "Guam",
  },
  {
    label: "Hawaii",
  },
  {
    label: "Idaho",
  },
  {
    label: "Illinois",
  },
  {
    label: "Indiana",
  },
  {
    label: "Iowa",
  },
  {
    label: "Kansas",
  },
  {
    label: "Kentucky",
  },
  {
    label: "Louisiana",
  },
  {
    label: "Maine",
  },
  {
    label: "Marshall Islands",
  },
  {
    label: "Maryland",
  },
  {
    label: "Massachusetts",
  },
  {
    label: "Michigan",
  },
  {
    label: "Minnesota",
  },
  {
    label: "Mississippi",
  },
  {
    label: "Missouri",
  },
  {
    label: "Montana",
  },
  {
    label: "Nebraska",
  },
  {
    label: "Nevada",
  },
  {
    label: "New Hampshire",
  },
  {
    label: "New Jersey",
  },
  {
    label: "New Mexico",
  },
  {
    label: "New York",
  },
  {
    label: "North Carolina",
  },
  {
    label: "North Dakota",
  },
  {
    label: "Northern Mariana Islands",
  },
  {
    label: "Ohio",
  },
  {
    label: "Oklahoma",
  },
  {
    label: "Oregon",
  },
  {
    label: "Palau",
  },
  {
    label: "Pennsylvania",
  },
  {
    label: "Puerto Rico",
  },
  {
    label: "Rhode Island",
  },
  {
    label: "South Carolina",
  },
  {
    label: "South Dakota",
  },
  {
    label: "Tennessee",
  },
  {
    label: "Texas",
  },
  {
    label: "Utah",
  },
  {
    label: "Vermont",
  },
  {
    label: "Virgin Islands",
  },
  {
    label: "Virginia",
  },
  {
    label: "Washington",
  },
  {
    label: "West Virginia",
  },
  {
    label: "Wisconsin",
  },
  {
    label: "Wyoming",
  },
];

export { statesOptions, statesObject };

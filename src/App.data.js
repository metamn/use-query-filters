const dataDefault = {
  filters: [
    {
      label: "Text",
      queryParam: { name: "q", type: "StringParam" },
      input: { type: "text", value: "" }
    },
    {
      label: "Radio",
      queryParam: { name: "gender", type: "StringParam" },
      input: {
        type: "radio",
        items: [
          {
            label: "Women",
            value: "female"
          },
          {
            label: "Men",
            value: "male"
          }
        ]
      }
    },
    {
      label: "Select",
      queryParam: { name: "status", type: "StringParam" },
      input: {
        type: "select",
        items: [
          {
            label: "Fundraising",
            value: "fundraising"
          },
          {
            label: "Funded",
            value: "funded"
          }
        ]
      }
    },
    {
      label: "Checkbox - string",
      queryParam: { name: "location", type: "DelimitedArrayParam" },
      input: {
        type: "checkbox",
        items: [
          {
            label: "Canada",
            value: "ca"
          },
          {
            label: "Mexico",
            value: "mx"
          },
          {
            label: "UK",
            value: "uk"
          },
          {
            label: "France",
            value: "fr"
          }
        ]
      }
    },
    {
      label: "Checkbox - number",
      queryParam: { name: "sector", type: "DelimitedNumericArrayParam" },
      input: {
        type: "checkbox",
        items: [
          {
            label: "Agriculture",
            value: 1
          },
          {
            label: "Economy",
            value: 2
          },
          {
            label: "IT",
            value: 300
          }
        ]
      }
    },
    {
      label: "Range multi handle",
      queryParam: { name: "risk", type: "DelimitedNumericArrayParam" },
      input: {
        type: "range-multi-handle",
        min: 0,
        max: 5,
        value: { min: 1, max: 4 }
      }
    }
  ]
};

const dataWakibi = {
  groups: [
    {
      label: "Borrowers",
      filters: [
        {
          label: "Gender",
          isLabelDisplayed: false
        },
        {
          label: "Is Group?",
          isLabelDisplayed: false
        }
      ]
    },
    {
      label: "Location",
      filters: [
        {
          label: "North America"
        },
        {
          label: "Europe"
        }
      ]
    },
    {
      label: "Sector",
      type: "standalone"
    },
    {
      label: "Attributes",
      type: "standalone"
    },
    {
      label: "Tags",
      type: "standalone"
    },
    {
      label: "Ratings",
      isLabelDisplayed: false,
      filters: [
        {
          label: "Risk rating"
        },
        {
          label: "Delinquency rate"
        },
        {
          label: "Default rate"
        },
        {
          label: "Average cost to borrower"
        },
        {
          label: "Profitability"
        }
      ]
    }
  ],
  filters: [
    {
      label: "Gender",
      queryParam: { name: "gender", type: "StringParam" },
      input: {
        type: "radio",
        items: [
          {
            label: "Women",
            value: "female"
          },
          {
            label: "Men",
            value: "male"
          }
        ]
      }
    },
    {
      label: "Is Group?",
      queryParam: { name: "group", type: "StringParam" },
      input: {
        type: "radio",
        items: [
          {
            label: "Individual",
            value: "false"
          },
          {
            label: "Group",
            value: "true"
          }
        ]
      }
    },
    {
      label: "North America",
      queryParam: { name: "location", type: "DelimitedArrayParam" },
      input: {
        type: "checkbox",
        items: [
          {
            label: "Canada",
            value: "ca"
          },
          {
            label: "Mexico",
            value: "mx"
          },
          {
            label: "US",
            value: "us"
          }
        ]
      }
    },
    {
      label: "Europe",
      queryParam: { name: "location", type: "DelimitedArrayParam" },
      input: {
        type: "checkbox",
        items: [
          {
            label: "UK",
            value: "uk"
          },
          {
            label: "France",
            value: "fr"
          },
          {
            label: "Belgium",
            value: "be"
          }
        ]
      }
    },
    {
      label: "Sector",
      queryParam: { name: "sector", type: "DelimitedNumericArrayParam" },
      input: {
        type: "checkbox",
        items: [
          {
            label: "Agriculture",
            value: 1
          },
          {
            label: "Economy",
            value: 2
          },
          {
            label: "IT",
            value: 300
          }
        ]
      }
    },
    {
      label: "Attributes",
      queryParam: { name: "attributes", type: "DelimitedNumericArrayParam" },
      input: {
        type: "checkbox",
        items: [
          {
            label: "Green",
            value: 1
          },
          {
            label: "Higher education",
            value: 2
          },
          {
            label: "Islamic finance",
            value: 300
          }
        ]
      }
    },
    {
      label: "Tags",
      queryParam: { name: "tag", type: "DelimitedNumericArrayParam" },
      input: {
        type: "checkbox",
        items: [
          {
            label: "Animals",
            value: 1
          },
          {
            label: "Elderly",
            value: 2
          },
          {
            label: "Unique",
            value: 30
          },
          {
            label: "Fabrics",
            value: 300
          }
        ]
      }
    },
    {
      label: "Risk rating",
      queryParam: { name: "risk", type: "DelimitedNumericArrayParam" },
      input: {
        type: "range-multi-handle",
        min: 0,
        max: 5,
        value: { min: 1, max: 4 }
      }
    },
    {
      label: "Delinquency rate",
      queryParam: { name: "delinquency", type: "DelimitedNumericArrayParam" },
      input: {
        type: "range-multi-handle",
        min: 0,
        max: 54,
        value: { min: 0, max: 54 }
      }
    },
    {
      label: "Default rate",
      queryParam: { name: "default", type: "DelimitedNumericArrayParam" },
      input: {
        type: "range-multi-handle",
        min: 0,
        max: 9,
        value: { min: 0, max: 9 }
      }
    },
    {
      label: "Average cost to borrower",
      queryParam: { name: "cost", type: "DelimitedNumericArrayParam" },
      input: {
        type: "range-multi-handle",
        min: 0,
        max: 78,
        value: { min: 0, max: 78 }
      }
    },
    {
      label: "Profitability",
      queryParam: { name: "profitability", type: "DelimitedNumericArrayParam" },
      input: {
        type: "range-multi-handle",
        min: -55,
        max: 66,
        value: { min: 0, max: 9 }
      }
    }
  ]
};

export { dataWakibi, dataDefault };

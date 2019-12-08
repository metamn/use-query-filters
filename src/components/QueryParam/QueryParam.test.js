import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import QueryParam, {
  QueryParamPropTypes,
  SupportedParamTypes,
  SupportedParamTypesAsString,
  convertStringToQueryParamObject,
  isParamTypeAsStringSupported,
  getQueryParamsFromFilters
} from "./QueryParam";

import { StringParam, DelimitedNumericArrayParam } from "use-query-params";

const filters1 = [
  {
    label: "Search",
    queryParam: { name: "q", type: "StringParam" },
    input: { type: "text", value: "" }
  },
  {
    label: "Location",
    queryParam: { name: "location", type: "ArrayParam" },
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
        }
      ]
    }
  }
];

const filters2 = [
  {
    label: "Search",
    queryParam: { name: "q", type: "StringParam" },
    input: { type: "text", value: "" }
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
  }
];

describe("The QueryParam component - behavior", function() {
  test("Checks if a param type string is supported", () => {
    const supported = SupportedParamTypesAsString[0];

    expect(
      isParamTypeAsStringSupported({ paramTypeAsString: supported })
    ).toStrictEqual(0);
  });

  test("Returns error when a param type string is not supported", () => {
    const supported = "random";

    expect(
      isParamTypeAsStringSupported({ paramTypeAsString: supported })
    ).toStrictEqual(-1);
  });

  test("Returns a query param type object from a string", () => {
    expect(
      convertStringToQueryParamObject({ type: "StringParam" })
    ).toStrictEqual(StringParam);
  });

  test("Collects the query params from filters", () => {
    expect(getQueryParamsFromFilters({ filters: filters2 })).toStrictEqual({
      q: StringParam,
      risk: DelimitedNumericArrayParam
    });
  });

  test("Fails collecting query params from filters if a query param is not supported", () => {
    expect(getQueryParamsFromFilters({ filters: filters1 })).toStrictEqual({
      q: StringParam,
      location: null
    });
  });
});

describe("The QueryParam component - structure", function() {
  it("Renders nothing", () => {
    const { container } = render(<QueryParam />);
    expect(container.firstChild).toBeNull();
  });

  it("Has a `name` input prop", () => {
    const { name } = QueryParamPropTypes;
    expect(name).toBeDefined();
  });

  it("Has a `type` input prop", () => {
    const { type } = QueryParamPropTypes;
    expect(type).toBeDefined();
  });

  it("Defines a set of supported param types", () => {
    const length = SupportedParamTypes.length;
    expect(length).toBeDefined();
  });

  it("Defines a set of supported param types as strings", () => {
    const length = SupportedParamTypesAsString.length;
    expect(length).toBeDefined();
  });

  it("Offers an `convertStringToQueryParamObject` function", () => {
    expect(convertStringToQueryParamObject).toBeDefined();
  });

  it("Offers an `isParamTypeAsStringSupported` function", () => {
    expect(isParamTypeAsStringSupported).toBeDefined();
  });

  it("Offers an `getQueryParamsFromFilters` function", () => {
    expect(getQueryParamsFromFilters).toBeDefined();
  });
});

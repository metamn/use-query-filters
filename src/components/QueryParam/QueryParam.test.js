import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import QueryParam, {
  QueryParamPropTypes,
  SupportedParamTypes,
  SupportedParamTypesAsString,
  convertStringToQueryParamObject,
  isParamTypeAsStringSupported
} from "./QueryParam";

import { StringParam } from "use-query-params";

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
});

describe("The QueryParam component - structure", function() {
  it("Renders a component with the `QueryParam` class name", () => {
    const { container } = render(<QueryParam />);
    expect(container.firstChild).toHaveClass("QueryParam");
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
});

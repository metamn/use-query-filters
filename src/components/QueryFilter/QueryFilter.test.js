import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import QueryFilter, {
  QueryFilterPropTypes,
  isFilterWellDefined
} from "./QueryFilter";

import { SupportedFilters, QueryFiltersDefaultProps } from "../QueryFilters";

const QueryFiltersThemeContext = React.createContext();

describe("The QueryFilter component - behavior", function() {
  test("Checks if a filter is well defined.", () => {
    const supported = SupportedFilters[0];
    const { filter, paramTypes } = supported;
    const paramType = paramTypes[0];

    const props = {
      queryParam: {
        type: paramType
      },
      input: {
        type: filter
      }
    };

    expect(isFilterWellDefined({ filter: props })).toStrictEqual(true);
  });

  test("Fails when the filter's param type is not well defined.", () => {
    const supported = SupportedFilters[0];
    const { filter } = supported;

    const props = {
      queryParam: {
        type: "random"
      },
      input: {
        type: filter
      }
    };

    expect(isFilterWellDefined({ filter: props })).toStrictEqual(false);
  });

  test("Fails when the filter's type is not well defined.", () => {
    const supported = SupportedFilters[0];
    const { paramTypes } = supported;
    const paramType = paramTypes[0];

    const props = {
      queryParam: {
        type: paramType
      },
      input: {
        type: "random"
      }
    };

    expect(isFilterWellDefined({ filter: props })).toStrictEqual(false);
  });
});

describe("The QueryFilter component - structure", function() {
  it("Renders a component with the `QueryFilter` class name", () => {
    const { renderers } = QueryFiltersDefaultProps;

    const { container } = render(
      <QueryFiltersThemeContext.Provider value={renderers}>
        <QueryFilter />
      </QueryFiltersThemeContext.Provider>
    );

    expect(container.firstChild).toHaveClass("QueryFilter");
  });

  it("Has a `label` input prop", () => {
    const { label } = QueryFilterPropTypes;
    expect(label).toBeDefined();
  });

  it("Has a `queryParam` input prop", () => {
    const { queryParam } = QueryFilterPropTypes;
    expect(queryParam).toBeDefined();
  });

  it("Has a `input` input prop", () => {
    const { input } = QueryFilterPropTypes;
    expect(input).toBeDefined();
  });

  it("Offers an `isFilterWellDefined` function", () => {
    expect(isFilterWellDefined).toBeDefined();
  });
});

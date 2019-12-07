import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Filter, { FilterPropTypes, isFilterWellDefined } from "./Filter";

import { SupportedFilters, FiltersDefaultProps } from "../Filters";

const FiltersThemeContext = React.createContext();

describe("The Filter component - behavior", function() {
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

describe("The Filter component - structure", function() {
  it("Renders a component with the `Filter` class name", () => {
    const { renderers } = FiltersDefaultProps;

    const { container } = render(
      <FiltersThemeContext.Provider value={renderers}>
        <Filter />
      </FiltersThemeContext.Provider>
    );

    expect(container.firstChild).toHaveClass("Filter");
  });

  it("Has a `label` input prop", () => {
    const { label } = FilterPropTypes;
    expect(label).toBeDefined();
  });

  it("Has a `queryParam` input prop", () => {
    const { queryParam } = FilterPropTypes;
    expect(queryParam).toBeDefined();
  });

  it("Has a `input` input prop", () => {
    const { input } = FilterPropTypes;
    expect(input).toBeDefined();
  });

  it("Offers an `isFilterWellDefined` function", () => {
    expect(isFilterWellDefined).toBeDefined();
  });
});

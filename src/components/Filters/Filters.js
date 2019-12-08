import React from "react";
import PropTypes from "prop-types";

import { useQueryParams } from "use-query-params";

import Filter, {
  isFilterWellDefined,
  FilterPropTypes
  // This is for testing purposes only
  // FilterDefaultProps
} from "../Filter";

import { getQueryParamsFromFilters } from "../QueryParam";

import { dataDefault } from "../../App.data";

import {
  InputCheckboxNaked,
  InputRadioNaked,
  InputRangeMultiHandleNaked,
  InputSelectNaked,
  InputTextNaked
} from "../renderers/naked";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Defines the filters array.
   *
   * @see App.data.js for the syntax
   */
  filters: PropTypes.arrayOf(PropTypes.shape(FilterPropTypes)),
  /**
   * Defines the renderers which will render the input controls
   */
  renderers: PropTypes.objectOf(PropTypes.func)
};

/**
 * Defines the default props
 */
const defaultProps = {
  // This is for testing purposes only
  // filters: Array(1).fill(FilterDefaultProps)
  filters: dataDefault.filters,
  renderers: {
    InputCheckbox: InputCheckboxNaked,
    InputRadio: InputRadioNaked,
    InputRangeMultiHandle: InputRangeMultiHandleNaked,
    InputSelect: InputSelectNaked,
    InputText: InputTextNaked
  }
};

/**
 * Defines which filter types are supported.
 * - Also defines which query param type is supported by a filter.
 * - Also defines how the query value should look like
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 * @see https://github.com/pbeshai/use-query-params#param-types
 */
const SupportedFilters = [
  {
    filter: "text",
    paramTypes: ["StringParam"],
    paramValues: PropTypes.string
  },
  {
    filter: "checkbox",
    paramTypes: ["DelimitedArrayParam", "DelimitedNumericArrayParam"],
    paramValues: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  },
  {
    filter: "select",
    paramTypes: ["StringParam"],
    paramValues: PropTypes.string
  },
  {
    filter: "radio",
    paramTypes: ["StringParam"],
    paramValues: PropTypes.string
  },
  {
    filter: "range-multi-handle",
    paramTypes: ["DelimitedNumericArrayParam"],
    paramValues: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number
    })
  }
];

/**
 * Displays the query filters
 *
 * - Only the well defined filters will be displayed
 */
const displayFilters = props => {
  const { filters } = props;

  return (
    filters &&
    filters.map &&
    filters.map((filter, index) => {
      return isFilterWellDefined({ filter: filter }) ? (
        <Filter key={index} {...filter} />
      ) : null;
    })
  );
};

/**
 * Sets up a context to make query params available down the component tree
 */
const QueryParamsContext = React.createContext();

/**
 * Sets up a context to make renderers available down the component tree
 */
const RendererContext = React.createContext();

/**
 * Displays the component
 */
const Filters = props => {
  const { filters, renderers } = props;

  /**
   * Loads all available param types.
   *
   * - This will act as a whitelist for URL params
   */
  const queryParamsFromFilters = getQueryParamsFromFilters({
    filters: filters
  });

  /**
   * Sets up the query params
   */
  const [queryParams, setQueryParams] = useQueryParams(queryParamsFromFilters);

  /**
   * Sets up the context for the query params
   */
  const queryParamsContextValue = {
    queryParams: queryParams,
    setQueryParams: setQueryParams
  };

  return (
    <QueryParamsContext.Provider value={queryParamsContextValue}>
      <RendererContext.Provider value={renderers}>
        <div className="Filters">{displayFilters(props)}</div>
      </RendererContext.Provider>
    </QueryParamsContext.Provider>
  );
};

Filters.propTypes = propTypes;
Filters.defaultProps = defaultProps;

export default Filters;
export {
  propTypes as FiltersPropTypes,
  defaultProps as FiltersDefaultProps,
  SupportedFilters,
  displayFilters,
  RendererContext,
  QueryParamsContext
};

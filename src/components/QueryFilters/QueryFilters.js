import React from "react";
import PropTypes from "prop-types";

import QueryFilter, {
  isFilterWellDefined,
  QueryFilterPropTypes
  // This is for testing purposes only
  // QueryFilterDefaultProps
} from "../QueryFilter";

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
  filters: PropTypes.arrayOf(PropTypes.shape(QueryFilterPropTypes)),
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
  // filters: Array(1).fill(QueryFilterDefaultProps)
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
const displayQueryFilters = props => {
  const { filters } = props;

  return (
    filters &&
    filters.map &&
    filters.map((filter, index) => {
      return isFilterWellDefined({ filter: filter }) ? (
        <QueryFilter key={index} {...filter} />
      ) : null;
    })
  );
};

const QueryFiltersThemeContext = React.createContext();

/**
 * Displays the component
 */
const QueryFilters = props => {
  const { renderers } = props;

  return (
    <QueryFiltersThemeContext.Provider value={renderers}>
      <div className="QueryFilters">{displayQueryFilters(props)}</div>
    </QueryFiltersThemeContext.Provider>
  );
};

QueryFilters.propTypes = propTypes;
QueryFilters.defaultProps = defaultProps;

export default QueryFilters;
export {
  propTypes as QueryFiltersPropTypes,
  defaultProps as QueryFiltersDefaultProps,
  SupportedFilters,
  displayQueryFilters,
  QueryFiltersThemeContext
};

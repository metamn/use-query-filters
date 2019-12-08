import React from "react";
import PropTypes from "prop-types";

import {
  StringParam,
  DelimitedArrayParam,
  DelimitedNumericArrayParam
} from "use-query-params";

/**
 * Defines the prop types
 *
 * @see App.data.js for the syntax
 */
const propTypes = {
  /**
   * The name of the query param
   */
  name: PropTypes.string.isRequired,
  /**
   * The type of the query param according to `use-query-params`
   *
   * @see https://github.com/pbeshai/use-query-params#param-types
   */
  type: PropTypes.string.isRequired
};

/**
 * Defines the default props
 */
const defaultProps = {
  name: "q",
  type: "StringParam"
};

/**
 * Defines which param types are implemented from `use-query-params`
 *
 * - Only these can be added as `type`
 *
 * @see https://github.com/pbeshai/use-query-params#param-types
 */
const SupportedParamTypes = [
  StringParam,
  DelimitedNumericArrayParam,
  DelimitedArrayParam
];

/**
 * Defines the string correspondent to a param type
 *
 * - The filters will use these values to define the param types.
 */
const SupportedParamTypesAsString = [
  "StringParam",
  "DelimitedNumericArrayParam",
  "DelimitedArrayParam"
];

/**
 * Collects the query params from filters
 */
const getQueryParamsFromFilters = props => {
  const { filters } = props;

  return (
    filters &&
    filters.filter &&
    filters
      .filter(item => item.queryParam)
      .map(item => item.queryParam)
      .reduce((result, item) => {
        const { name, type } = item;

        result[name] = convertStringToQueryParamObject({ type: type });
        return result;
      }, {})
  );
};

/**
 * Returns a query param type object from a string
 */
const convertStringToQueryParamObject = props => {
  const { type } = props;

  const index = isParamTypeAsStringSupported({ paramTypeAsString: type });

  if (index === -1) {
    console.log("Invalid param type:", type);
    return null;
  }

  return SupportedParamTypes[index];
};

/**
 * Checks if a param type string is supported
 */
const isParamTypeAsStringSupported = props => {
  const { paramTypeAsString } = props;

  return SupportedParamTypesAsString.indexOf(paramTypeAsString);
};

/**
 * Displays the component
 */
const QueryParam = props => {
  return null;
};

QueryParam.propTypes = propTypes;
QueryParam.defaultProps = defaultProps;

export default QueryParam;
export {
  propTypes as QueryParamPropTypes,
  defaultProps as QueryParamDefaultProps,
  SupportedParamTypes,
  SupportedParamTypesAsString,
  convertStringToQueryParamObject,
  isParamTypeAsStringSupported,
  getQueryParamsFromFilters
};

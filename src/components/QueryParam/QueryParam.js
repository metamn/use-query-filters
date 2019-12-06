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
  name: "query-param",
  type: "query-param-type"
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
 * Displays the component
 */
const QueryParam = props => {
  return <div className="QueryParam">QueryParam</div>;
};

QueryParam.propTypes = propTypes;
QueryParam.defaultProps = defaultProps;

export default QueryParam;
export {
  propTypes as QueryParamPropTypes,
  defaultProps as QueryParamDefaultProps,
  SupportedParamTypes,
  SupportedParamTypesAsString
};

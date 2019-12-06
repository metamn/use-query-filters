import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The label (title) of the filter
   */
  label: PropTypes.string.isRequired,
  /**
   * The query param associated to the filter
   *
   * @see https://github.com/pbeshai/use-query-params
   */
  queryParam: PropTypes.string.isRequired,
  /**
   * The input control to display and manage the filter behavior
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
   */
  input: PropTypes.string.isRequired
};

/**
 * Defines the default props
 */
const defaultProps = {
  label: "Filter title",
  queryParam: "xxx",
  input: "xxx"
};

/**
 * Displays the component
 */
const QueryFilter = props => {
  return <div className="QueryFilter">QueryFilter</div>;
};

QueryFilter.propTypes = propTypes;
QueryFilter.defaultProps = defaultProps;

export default QueryFilter;
export {
  propTypes as QueryFilterPropTypes,
  defaultProps as QueryFilterDefaultProps
};

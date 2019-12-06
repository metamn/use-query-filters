import React from "react";
import PropTypes from "prop-types";

import QueryFilter, {
  isFilterWellDefined,
  QueryFilterPropTypes,
  QueryFilterDefaultProps
} from "../QueryFilter";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Defines the filters array.
   *
   * @see App.data.js for the syntax
   */
  filters: PropTypes.arrayOf(PropTypes.shape(QueryFilterPropTypes))
};

/**
 * Defines the default props
 */
const defaultProps = {
  filters: Array(1).fill(QueryFilterDefaultProps)
};

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

/**
 * Displays the component
 */
const QueryFilters = props => {
  return <div className="QueryFilters">{displayQueryFilters(props)}</div>;
};

QueryFilters.propTypes = propTypes;
QueryFilters.defaultProps = defaultProps;

export default QueryFilters;
export {
  propTypes as QueryFiltersPropTypes,
  defaultProps as QueryFiltersDefaultProps,
  displayQueryFilters
};

import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Defines the filters array.
   */
  filters: PropTypes.array
};

/**
 * Defines the default props
 */
const defaultProps = {
  filters: []
};

/**
 * Displays the component
 */
const QueryFilters = props => {
  const { filters } = props;

  return (
    <div className="QueryFilters">
      {filters &&
        filters.map &&
        filters.map((filter, index) => {
          /**
           * Only well defined filters will be displayed
           */
          return isFilterWellDefined({ filter: filter }) ? (
            <Filter key={index} {...filter} />
          ) : null;
        })}
    </div>
  );
};

QueryFilters.propTypes = propTypes;
QueryFilters.defaultProps = defaultProps;

export default QueryFilters;
export {
  propTypes as QueryFiltersPropTypes,
  defaultProps as QueryFiltersDefaultProps
};

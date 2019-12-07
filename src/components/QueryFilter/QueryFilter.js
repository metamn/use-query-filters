import React, { useContext } from "react";
import PropTypes from "prop-types";

import { QueryParamDefaultProps, QueryParamPropTypes } from "../QueryParam";
import { QueryInputDefaultProps, QueryInputPropTypes } from "../QueryInput";
import { SupportedFilters, QueryFiltersThemeContext } from "../QueryFilters";

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
  queryParam: PropTypes.shape(QueryParamPropTypes).isRequired,
  /**
   * The input control to display and manage the filter behavior
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
   */
  input: PropTypes.shape(QueryInputPropTypes).isRequired
};

/**
 * Defines the default props
 */
const defaultProps = {
  label: "Filter title",
  queryParam: QueryParamDefaultProps,
  input: QueryInputDefaultProps
};

/**
 * Checks if a filter is well defined.
 */
const isFilterWellDefined = props => {
  const { filter } = props;
  const { queryParam, input } = filter;
  const { type: queryParamType } = queryParam;
  const { type: inputType } = input;

  /**
   * Checks the filter type
   */
  const f = SupportedFilters.find(item => item.filter === inputType);

  if (!f) {
    console.log("Unsupported filter type: ", inputType);
    return false;
  }

  /**
   * Checks the param type
   */
  const wellDefined = f.paramTypes.find(item => item === queryParamType);

  if (!wellDefined) {
    console.log(
      `This filter (${inputType}) doesn't supports this query param type: `,
      queryParamType
    );
    return false;
  }

  return true;
};

/**
 * Displays the component
 */
const QueryFilter = props => {
  const { label, input, queryParam } = props;
  const { type } = input;

  const { InputCheckbox } = useContext(QueryFiltersThemeContext);

  const params = { label, queryParam, ...input };

  let result = null;

  switch (type) {
    case "text":
      result = <InputCheckbox {...params} />;
      break;

    default:
      break;
  }

  return <div className="QueryFilter">{result}</div>;
};

QueryFilter.propTypes = propTypes;
QueryFilter.defaultProps = defaultProps;

export default QueryFilter;
export {
  propTypes as QueryFilterPropTypes,
  defaultProps as QueryFilterDefaultProps,
  isFilterWellDefined
};

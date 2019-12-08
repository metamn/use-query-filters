import React, { useContext } from "react";
import PropTypes from "prop-types";

import { QueryParamDefaultProps, QueryParamPropTypes } from "../QueryParam";
import { InputDefaultProps, InputPropTypes } from "../Input";
import { SupportedFilters, RendererContext } from "../Filters";

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
   * // TODO this should be a list of specific input proptypes instead of this general one. Perhaps the testing errors and console warnings will go away then ...
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
   */
  input: PropTypes.shape(InputPropTypes).isRequired
};

/**
 * Defines the default props
 */
const defaultProps = {
  label: "Filter title",
  queryParam: QueryParamDefaultProps,
  input: InputDefaultProps
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
const Filter = props => {
  const { label, queryParam, input } = props;
  const { type } = input;

  const {
    InputText,
    InputCheckbox,
    InputSelect,
    InputRangeMultiHandle,
    InputRadio
  } = useContext(RendererContext);

  const params = { label, queryParam, ...input };

  let result = null;

  switch (type) {
    case "text":
      result = <InputText {...params} />;
      break;

    case "select":
      result = <InputSelect {...params} />;
      break;

    case "radio":
      result = <InputRadio {...params} />;
      break;

    case "checkbox":
      result = <InputCheckbox {...params} />;
      break;

    case "range-multi-handle":
      result = <InputRangeMultiHandle {...params} />;
      break;

    default:
      console.log("Invalid input type:", type);
      break;
  }

  return <div className="Filter">{result}</div>;
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
export {
  propTypes as FilterPropTypes,
  defaultProps as FilterDefaultProps,
  isFilterWellDefined
};

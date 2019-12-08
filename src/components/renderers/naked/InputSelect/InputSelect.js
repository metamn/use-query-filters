import React, { useContext } from "react";

import {
  InputSelectPropTypes,
  InputSelectDefaultProps,
  inputSelectHandleChange
} from "../../../Input";

import { QueryParamsContext } from "../../../Filters";

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
 */
const InputSelect = props => {
  const { label, queryParam, items } = props;
  const { name } = queryParam;

  /**
   * Loads the global query params and the setter function
   */
  const { queryParams, setQueryParams } = useContext(QueryParamsContext);

  /**
   * Loads the value of the query param
   */
  const currentValue = queryParams[name] || "";

  return (
    <div className="InputSelect">
      <label htmlFor={name}>{label}</label>

      <select
        name={name}
        value={currentValue}
        multiple={false}
        onChange={event =>
          inputSelectHandleChange({
            name: name,
            event: event,
            set: setQueryParams
          })
        }
      >
        {items &&
          items.map &&
          items.map((item, index) => {
            const { label, value } = item;

            return (
              <option key={index} value={value}>
                {label}
              </option>
            );
          })}
      </select>
    </div>
  );
};

InputSelect.propTypes = InputSelectPropTypes;
InputSelect.defaultProps = InputSelectDefaultProps;

export { InputSelect };

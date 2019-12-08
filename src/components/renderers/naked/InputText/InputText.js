import React, { useContext } from "react";

import {
  InputTextPropTypes,
  InputTextDefaultProps,
  inputTextHandleChange
} from "../../../Input";

import { QueryParamsContext } from "../../../Filters";

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
 * @see https://reactjs.org/docs/forms.html
 */
const InputText = props => {
  const { label, queryParam, value } = props;
  const { name } = queryParam;

  /**
   * Loads the global query params and the setter function
   */
  const { queryParams, setQueryParams } = useContext(QueryParamsContext);

  /**
   * Loads the value of the query param
   */
  const currentValue = queryParams[name] || value;

  return (
    <div className="InputText">
      <label htmlFor={name}>{label}</label>

      <input
        type="text"
        name={name}
        value={currentValue}
        onChange={event =>
          inputTextHandleChange({
            name: name,
            event: event,
            set: setQueryParams
          })
        }
      />
    </div>
  );
};

InputText.propTypes = InputTextPropTypes;
InputText.defaultProps = InputTextDefaultProps;

export { InputText };

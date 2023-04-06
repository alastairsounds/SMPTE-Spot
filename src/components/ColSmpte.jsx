import React, { useState } from 'react';

const ColSmpte = (props) => {
  const [value, setValue] = useState(props.smpte);

  const formatValue = (input) => {
    // remove all non-numeric characters
    const numericInput = input.replace(/\D/g, '');

    // pad the input with leading zeros
    const paddedInput = numericInput.padStart(8, '0');

    // separate the input into its four components
    const components = paddedInput.match(/^(\d{2})(\d{2})(\d{2})(\d{2})$/);

    if (!components) {
      // input is invalid, return the previous value
      return value;
    }

    // format the components into an SMPTE string
    return `${components[1]}:${components[2]}:${components[3]}:${components[4]}`;
  };

  const handleChange = (event) => {
    const newValue = event.target.value.replace(/[^0-9:;]/g, '');
    setValue(newValue);
  };

  const handleBlur = () => {
    const formattedValue = formatValue(value);
    setValue(formattedValue);
  };

  return (
    <div className="colSmpteBox">
      <input
        type="text"
        placeholder={props.smpte}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default ColSmpte;

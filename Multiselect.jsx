import React, { useState } from 'react';

const Multiselect = ({ value, readonly }) => {
  const [selectedValues, setSelectedValues] = useState(value);

  const handleCheckboxChange = (event) => {
    const { value: checkboxValue, checked } = event.target;

    if (checked) {
      setSelectedValues((prevSelectedValues) => [
        ...prevSelectedValues,
        checkboxValue,
      ]);
    } else {
      setSelectedValues((prevSelectedValues) =>
        prevSelectedValues.filter((val) => val !== checkboxValue)
      );
    }
  };

  return (

    
    <div>

      <label>
        <input type="checkbox" value="val1" checked={selectedValues.includes('val1')} onChange={handleCheckboxChange} disabled={readonly} /> Val1
      </label>

      <label>
        <input type="checkbox"value="val2"onChange={handleCheckboxChange} disabled={readonly}/>Val2
      </label>
    </div>
  );
};

export default Multiselect;

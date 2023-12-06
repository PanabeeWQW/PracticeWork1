import React from 'react';

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <div className='select_block'>
      <select className='select_category' value={value} onChange={event => onChange(event.target.value)}>
        <option disabled value="value1">{defaultValue}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
import React from 'react';

const renderField = ({input,placeholder,type,meta: { touched, error, warning }}) => (
  
      <div>
        <input {...input} placeholder={placeholder} type={type}  />
        {touched &&
        ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
      </div>
)
export default renderField;
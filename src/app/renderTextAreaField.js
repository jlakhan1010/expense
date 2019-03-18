import React from 'react';

const renderTextAreaField = ({input,rows,placeholder,meta: { touched, error, warning }}) => (
  
      <div>
        <textarea  {...input} rows={rows} >
        {console.log(placeholder)}
            {placeholder}
        </textarea>
        {touched &&
        ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
      </div>
)
export default renderTextAreaField;
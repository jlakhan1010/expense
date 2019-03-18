import React from 'react'
import { Field, reduxForm } from 'redux-form'


const Try = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div className="test">Hello</div>
  );
}

export default Try;
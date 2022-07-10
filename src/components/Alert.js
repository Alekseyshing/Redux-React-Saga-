import React from 'react';

export const Alert = ({ text }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {text}
    </div>
  )
}
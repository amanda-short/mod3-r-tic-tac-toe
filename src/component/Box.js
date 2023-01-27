import React from 'react';

export default function Box({ onClick, value }) {
  return (
    <button className="button" onClick={onClick}>
      {value}
    </button>
  );
}

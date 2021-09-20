import React from 'react';
import { Link } from 'react-router-dom';

export function InputText(props) {
  console.log(props);
  return (
    <div>
      <div className="form-control">
        <label className="form-label">{props.label}:</label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
        />
      </div>
    </div>
  );
}

export function InputPassword(props) {
  return (
    <div>
      <div className="form-control">
        <label className="form-label">{props.label}:</label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
        />
      </div>
    </div>
  );
}

export function CheckBoxes(props) {
  return (
    <div>
      <div className="form-control">
        <label className="form-label">{props.label}:</label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
        />
      </div>
    </div>
  );
}

export function SelectOne(props) {
  return (
    <div>
      <div className="form-control">
        <label className="form-label">{props.label}:</label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
        />
      </div>
    </div>
  );
}

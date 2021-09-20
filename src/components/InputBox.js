import React from 'react';
import { Link } from 'react-router-dom';
import {
  InputText,
  InputPassword,
  checkBoxes,
  selectOne,
} from './formcontrol/formcontrol';
export default function InputBox(props) {
  return (
    <div>
      {props.type === 'input' && props.subtype === 'text' ? (
        <div>
          <InputText
            type={props.type}
            subtype={props.subtype}
            label={props.label}
          />
        </div>
      ) : (
        <div>
          <InputPassword
            type={props.type}
            subtype={props.subtype}
            label={props.label}
          />
        </div>
      )}
    </div>
  );
}

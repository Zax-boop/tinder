import React from 'react';
import './Btn_ad.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn-ad--primary', 'btn-ad--outline', 'btn-ad--test'];

const SIZES = ['btn-ad--medium', 'btn-ad--large'];

export const Btn_ad = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  link
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={link} className='btn-ad-mobile'>
        <button
            className={`btn-ad ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    </Link>
  );
};
import React from 'react';

export default function MonthPicker(props) {
  const { month, year, switchMonth } = props;

  const navMon = (month + 1).toString();
  const navYear = year.toString();

  const getPrev = () => {
    switchMonth(-1);
  };

  const getNext = () => {
    switchMonth(1);
  };

  return (
    <div className="month-picker">
      <svg className="mon-switch pointer" onClick={getPrev} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18.193" y="24.4385" width="13.0009" height="3" rx="1.5" transform="rotate(-135 18.193 24.4385)" fill="#4C5760" />
        <rect x="20.3878" y="8.12132" width="13.0009" height="3" rx="1.5" transform="rotate(135 20.3878 8.12132)" fill="#4C5760" />
      </svg>

      <div className="date">{navYear} 年 {navMon} 月</div>
      <svg className="mon-switch pointer" onClick={getNext} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="13.0009" height="3" rx="1.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 11.1948 24.4385)" fill="#4C5760" />
        <rect width="13.0009" height="3" rx="1.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 9 8.12132)" fill="#4C5760" />
      </svg>

    </div>
  );
}

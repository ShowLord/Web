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
      <img className="mon-switch pointer" src={require('img/Prev.png')} alt="logo" onClick={getPrev} />
      <div className="date">{navYear} 年 {navMon} 月</div>
      <img className="mon-switch pointer" src={require('img/Next.png')} alt="logo" onClick={getNext} />
    </div>
  );
}

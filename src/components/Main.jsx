import React, { useState } from 'react';
import Calendar from './Calendar/Calendar';

export default function Main(props) {
  const { planWindow } = props;
  const [date, setDate] = useState(new Date());

  const month = date.getMonth();
  const year = date.getFullYear();

  const navMon = (date.getMonth() + 1).toString();
  const navYear = date.getFullYear().toString();

  const getPrev = () => {
    setDate(new Date(year, month - 1));
  };

  const getNext = () => {
    setDate(new Date(year, month + 1));
  };

  const addPlan = () => {
    planWindow(true);
  };

  return (

    <div className="main">
      <div className="navbar">
        <img className="notification pointer" src={require('img/notification.png')} alt="logo" />
        <img className="mon-switch pointer" src={require('img/Prev.png')} alt="logo" onClick={getPrev} />
        <div className="date">{navYear} 年 {navMon} 月</div>
        <img className="mon-switch pointer" src={require('img/Next.png')} alt="logo" onClick={getNext} />
        <button className="add-plan pointer" onClick={addPlan}> 新增計畫 ＋ </button>
      </div>
      <Calendar month={month} year={year} date={date} planWindow={planWindow} />
    </div>
  );
}

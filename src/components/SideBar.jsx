import React, { useState } from 'react';
import CalendarList from './CalenarList/CalendarList';

export default function SideBar(props) {
  const { calendarWindow, calendarList, getCheckedStatus } = props;

  const atAddCalendar = () => {
    calendarWindow(true);
  };

  return (
    <div className="side-bar">
      <img className="logo" src={require('img/Logo.png')} alt="logo" />
      <button className="add-calendar pointer" onClick={atAddCalendar}> 新增日曆 ＋ </button>
      <div className="calendar-list">
        {
        calendarList.map((ele, index) => (
          <CalendarList
            title={ele.title}
            color={ele.color}
            key={ele}
            isChecked={ele.isChecked}
            getCheckedStatus={getCheckedStatus}
            index={index}
          />
        ))
        }
      </div>
      <div className="user-card">
        <div className="user">
          <img className="avatar" src={require('img/avatar.png')} alt="avatar" />
          <div className="info">
            <span>Show Lo Lo</span>
            <span>iiiishowlo@gmail.com</span>
          </div>
        </div>
        <img className="setting pointer" src={require('img/user.png')} alt="logo" />
      </div>
    </div>
  );
}

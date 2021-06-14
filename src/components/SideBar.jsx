import React, { useState } from 'react';
import CalendarList from './CalenarList/CalendarList';

export default function SideBar(props) {
  const { formStatus, infoList } = props;

  const atAddCalendar = () => {
    formStatus(true);
  };

  console.log(infoList);

  return (
    <div className="side-bar">
      <img className="logo" src={require('img/Logo.png')} alt="logo" />
      <button className="add-calendar pointer" onClick={atAddCalendar}> 新增日曆 ＋ </button>
      <div className="calendar-list">
        {
        infoList.map((ele) => (
          <CalendarList
            title={ele.title}
            color={ele.color}
            key={ele}
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

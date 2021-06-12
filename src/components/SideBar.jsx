import React, { useState } from 'react';
import CalendarList from './CalendarList';

export default function SideBar(props) {
  const { formStatus, infoList } = props;

  const atAddCalendar = () => {
    formStatus(true);
  };

  console.log(infoList);

  return (
    <div className="sideBar">
      <img className="logo" src={require('img/Logo.png')} alt="logo" />
      <button onClick={atAddCalendar}> Add Calendar ＋ </button>
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
      <div className="user">
        <img src={require('img/avatar.png')} alt="logo" />
        <div>
          <span>Show Lo</span>
          <span>iiiishowlo@gmail.com</span>
        </div>
        <img src={require('img/user.png')} alt="logo" />
      </div>
    </div>
  );
}

import React, { useState, useCallback, useRef } from 'react';
import ColorPicker from '../FormComponents/ColorPicker';

export default function CalendarForm(props) {
  const { formStatus, getCalendarInfo } = props;
  const closeItem = (e) => {
    if (e.target === e.currentTarget) { formStatus(false); }
  };
  const titleRef = useRef();

  const calendarInfo = { };
  const pickColor = (e) => {
    const color = getComputedStyle(e.target).backgroundColor;
    calendarInfo.color = color;
    console.log(calendarInfo);
  };

  const atSubmit = () => {
    const title = titleRef.current.value;
    if (title !== '') {
      calendarInfo.title = title;
      console.log(calendarInfo);
    }

    if (calendarInfo.title && calendarInfo.color) {
      const infoArray = [];
      infoArray.push(calendarInfo);
      formStatus(false);
      console.log(infoArray);
      getCalendarInfo(infoArray);
    }
  };

  return (
    <div className="calendar-form">
      <div className="mask" onClick={closeItem}>
        <div className="calendar-window">
          <img className="close" src={require('img/close.png')} alt="close" onClick={closeItem} />
          <div className="form">
            <div className="section"> 新增日曆</div>
            <ColorPicker pickColor={pickColor} />
            <label htmlFor="calendar-title" className="title">標題
              <input type="input" name="title" id="calendar-title" ref={titleRef} />
            </label>
            <label htmlFor="collaborator" className="collaborator">新增協作者
              <input type="input" name="collaborator" id="collaborator" placeholder="輸入協作者姓名或信箱" />
            </label>
            <button className="submit" onClick={atSubmit}> 新增日曆 ＋ </button>
          </div>
        </div>
      </div>
    </div>
  );
}

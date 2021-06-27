import React, { useState, useCallback, useRef } from 'react';
import ColorPicker from '../FormComponents/ColorPicker';

export default function CalendarForm(props) {
  const { calendarWindow, getCalendarInfo } = props;
  const [color, setColor] = useState();

  const closeItem = (e) => {
    if (e.target === e.currentTarget) { calendarWindow(false); }
  };
  const titleRef = useRef();

  const pickColor = (e) => {
    setColor(getComputedStyle(e.target).backgroundColor);
  };

  const atSubmit = () => {
    const title = titleRef.current.value === '' ? '未命名的日曆' : titleRef.current.value;

    const calendarInfo = {
      title,
      color,
      isChecked: true,
      calendarId: `${Math.floor(Math.random() * 100)}`,
    };

    if (calendarInfo.title && calendarInfo.color) {
      calendarWindow(false);
      getCalendarInfo(calendarInfo);
    }
  };

  return (
    <div className="mask" onClick={closeItem}>
      <div className="calendar-window">
        <img className="close pointer" src={require('img/close.png')} alt="close" onClick={closeItem} />
        <div className="form">
          <div className="section"> 新增日曆</div>
          <ColorPicker pickColor={pickColor} />
          <label htmlFor="calendar-title" className="title">標題
            <input type="input" name="title" id="calendar-title" ref={titleRef} />
          </label>
          <label htmlFor="collaborator" className="collaborator">新增協作者
            <input type="input" name="collaborator" id="collaborator" placeholder="輸入協作者姓名或信箱" />
          </label>
          <button className="submit pointer" onClick={atSubmit}> 新增日曆 ＋ </button>
        </div>
      </div>
    </div>
  );
}

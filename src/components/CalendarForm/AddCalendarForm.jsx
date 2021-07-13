import React, { useState, useCallback, useRef } from 'react';
import '../../css/calendar-form.css';
import ColorPicker from '../FormComponents/ColorPicker';

export default function AddCalendarForm(props) {
  const { calendarWindow, getCalendarInfo } = props;
  const [color, setColor] = useState({ colorName: 'red', rgb: 'rgb(255, 138, 140)' });

  const closeItem = (e) => {
    if (e.target === e.currentTarget) { calendarWindow(false); }
  };
  const titleRef = useRef();

  const pickColor = (obj) => {
    setColor(obj);
  };

  const atSubmit = () => {
    const title = titleRef.current.value === '' ? '未命名的日曆' : titleRef.current.value;

    const calendarInfo = {
      title,
      color,
      isChecked: true,
      calendarId: `${Math.floor(Math.random() * 100)}`,
    };

    calendarWindow(false);
    getCalendarInfo(calendarInfo);
  };

  return (
    <div className="mask" onClick={closeItem}>
      <div className="calendar-window">
        <svg className="close pointer" onClick={() => calendarWindow(false)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.8434 21.8645C20.4405 22.4616 21.3993 22.4707 21.9851 21.8849C22.5709 21.2991 22.5618 20.3403 21.9647 19.7432L17.537 15.3155L22.3207 10.5319C22.8954 9.95716 22.8864 9.01637 22.3006 8.43058C21.7149 7.8448 20.7741 7.83584 20.1993 8.41057L15.4157 13.1942L10.6918 8.47029C10.0948 7.87324 9.13589 7.86411 8.55011 8.44989C7.96432 9.03568 7.97345 9.99456 8.57051 10.5916L13.2944 15.3155L8.8456 19.7643C8.27087 20.339 8.27983 21.2798 8.86561 21.8656C9.4514 22.4514 10.3922 22.4604 10.9669 21.8856L15.4157 17.4368L19.8434 21.8645Z" fill="#4C5760" fillOpacity="0.95" />
        </svg>
        <div className="calendar-form">
          <div className="section"> 新增日曆</div>
          <ColorPicker pickColor={pickColor} defaultColor={color} />
          <label htmlFor="calendar-title" className="title">日曆名稱
            <input type="input" name="title" id="calendar-title" ref={titleRef} />
          </label>
          <label htmlFor="collaborator" className="collaborator">新增協作者
            <input type="input" name="collaborator" id="collaborator" placeholder="輸入協作者姓名或信箱" />
          </label>
          <button className="submit pointer" onClick={atSubmit}> 新增日曆 </button>
        </div>
      </div>
    </div>
  );
}

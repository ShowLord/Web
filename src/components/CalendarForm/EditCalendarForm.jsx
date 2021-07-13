import React, { useState, useRef } from 'react';
import '../../css/calendar-form.css';
import ColorPicker from '../FormComponents/ColorPicker';

export default function EditCalendarForm(props) {
  const {
    editCalendarWindow, getEditCalendarInfo, editTarget, getDelCalendar,
  } = props;
  const [color, setColor] = useState(editTarget.color);

  const closeItem = (e) => {
    if (e.target === e.currentTarget) { editCalendarWindow(false); }
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
      isChecked: editTarget.isChecked,
      calendarId: editTarget.calendarId,
    };

    editCalendarWindow(false);
    getEditCalendarInfo(calendarInfo);
  };

  return (
    <div className="mask" onClick={closeItem}>
      <div className="calendar-window edit">
        <svg className="close pointer" onClick={() => editCalendarWindow(false)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.8434 21.8645C20.4405 22.4616 21.3993 22.4707 21.9851 21.8849C22.5709 21.2991 22.5618 20.3403 21.9647 19.7432L17.537 15.3155L22.3207 10.5319C22.8954 9.95716 22.8864 9.01637 22.3006 8.43058C21.7149 7.8448 20.7741 7.83584 20.1993 8.41057L15.4157 13.1942L10.6918 8.47029C10.0948 7.87324 9.13589 7.86411 8.55011 8.44989C7.96432 9.03568 7.97345 9.99456 8.57051 10.5916L13.2944 15.3155L8.8456 19.7643C8.27087 20.339 8.27983 21.2798 8.86561 21.8656C9.4514 22.4514 10.3922 22.4604 10.9669 21.8856L15.4157 17.4368L19.8434 21.8645Z" fill="#4C5760" fillOpacity="0.95" />
        </svg>
        <div className="calendar-form">
          <div className="section">
            <span> 編輯日曆</span>
            <svg className="del pointer" onClick={() => getDelCalendar(editTarget.calendarId)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.3104 5.46207C10.0991 5.46207 9.11725 6.44395 9.11725 7.65517L20.8138 7.65517C20.8138 6.44395 19.8319 5.46207 18.6207 5.46207H11.3104ZM11.3104 4C9.29165 4 7.65518 5.63648 7.65518 7.65517L4.9138 7.65517C4.40912 7.65517 4 8.06429 4 8.56897C4 9.07364 4.40912 9.48276 4.9138 9.48276H6.96069L8.2691 22.5668C8.41858 24.0616 9.67644 25.2 11.1787 25.2H18.7523C20.2546 25.2 21.5125 24.0617 21.6619 22.5668L22.9703 9.48276H25.0172C25.5219 9.48276 25.931 9.07364 25.931 8.56897C25.931 8.06429 25.5219 7.65517 25.0172 7.65517H22.2759C22.2759 5.63648 20.6394 4 18.6207 4H11.3104ZM12.0414 20.8138C11.6376 20.8138 11.3103 20.4802 11.3103 20.0687V12.7865C11.3103 12.375 11.6376 12.0414 12.0414 12.0414C12.4451 12.0414 12.7724 12.375 12.7724 12.7865V20.0687C12.7724 20.4802 12.4451 20.8138 12.0414 20.8138ZM14.9655 20.8138C14.5618 20.8138 14.2345 20.4802 14.2345 20.0687V12.7865C14.2345 12.375 14.5618 12.0414 14.9655 12.0414C15.3693 12.0414 15.6966 12.375 15.6966 12.7865V20.0687C15.6966 20.4802 15.3693 20.8138 14.9655 20.8138ZM17.1586 20.0687C17.1586 20.4802 17.4859 20.8138 17.8897 20.8138C18.2934 20.8138 18.6207 20.4802 18.6207 20.0687V12.7865C18.6207 12.375 18.2934 12.0414 17.8897 12.0414C17.4859 12.0414 17.1586 12.375 17.1586 12.7865V20.0687Z" fill="#4C5760" fillOpacity="0.95" />
            </svg>
          </div>
          <ColorPicker pickColor={pickColor} defaultColor={color} />
          <label htmlFor="calendar-title" className="title">日曆名稱
            <input type="input" name="title" id="calendar-title" ref={titleRef} defaultValue={editTarget.title} />
          </label>
          <label htmlFor="collaborator" className="collaborator">新增協作者
            <input type="input" name="collaborator" id="collaborator" placeholder="輸入協作者姓名或信箱" />
          </label>
          <button className="submit pointer" onClick={atSubmit}> 儲存日曆  </button>
        </div>
      </div>
    </div>
  );
}

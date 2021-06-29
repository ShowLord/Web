/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

export default function CalendarPicler(props) {
  const { calendarList } = props;
  const [calendarPicker, setCalendarPicker] = useState(false);
  const [pickedCalendar, setPickedCalendar] = useState(calendarList.filter((obj) => obj.isChecked === true));

  const calendarPickerBox = (status) => {
    if (status && calendarList.length >= 1) {
      setCalendarPicker(true);
    } else {
      setCalendarPicker(false);
    }
  };

  const choseCalendar = (e) => {
    if (!pickedCalendar.some((obj) => obj.calendarId === e.currentTarget.id)) {
      setPickedCalendar(pickedCalendar.concat(calendarList.find((obj) => obj.calendarId === e.currentTarget.id)));
    }
    calendarPickerBox(false);
  };

  const removeCalendar = (e) => {
    setPickedCalendar(pickedCalendar.filter((obj) => obj.calendarId !== e.currentTarget.id));
  };

  return (
    <div>
      <div className="plan-addTo form-item">新增計畫至以下日曆
        <div className="addTo-box">
          {
            pickedCalendar.map((obj) => (
              <div className="picked-calendar pointer" onClick={removeCalendar} id={obj.calendarId}>
                <div className="dot" style={{ backgroundColor: obj.color }} />
                {obj.title}
                <svg className="del" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.8434 21.8645C20.4405 22.4616 21.3993 22.4707 21.9851 21.8849C22.5709 21.2991 22.5618 20.3403 21.9647 19.7432L17.537 15.3155L22.3207 10.5319C22.8954 9.95716 22.8864 9.01637 22.3006 8.43058C21.7149 7.8448 20.7741 7.83584 20.1993 8.41057L15.4157 13.1942L10.6918 8.47029C10.0948 7.87324 9.13589 7.86411 8.55011 8.44989C7.96432 9.03568 7.97345 9.99456 8.57051 10.5916L13.2944 15.3155L8.8456 19.7643C8.27087 20.339 8.27983 21.2798 8.86561 21.8656C9.4514 22.4514 10.3922 22.4604 10.9669 21.8856L15.4157 17.4368L19.8434 21.8645Z" fill="#FFFFFF" fillOpacity="0.95" />
                </svg>
              </div>
            ))
          }
          <svg className="unfold pointer" onClick={calendarPickerBox} viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="13.6996" height="3.27066" rx="1.63533" transform="matrix(0.707107 0.707107 0.707107 -0.707107 1 3.3125)" fill="#4C5760" fillOpacity="0.95" />
            <rect x="-0.353553" width="14.1996" height="3.77066" rx="1.88533" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.896447 3.5625)" stroke="#4C5760" strokeOpacity="0.95" strokeWidth="0.5" />
            <rect width="13.6996" height="3.27066" rx="1.63533" transform="matrix(-0.707107 0.707107 0.707107 0.707107 18.1943 1.00049)" fill="#4C5760" fillOpacity="0.95" />
            <rect y="-0.353553" width="14.1996" height="3.77066" rx="1.88533" transform="matrix(-0.707107 0.707107 0.707107 0.707107 18.4443 0.896935)" stroke="#4C5760" strokeOpacity="0.95" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      {calendarPicker && (
      <div className="caldendar-picker">
        {
            calendarList.map((obj) => (
              <div className="chose-calendar pointer" onClick={choseCalendar} id={obj.calendarId}>
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="6.58888" cy="6.15805" rx="5.59816" ry="5.57895" fill={obj.color} />
                </svg>
                {obj.title}
              </div>
            ))
          }
      </div>
      )}
    </div>
  );
}

/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

export default function CalendarPicler(props) {
  const { calendarList } = props;
  const [calendarPicker, setCalendarPicker] = useState(false);
  console.log(calendarList);

  const calendarPickerBox = (status) => {
    if (status && calendarList.length >= 1) {
      setCalendarPicker(true);
    } else {
      setCalendarPicker(false);
    }
  };

  const choseCalendar = () => {
    calendarPickerBox(false);
  };

  return (
    <div>
      <div className="plan-addTo">新增計畫至以下日曆
        <div>
          <svg width="8%" className="pointer" onClick={calendarPickerBox} viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="chose-calendar pointer" onClick={choseCalendar}>
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

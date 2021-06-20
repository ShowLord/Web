import React from 'react';

export default function CalendarPicler(props) {
  const { title, color, calendarPickerBox } = props;

  const choseCalendar = () => {
    calendarPickerBox(false);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="chose-calendar pointer"
      key={Math.random()}
      onClick={choseCalendar}
    >
      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="6.58888" cy="6.15805" rx="5.59816" ry="5.57895" fill={color} />
      </svg>
      {title}
    </div>
  );
}

import React, { useState, useEffect } from 'react';

export default function CalendarList(props) {
  const { title, color } = props;
  console.log(props);
  console.log(color);
  return (
    <div className="calendar-card">
      <div className="content">
        <span className="title">{title}</span>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.6522 4.43601L21.5645 7.34688L18.6522 4.43601ZM20.525 1.87163L12.6504 9.74626C12.2435 10.1526 11.966 10.6702 11.8529 11.234L11.1255 14.875L14.7665 14.1463C15.3302 14.0335 15.8472 13.7571 16.2542 13.3501L24.1289 5.47551C24.3655 5.23887 24.5532 4.95795 24.6813 4.64877C24.8093 4.33959 24.8752 4.00822 24.8752 3.67357C24.8752 3.33892 24.8093 3.00754 24.6813 2.69837C24.5532 2.38919 24.3655 2.10826 24.1289 1.87163C23.8922 1.635 23.6113 1.44729 23.3021 1.31922C22.993 1.19116 22.6616 1.12524 22.3269 1.12524C21.9923 1.12524 21.6609 1.19116 21.3517 1.31922C21.0425 1.44729 20.7616 1.635 20.525 1.87163V1.87163Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22.1255 17.625V21.75C22.1255 22.4793 21.8358 23.1788 21.32 23.6945C20.8043 24.2103 20.1048 24.5 19.3755 24.5H4.25049C3.52114 24.5 2.82167 24.2103 2.30594 23.6945C1.79022 23.1788 1.50049 22.4793 1.50049 21.75V6.625C1.50049 5.89565 1.79022 5.19618 2.30594 4.68046C2.82167 4.16473 3.52114 3.875 4.25049 3.875H8.37549" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

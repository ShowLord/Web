import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import SideBar from './SideBar';
import CalendarForm from './CalendarForm/CalendarForm';

function App() {
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);

  const formStatus = (status) => {
    if (status) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const getCalendarInfo = (ele) => {
    setList(list.concat(ele));
  };

  console.log(list);

  return (
    <div className="app container">
      <SideBar formStatus={formStatus} infoList={list} />
      <Calendar />
      {show && <CalendarForm formStatus={formStatus} getCalendarInfo={getCalendarInfo} />}
    </div>
  );
}

export default App;

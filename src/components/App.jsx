import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import SideBar from './SideBar';
import CalendarForm from './CalendarForm/CalendarForm';
import PlanForm from './PlanForm/PlanForm';

function App() {
  const [addCalendar, setAddCalendar] = useState(false);
  const [addPlan, setAddPlan] = useState(false);
  const [list, setList] = useState([]);

  const formStatus = (status) => {
    if (status) {
      setAddCalendar(true);
    } else {
      setAddCalendar(false);
    }
  };

  const planStatus = (status) => {
    if (status) {
      setAddPlan(true);
    } else {
      setAddPlan(false);
    }
  };

  const getCalendarInfo = (ele) => {
    setList(list.concat(ele));
  };

  console.log(list);

  return (
    <div className="app container">
      <SideBar formStatus={formStatus} infoList={list} />
      <Calendar planStatus={planStatus} />
      {addCalendar && <CalendarForm formStatus={formStatus} getCalendarInfo={getCalendarInfo} />}
      {addPlan && <PlanForm planStatus={planStatus} />}
    </div>
  );
}

export default App;

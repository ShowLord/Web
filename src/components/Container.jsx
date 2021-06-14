import React, { useState, useEffect } from 'react';
import Main from './Main';
import SideBar from './SideBar';
import CalendarForm from './CalendarForm/CalendarForm';
import PlanForm from './PlanForm/PlanForm';

export default function Container() {
  const [addCalendar, setAddCalendar] = useState(false);
  const [addPlan, setAddPlan] = useState(false);
  const [calendarList, setCalendarList] = useState([]);
  const [planList, setPlanList] = useState([]);
  const [planDate, setPlanDate] = useState();

  const calendarWindow = (status) => {
    if (status) {
      setAddCalendar(true);
    } else {
      setAddCalendar(false);
    }
  };

  const planWindow = (status) => {
    if (status) {
      setAddPlan(true);
    } else {
      setAddPlan(false);
    }
  };

  const getCalendarInfo = (ele) => {
    setCalendarList(calendarList.concat(ele));
  };

  const getPlanInfo = (ele) => {
    setPlanList(planList.concat(ele));
  };

  const getPlanDate = (time) => {
    setPlanDate(time);
  };

  console.log(calendarList);
  console.log(planDate);

  return (
    <div className="container">
      <SideBar calendarWindow={calendarWindow} infoList={calendarList} />
      <Main planWindow={planWindow} planData={planList} getPlanDate={getPlanDate} />
      {addCalendar && <CalendarForm calendarWindow={calendarWindow} getCalendarInfo={getCalendarInfo} />}
      {addPlan && <PlanForm planWindow={planWindow} getPlanInfo={getPlanInfo} planDate={planDate} />}
    </div>
  );
}

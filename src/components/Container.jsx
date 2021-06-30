import React, { useState, useEffect } from 'react';
import Main from './Main';
import SideBar from './SideBar';
import CalendarForm from './CalendarForm/CalendarForm';
import PlanForm from './PlanForm/PlanForm';
import ViewPlan from './ViewPlan/ViewPlan';

export default function Container() {
  const [addCalendar, setAddCalendar] = useState(false);
  const [addPlan, setAddPlan] = useState(false);
  const [calendarList, setCalendarList] = useState([]);
  const [planList, setPlanList] = useState([]);
  const [planDate, setPlanDate] = useState();
  const [plan, setPlan] = useState({});
  const [viewPlan, setViewPlan] = useState();

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

  const getCheckedStatus = (e, status) => {
    calendarList[e].isChecked = status;
  };

  console.log(calendarList);
  console.log(planList);

  const getPlanInfo = (ele) => {
    setPlanList(planList.concat(ele));
  };

  const getPlanDate = (time) => {
    setPlanDate(time);
  };

  const getPlan = (obj) => {
    setPlan(obj);
    setViewPlan(true);
  };

  const viewPlanStatus = (status) => {
    if (status) {
      setViewPlan(true);
    } else {
      setViewPlan(false);
    }
  };

  return (
    <div className="container">
      <SideBar calendarWindow={calendarWindow} calendarList={calendarList} getCheckedStatus={getCheckedStatus} />
      <Main planWindow={planWindow} planList={planList} getPlanDate={getPlanDate} getPlan={getPlan} />
      {addCalendar && <CalendarForm calendarWindow={calendarWindow} getCalendarInfo={getCalendarInfo} />}
      {addPlan && <PlanForm planWindow={planWindow} getPlanInfo={getPlanInfo} planDate={planDate} calendarList={calendarList} />}
      {viewPlan && <ViewPlan plan={plan} viewPlanStatus={viewPlanStatus} />}
    </div>
  );
}

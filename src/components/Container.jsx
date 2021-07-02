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
  const [checkedList, setCheckedList] = useState([]);
  const [allPlanList, setAllPlanList] = useState([]);
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
  console.log(allPlanList);

  const getPlanInfo = (ele) => {
    setAllPlanList(allPlanList.concat(ele));
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

  useEffect(() => {
    const pickedCalendar = calendarList.filter((ele) => (ele.isChecked === true));
    const showPlan = [];
    for (let i = 0; i < pickedCalendar.length; i += 1) {
      showPlan.push(allPlanList.filter((ele) => (ele.addTo === (pickedCalendar[i].calendarId))));
    }
    setCheckedList(pickedCalendar);
    setPlanList(showPlan.flat());
  }, [allPlanList, checkedList]);

  console.log(planList);

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

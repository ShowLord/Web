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
  const [checkedList, setCheckedList] = useState(calendarList.filter((ele) => (ele.isChecked === true)));
  const [allPlanList, setAllPlanList] = useState([]);
  const [planList, setPlanList] = useState([]);
  const [planDate, setPlanDate] = useState();
  const [plan, setPlan] = useState({});
  const [viewPlan, setViewPlan] = useState();
  const [isPreviewing, setIsPreviewing] = useState({ imgSrc: null, status: false });

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
      setIsPreviewing({ imgSrc: null, status: false });
    }
  };

  const getCalendarInfo = (ele) => {
    setCalendarList(calendarList.concat(ele));
    setCheckedList(checkedList.concat(ele));
  };

  const getCheckedStatus = (e, status) => {
    calendarList[e].isChecked = status;
    setCheckedList(calendarList.filter((ele) => (ele.isChecked === true)));
  };

  // console.log(calendarList);
  // console.log(allPlanList);

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

  const todoChecked = (id, status) => {
    allPlanList.forEach((ele) => {
      if (ele.todoList.find((e) => (e.id === id))) {
        const target = ele.todoList.find((e) => (e.id === id));
        target.isChecked = status;
        console.log(target);
      }
    });
    setAllPlanList(allPlanList);
  };

  const getImgPreview = (src, status) => {
    setIsPreviewing({ imgSrc: src, status });
  };

  const getComments = (value) => {
    if (plan.comments !== []) {
      plan.comments = plan.comments.concat(value);
    } else {
      plan.comments = value;
    }
    console.log('!!!!!');
  };

  console.log(plan);

  useEffect(() => {
    const showPlan = [];
    for (let i = 0; i < checkedList.length; i += 1) {
      showPlan.push(allPlanList.filter((ele) => (ele.addTo === (checkedList[i].calendarId))));
    }
    setPlanList(showPlan.flat());
  }, [checkedList, allPlanList]);

  return (
    <div className="container">
      <SideBar calendarWindow={calendarWindow} calendarList={calendarList} getCheckedStatus={getCheckedStatus} allPlanList={allPlanList} />
      <Main planWindow={planWindow} planList={planList} getPlanDate={getPlanDate} getPlan={getPlan} />
      {addCalendar && <CalendarForm calendarWindow={calendarWindow} getCalendarInfo={getCalendarInfo} />}
      {addPlan && <PlanForm planWindow={planWindow} getPlanInfo={getPlanInfo} planDate={planDate} calendarList={calendarList} getImgPreview={getImgPreview} />}
      {viewPlan && <ViewPlan plan={plan} viewPlanStatus={viewPlanStatus} todoChecked={todoChecked} getImgPreview={getImgPreview} getComments={getComments} />}
      {(isPreviewing.status && (addPlan || viewPlan)) && (
        <div className="img-mask" onClick={(e) => (setIsPreviewing({ imgSrc: null, status: false }))}>
          <img
            className="img-preview"
            src={isPreviewing.imgSrc}
            alt="img"
          />
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Main from './Main';
import SideBar from './SideBar';
import CalendarForm from './CalendarForm/CalendarForm';
import AddPlanForm from './PlanForm/PlanForm/AddPlanForm';
import EditPlanForm from './PlanForm/PlanForm/EditPlanForm';
import ViewPlan from './ViewPlan/ViewPlan';

export default function Container() {
  const [addCalendar, setAddCalendar] = useState(false);
  const [addPlan, setAddPlan] = useState(false);
  const [calendarList, setCalendarList] = useState([{
    title: 'Show Lo 的日曆', color: { colorName: 'red', rgb: 'rgb(255, 138, 140)' }, isChecked: true, calendarId: '01',
  }]);
  const [checkedList, setCheckedList] = useState(calendarList.filter((ele) => (ele.isChecked === true)));
  const [allPlanList, setAllPlanList] = useState([]);
  const [planList, setPlanList] = useState([]);
  const [planDate, setPlanDate] = useState();
  const [plan, setPlan] = useState({});
  const [viewPlan, setViewPlan] = useState();
  const [isPreviewing, setIsPreviewing] = useState({ imgSrc: null, status: false });
  const [editPlan, setEditPlan] = useState(false);

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
      setEditPlan(false);
      setIsPreviewing({ imgSrc: null, status: false });
    }
  };

  const getEditPlan = (status) => {
    setEditPlan(status);
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
  console.log(allPlanList);
  console.log(plan);

  const getPlanInfo = (ele) => {
    setAllPlanList(allPlanList.concat(ele));
  };

  const getEditPlanInfo = (ele) => {
    const idx = allPlanList.findIndex((obj) => obj.planId === ele.planId);
    allPlanList[idx] = ele;
    setPlan(ele);
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
    plan.comments = plan.comments.concat(value);
  };

  console.log('render');

  useEffect(() => {
    const showPlan = [];
    for (let i = 0; i < checkedList.length; i += 1) {
      showPlan.push(allPlanList.filter((ele) => (ele.addTo === (checkedList[i].calendarId))));
    }
    setPlanList(showPlan.flat());
  }, [checkedList, allPlanList, plan]);

  return (
    <div className="container">
      <SideBar calendarWindow={calendarWindow} calendarList={calendarList} getCheckedStatus={getCheckedStatus} allPlanList={allPlanList} />
      <Main planWindow={planWindow} planList={planList} getPlanDate={getPlanDate} getPlan={getPlan} />
      {addCalendar && <CalendarForm calendarWindow={calendarWindow} getCalendarInfo={getCalendarInfo} />}
      {addPlan && <AddPlanForm planWindow={planWindow} getPlanInfo={getPlanInfo} planDate={planDate} calendarList={calendarList} getImgPreview={getImgPreview} checkedList={checkedList} />}
      {viewPlan && <ViewPlan plan={plan} viewPlanStatus={viewPlanStatus} todoChecked={todoChecked} getImgPreview={getImgPreview} getComments={getComments} editPlan={getEditPlan} />}
      {editPlan && <EditPlanForm planWindow={planWindow} getEditPlanInfo={getEditPlanInfo} getImgPreview={getImgPreview} plan={plan} />}
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

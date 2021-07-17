import React, { useState, useEffect } from 'react';
import Main from './Main';
import SideBar from './SideBar';
import AddCalendarForm from './CalendarForm/AddCalendarForm';
import EditCalendarForm from './CalendarForm/EditCalendarForm';
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
  const [editCalendar, setEditCalendar] = useState(false);
  const [editTarget, setEditTarget] = useState();
  const [calendarSort, setCalendarSort] = useState(calendarList.map((ele) => (ele.calendarId)));

  console.log(calendarSort);
  const calendarWindow = (status) => {
    setAddCalendar(status);
    // setEditCalendar(status);
  };

  const editCalendarWindow = (status) => {
    setEditCalendar(status);
  };

  const getEditCalendar = (id, status) => {
    setEditCalendar(status);
    setEditTarget(calendarList.find((ele) => ele.calendarId === id));
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

  console.log(calendarList);
  // console.log(allPlanList);
  // console.log(plan);

  const getPlanInfo = (ele) => {
    setAllPlanList(allPlanList.concat(ele));
  };

  const getEditPlanInfo = (ele) => {
    const idx = allPlanList.findIndex((obj) => obj.planId === ele.planId);
    allPlanList[idx] = ele;
    setPlan(ele);
  };

  const getEditCalendarInfo = (ele) => {
    const idx = calendarList.findIndex((obj) => obj.calendarId === ele.calendarId);
    calendarList[idx] = ele;
    setEditCalendar(false);
  };

  const getPlanDate = (time) => {
    setPlanDate(time);
  };

  const getPlan = (obj) => {
    setPlan(obj);
    setViewPlan(true);
  };

  const getDelCalendar = (id) => {
    setCalendarList(calendarList.filter((ele) => ele.calendarId !== id));
    setEditCalendar(false);
  };

  const getDelPlan = (id) => {
    setAllPlanList(allPlanList.filter((ele) => ele.planId !== id));
    setViewPlan(false);
    setEditPlan(false);
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

  const getCalendarSort = (dragIdx, dropIdx) => {
    const target = calendarSort.splice(dragIdx, 1);
    calendarSort.splice(dropIdx, 0, target);
    setCalendarSort(calendarSort.flat());
  };
  calendarList.sort((a, b) => calendarSort.indexOf(a.calendarId) - calendarSort.indexOf(b.calendarId));

  useEffect(() => {
    const showPlan = [];
    for (let i = 0; i < checkedList.length; i += 1) {
      showPlan.push(allPlanList.filter((ele) => (ele.addTo === (checkedList[i].calendarId))));
    }
    setPlanList(showPlan.flat());
  }, [checkedList, allPlanList, plan]);

  useEffect(() => {
    setCalendarSort(calendarList.map((ele) => (ele.calendarId)));
  }, [calendarList]);

  return (
    <div className="container">
      <SideBar calendarWindow={calendarWindow} calendarList={calendarList} getCheckedStatus={getCheckedStatus} allPlanList={allPlanList} getEditCalendar={getEditCalendar} getCalendarSort={getCalendarSort} />
      <Main planWindow={planWindow} planList={planList} getPlanDate={getPlanDate} getPlan={getPlan} />
      {addCalendar && <AddCalendarForm calendarWindow={calendarWindow} getCalendarInfo={getCalendarInfo} />}
      {editCalendar && <EditCalendarForm editCalendarWindow={editCalendarWindow} getEditCalendarInfo={getEditCalendarInfo} editTarget={editTarget} getDelCalendar={getDelCalendar} />}
      {addPlan && <AddPlanForm planWindow={planWindow} getPlanInfo={getPlanInfo} planDate={planDate} calendarList={calendarList} getImgPreview={getImgPreview} checkedList={checkedList} />}
      {viewPlan && <ViewPlan plan={plan} viewPlanStatus={viewPlanStatus} todoChecked={todoChecked} getImgPreview={getImgPreview} getComments={getComments} editPlan={getEditPlan} />}
      {editPlan && <EditPlanForm planWindow={planWindow} getEditPlanInfo={getEditPlanInfo} getImgPreview={getImgPreview} plan={plan} getDelPlan={getDelPlan} />}
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

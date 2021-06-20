import React, { useState, useEffect, useRef } from 'react';
import ColorPicker from '../FormComponents/ColorPicker';
import UploadImg from './UploadImg';
import DatePicker from './DatePicker';
import CalendarPicker from './CalendarPicker';

export default function Plan(props) {
  const {
    planWindow, getPlanInfo, planDate, calendarList,
  } = props;

  const [datePicker, setDatePicker] = useState(false);
  const [dateValue, setDateValue] = useState(planDate);
  const [calendarPicker, setCalendarPicker] = useState(false);
  const titleRef = useRef();
  const timeRef = useRef();

  const closeItem = (e) => {
    if (e.target === e.currentTarget) { planWindow(false); }
  };

  const planInfo = { };
  const pickColor = (e) => {
    const color = getComputedStyle(e.target).backgroundColor;
    planInfo.color = color;
    console.log(planInfo);
  };

  const atSubmit = () => {
    const title = titleRef.current.value;
    const time = timeRef.current.value;
    if (title !== '' && time !== '') {
      planInfo.title = title;
      planInfo.time = time;
      console.log(planInfo);
    }

    if (planInfo.title && planInfo.color && planInfo.time) {
      const infoArray = [];
      infoArray.push(planInfo);
      planWindow(false);
      console.log(infoArray);
      getPlanInfo(infoArray);
    }
  };

  const datePickerBox = (status) => {
    if (status) {
      setDatePicker(true);
    } else {
      setDatePicker(false);
    }
  };

  const getDateValue = (value) => {
    setDateValue(value);
  };

  const datePickerRef = useRef();

  const closePicker = (e) => {
    if (datePicker === true && !datePickerRef.current.contains(e.target)) {
      setDatePicker(false);
    }
    if (calendarPicker === true) {
      setCalendarPicker(false);
    }
  };

  const calendarPickerBox = (status) => {
    if (status) {
      setCalendarPicker(true);
    } else {
      setCalendarPicker(false);
    }
  };

  return (
    <div className="plan">
      <div className="mask" onClick={closeItem}>
        <div className="plan-window" onClick={closePicker}>
          <img className="close pointer" src={require('img/close.png')} alt="close" onClick={closeItem} />
          <div className="form">
            <div className="section"> 新增計畫</div>
            <ColorPicker pickColor={pickColor} />
            <div className="scroll-content">
              <label htmlFor="plan-title">標題
                <input type="text" name="title" id="plan-title" ref={titleRef} />
              </label>
              <label htmlFor="plan-time">時間
                <input className="pointer dateButton" type="button" name="title" ref={timeRef} defaultValue={dateValue} onClick={datePickerBox} />
              </label>
              {datePicker
              && (
              <div className="date-picker" ref={datePickerRef}>
                <DatePicker getDateValue={getDateValue} datePickerBox={datePickerBox} dateValue={dateValue} />
              </div>
              )}
              <label htmlFor="plan-detail">描述
                <textarea name="detail" id="plan-detail" rows="2" />
              </label>
              <label htmlFor="plan-addTo">新增計畫至以下日曆
                <input className="pointer " type="button" name="title" id="plan-addTo" onClick={calendarPickerBox} />
              </label>
              {calendarPicker && (
              <div className="caldendar-picker">
                {calendarList.map((obj) => (
                  <CalendarPicker
                    key={Math.random()}
                    title={obj.title}
                    color={obj.color}
                    calendarPickerBox={calendarPickerBox}
                  />
                ))}
              </div>
              )}

              <label htmlFor="plan-todo-list">待辦清單
                <input type="input" name="title" id="plan-todo-list" />
              </label>
              <UploadImg />
            </div>
            <button className="submit pointer" onClick={atSubmit}> 新增計畫 ＋ </button>
          </div>

        </div>
      </div>
    </div>
  );
}

/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import ColorPicker from '../FormComponents/ColorPicker';
import UploadImg from './UploadImg/UploadImg';
import DatePicker from './DatePicker/DatePicker';
import TimePicker from './DatePicker/TimePicker';
import CalendarPicker from './CalendarPicker/CalendarPicker';
import { timeNow } from '../Calendar/DateString';
import TodoList from './TodoList/TodoList';

export default function Plan(props) {
  const {
    planWindow, getPlanInfo, planDate, calendarList,
  } = props;

  const [datePicker, setDatePicker] = useState(false);
  const [timePicker, setTimePicker] = useState(false);
  const [dateValue, setDateValue] = useState(planDate);
  const [timeValue, setTimeValue] = useState('');
  const [img, setImg] = useState([]);
  const [color, setColor] = useState();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateDefault = `${dateValue} ${timeValue}`;

  const timeSwitch = () => {
    if (timeValue === '') {
      setTimeValue(timeNow);
      setTimePicker(true);
    } else {
      setTimeValue('');
      setTimePicker(false);
    }
  };

  const getTime = (value) => {
    setTimeValue(value);
  };

  const closeItem = (e) => {
    if (e.target === e.currentTarget) { planWindow(false); }
  };

  const closeIcon = () => {
    planWindow(false);
  };

  const pickColor = (e) => {
    setColor(getComputedStyle(e.target).backgroundColor);
  };

  const getImgList = (list) => {
    setImg(list);
  };

  const atSubmit = () => {
    const title = titleRef.current.value === '' ? '未命名的標題' : titleRef.current.value;

    const planInfo = {
      title,
      date: dateValue,
      description: descriptionRef.current.value,
      imgList: img,
      color,
    };

    if (planInfo.color) {
      planWindow(false);
      getPlanInfo(planInfo);
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
  const timePickerRef = useRef();

  const closePicker = (e) => {
    if (datePicker === true && !datePickerRef.current.contains(e.target) && !timePickerRef.current.contains(e.target)) {
      setDatePicker(false);
    }
  };

  return (
    <div className="mask" onClick={closeItem}>
      <div className="plan-window" onClick={closePicker}>
        <svg className="close pointer" onClick={closeIcon} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.8434 21.8645C20.4405 22.4616 21.3993 22.4707 21.9851 21.8849C22.5709 21.2991 22.5618 20.3403 21.9647 19.7432L17.537 15.3155L22.3207 10.5319C22.8954 9.95716 22.8864 9.01637 22.3006 8.43058C21.7149 7.8448 20.7741 7.83584 20.1993 8.41057L15.4157 13.1942L10.6918 8.47029C10.0948 7.87324 9.13589 7.86411 8.55011 8.44989C7.96432 9.03568 7.97345 9.99456 8.57051 10.5916L13.2944 15.3155L8.8456 19.7643C8.27087 20.339 8.27983 21.2798 8.86561 21.8656C9.4514 22.4514 10.3922 22.4604 10.9669 21.8856L15.4157 17.4368L19.8434 21.8645Z" fill="#4C5760" fillOpacity="0.95" />
        </svg>
        <div className="form">
          <div className="section"> 新增計畫</div>
          <ColorPicker pickColor={pickColor} />
          <div className="scroll-content">
            <label htmlFor="plan-title">標題
              <input type="text" name="title" id="plan-title" ref={titleRef} />
            </label>
            <label htmlFor="plan-time">時間
              <input className="pointer dateButton" type="button" name="title" defaultValue={dateDefault} onClick={datePickerBox} />
              <svg className="time-switch pointer" onClick={timeSwitch} ref={timePickerRef} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15 25.5C20.799 25.5 25.5 20.799 25.5 15C25.5 9.20101 20.799 4.5 15 4.5C9.20101 4.5 4.5 9.20101 4.5 15C4.5 20.799 9.20101 25.5 15 25.5ZM23 15C23 19.4183 19.4183 23 15 23C10.5817 23 7 19.4183 7 15C7 10.5817 10.5817 7 15 7C19.4183 7 23 10.5817 23 15ZM16 11C16 10.4477 15.5523 10 15 10C14.4477 10 14 10.4477 14 11V15C14 15.5523 14.4477 16 15 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14H16V11Z" fill="#4C5760" fillOpacity="0.95" />
              </svg>
            </label>
            {datePicker
              && (
              <div className="date-picker" ref={datePickerRef}>
                <DatePicker getDateValue={getDateValue} datePickerBox={datePickerBox} dateValue={dateValue} timePicker={timePicker} />
                {timePicker && <TimePicker timeValue={timeValue} getTime={getTime} />}
              </div>
              )}
            <label htmlFor="plan-detail">描述
              <textarea name="detail" id="plan-detail" rows="2" ref={descriptionRef} />
            </label>
            <CalendarPicker calendarList={calendarList} />
            <TodoList />
            <UploadImg getImgList={getImgList} />
          </div>
          <button className="submit pointer" onClick={atSubmit}> 新增計畫 ＋ </button>
        </div>

      </div>
    </div>
  );
}

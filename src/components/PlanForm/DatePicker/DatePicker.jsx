/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import MonthPicker from '../../Calendar/MonthPicker';
import useDate from '../../Calendar/UseDate';

export default function DatePicker(props) {
  const {
    datePickerBox, getDateValue, dateValue, timePicker,
  } = props;
  const {
    daysInTable, switchMonth, firstWeekDay, daysCount, month, year,
  } = useDate();

  const choseDate = (e) => {
    if (!timePicker) {
      datePickerBox(false);
    }
    getDateValue(e.target.id);
  };

  return (
    <div className="calendar-box">
      <MonthPicker switchMonth={switchMonth} month={month} year={year} />
      <div className="weekdays">
        <div>日</div>
        <div>一</div>
        <div>二</div>
        <div>三</div>
        <div>四</div>
        <div>五</div>
        <div>六</div>
      </div>
      <div className="table">
        {
          daysInTable.map((obj, index) => (
            <div
              className={classnames('day pointer', { paddingDay: index < firstWeekDay || index >= firstWeekDay + daysCount }, { planDate: obj.id === dateValue })}
              key={obj.id}
              id={obj.id}
              index={index}
              day={obj.day}
              onClick={choseDate}
            >{obj.day}
            </div>
          ))
        }
      </div>

    </div>
  );
}

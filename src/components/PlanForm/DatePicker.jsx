import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import MonthPicker from '../Calendar/MonthPicker';
import useDate from '../Calendar/UseDate';

export default function DatePIcker(props) {
  const { datePickerBox, getDateValue } = props;
  const {
    daysInTable, switchMonth, firstWeekDay, daysCount, month, year,
  } = useDate();

  const choseDate = (e) => {
    datePickerBox(false);
    getDateValue(e.target.id);
    console.log(e.target.id);
  };

  return (
    <div className="date-picker">
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
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
              className={classnames('day pointer', { paddingDay: index < firstWeekDay || index >= firstWeekDay + daysCount })}
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

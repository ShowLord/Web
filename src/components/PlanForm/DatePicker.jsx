import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import MonthPicker from '../Calendar/MonthPicker';
import useDate from '../Calendar/UseDate';

export default function DatePIcker() {
  const {
    daysInTable, switchMonth, firstWeekDay, daysCount, month, year,
  } = useDate();

  console.log(daysInTable);

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
                <div
                  className={classnames('day pointer', { paddingDay: index < firstWeekDay || index >= firstWeekDay + daysCount })}
                  key={obj.id}
                //   dayId={obj.id}
                  index={index}
                  day={obj.day}
                >{obj.day}
                </div>
              ))
            }
      </div>

    </div>
  );
}

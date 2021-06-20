import React, { useState, useEffect } from 'react';
import DaysTable from './DaysTable';
import MonthPicker from './MonthPicker';
import useDate from './UseDate';

export default function Calendar(props) {
  const {
    planWindow, planList, getPlanDate, getPlan,
  } = props;

  const {
    daysInTable, switchMonth, firstWeekDay, daysCount, month, year,
  } = useDate();

  return (
    <div className="calendar">
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
              <DaysTable
                key={obj.id}
                dayId={obj.id}
                index={index}
                day={obj.day}
                paddingCountPrev={firstWeekDay}
                paddingCountNext={firstWeekDay + daysCount}
                planWindow={planWindow}
                planList={planList}
                getPlanDate={getPlanDate}
                getPlan={getPlan}
              />
            ))
          }
      </div>

    </div>
  );
}

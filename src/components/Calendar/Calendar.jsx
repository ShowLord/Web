import React, { useState, useEffect } from 'react';
import DaysTable from './DaysTable';

export default function Calendar(props) {
  const {
    month, year, date, planWindow,
  } = props;
  const [daysInTable, setDaysInTable] = useState([]);

  const currentYear = new Date().getFullYear();
  const currentMon = new Date().getMonth();
  const currentDate = new Date().getDate();
  const currentDayId = Date.parse(new Date(currentYear, currentMon, currentDate));

  const daysCount = new Date(year, month + 1, 0).getDate(); // 30
  const daysCountPreMon = new Date(year, month, 0).getDate(); // 31
  const firstWeekDay = new Date(year, month, 1).getDay(); // 2

  useEffect(() => {
    const array = [];
    for (let i = daysCountPreMon - firstWeekDay + 1; i <= daysCountPreMon; i += 1) {
      const dayId = Date.parse(new Date(year, month - 1, i));
      const obj = { id: dayId, day: i };
      array.push(obj);
    }

    for (let i = 1; i <= daysCount; i += 1) {
      const dayId = Date.parse(new Date(year, month, i));
      const obj = { id: dayId, day: i };
      array.push(obj);
    }

    for (let i = 1; i <= 42 - (daysCount + firstWeekDay); i += 1) {
      const dayId = Date.parse(new Date(year, month + 1, i));
      const obj = { id: dayId, day: i };
      array.push(obj);
    }
    setDaysInTable(array);
  }, [date]);

  return (
    <div className="calendar">
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
                currentDay={currentDayId}
                planWindow={planWindow}
              />
            ))
          }
      </div>

    </div>
  );
}

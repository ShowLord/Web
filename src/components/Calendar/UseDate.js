import { useState, useEffect } from 'react';
import getDateString from './DateString';

export default function useDate() {
  const [date, setDate] = useState(new Date());
  const [daysInTable, setDaysInTable] = useState([]);

  const month = date.getMonth();
  const year = date.getFullYear();

  const daysCount = new Date(year, month + 1, 0).getDate(); // 30
  const daysCountPreMon = new Date(year, month, 0).getDate(); // 31
  const firstWeekDay = new Date(year, month, 1).getDay(); // 2

  const switchMonth = (m) => setDate(new Date(year, month + m));

  useEffect(() => {
    const array = [];
    for (let i = daysCountPreMon - firstWeekDay + 1; i <= daysCountPreMon; i += 1) {
      const dayId = getDateString(year, month, i);
      const obj = { id: dayId, day: i };
      array.push(obj);
    }

    for (let i = 1; i <= daysCount; i += 1) {
      const dayId = getDateString(year, month + 1, i);
      const obj = { id: dayId, day: i };
      array.push(obj);
    }

    for (let i = 1; i <= 42 - (daysCount + firstWeekDay); i += 1) {
      const dayId = getDateString(year, month + 2, i);
      const obj = { id: dayId, day: i };
      array.push(obj);
    }
    setDaysInTable(array);
    // console.log(array);
  }, [date]);

  return {
    date, daysInTable, switchMonth, firstWeekDay, daysCount, month, year,
  };
}

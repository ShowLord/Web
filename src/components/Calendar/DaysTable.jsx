import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import DailyPlan from './DailyPlan';

export default function DaysTable(props) {
  const {
    day, paddingCountPrev, paddingCountNext, index, dayId, currentDay, planWindow, planData, getPlanDate,
  } = props;

  const addPlan = (e) => {
    planWindow(true);
    getPlanDate(e.target.id);
  };

  const planList = planData.filter((obj) => obj.time === dayId);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classnames('cell', { paddingDay: index < paddingCountPrev || index >= paddingCountNext }, { today: dayId === currentDay })}
      onClick={addPlan}
      id={dayId}
    >{day}
      <div className="daily-plan">
        {
          planList.map((obj) => (
            <DailyPlan
              key={obj.time + obj.color}
              color={obj.color}
              title={obj.title}
            />
          ))
        }

      </div>
    </div>
  );
}

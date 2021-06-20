import React from 'react';
import classnames from 'classnames';
import DailyPlan from './DailyPlan';
import { currentDayId } from './DateString';

export default function DaysTable(props) {
  const {
    day, paddingCountPrev, paddingCountNext, index, dayId, planWindow, planList, getPlanDate, getPlan,
  } = props;

  const addPlan = (e) => {
    if (e.target === e.currentTarget) {
      planWindow(true);
      getPlanDate(e.target.id);
    }
  };

  const dailyPlanList = planList.filter((obj) => obj.date === dayId);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classnames('cell', { paddingDay: index < paddingCountPrev || index >= paddingCountNext }, { today: dayId === currentDayId })}
      onClick={addPlan}
      id={dayId}
    >{day}
      <div className="daily-plan">
        {
          dailyPlanList.map((obj) => (
            <DailyPlan
              key={obj.time + obj.color}
              plan={obj}
              getPlan={getPlan}
            />
          ))
        }
      </div>
    </div>
  );
}

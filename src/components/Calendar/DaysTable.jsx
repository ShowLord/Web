import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

export default function DaysTable(props) {
  const {
    day, paddingCountPrev, paddingCountNext, index, dayId, currentDay, planWindow,
  } = props;

  const addPlan = () => {
    planWindow(true);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classnames('cell', { paddingDay: index < paddingCountPrev || index >= paddingCountNext }, { today: dayId === currentDay })}
      onClick={addPlan}
    >
      {day}
    </div>
  );
}

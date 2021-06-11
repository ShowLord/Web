import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

export default function DaysTable(props) {
  const {
    day, paddingCountPrev, paddingCountNext, index, dayId, currentDay,
  } = props;

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classnames('cell', { paddingDay: index < paddingCountPrev || index >= paddingCountNext }, { toDay: dayId === currentDay })}
    >
      {day}
    </div>
  );
}

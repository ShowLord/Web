/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';

export default function TimePicker(props) {
  const { timeValue, getTime } = props;
  const [hour, setHour] = useState(timeValue.split(':')[0]);
  const [minute, setMinute] = useState(timeValue.split(':')[1]);
  // const [moment, setMoment] = useState(timeValue);

  const hours = [];

  for (let i = 0; i < 24; i += 1) {
    hours.push(i.toString().padStart(2, 0));
  }

  const minutes = [];

  for (let i = 0; i < 60; i += 1) {
    minutes.push(i.toString().padStart(2, 0));
  }

  const choseHour = (e) => {
    setHour(e.target.id);
    getTime(`${e.target.id}:${minute}`);
  };

  const choseMinute = (e) => {
    setMinute(e.target.id);
    getTime(`${hour}:${e.target.id}`);
  };

  const hourRef = useRef();
  const minuteRef = useRef();

  useEffect(() => {
    const viewHour = hourRef.current.children[hour];
    const viewMinute = minuteRef.current.children[minute];
    viewHour.scrollIntoView({ block: 'center' });
    viewMinute.scrollIntoView({ block: 'center' });
  }, []);

  return (
    <div className="time-box">
      <div className="moment">
        <div>時</div>
        <div>分</div>
      </div>
      <div className="time-table">
        <div className="table hours" ref={hourRef}>
          {
            hours.map((ele) => (
              <div
                className={classnames('cell pointer', { planTime: ele === hour })}
                onClick={choseHour}
                id={ele}
              >
                {ele}
              </div>
            ))
            }
        </div>
        <div className="table minutes" ref={minuteRef}>
          {
            minutes.map((ele) => (
              <div
                className={classnames('cell pointer', { planTime: ele === minute })}
                onClick={choseMinute}
                id={ele}
              >
                {ele}
              </div>
            ))
            }
        </div>
      </div>

    </div>
  );
}

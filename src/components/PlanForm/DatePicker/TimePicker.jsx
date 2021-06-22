import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';

export default function TimePicker(props) {
  const hour = [];

  for (let i = 0; i < 24; i += 1) {
    hour.push(i.toString().padStart(2, 0));
  }

  const minutes = [];

  for (let i = 0; i < 60; i += 1) {
    minutes.push(i.toString().padStart(2, 0));
  }

  return (
    <div className="time-box">
      <div className="moment">
        <div>時</div>
        <div>分</div>
      </div>
      <div className="time-table">
        <div className="table hours">
          {
            hour.map((ele) => (
              <div
                className="cell pointer"
              >
                {ele}
              </div>
            ))
            }
        </div>
        <div className="table minutes">
          {
            minutes.map((ele) => (
              <div
                className="cell pointer"
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

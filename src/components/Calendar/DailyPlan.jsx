import React, { useState, useEffect } from 'react';

export default function DailyPlan(props) {
  const { color, title } = props;

  return (
    <div className="plan">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="5" fill={color} />
      </svg>
      <span>{title}</span>

    </div>

  );
}

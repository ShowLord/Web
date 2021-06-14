import React, { useState, useEffect, useRef } from 'react';
import ColorPicker from '../FormComponents/ColorPicker';

export default function Plan(props) {
  const { planWindow, getPlanInfo, planDate } = props;
  const titleRef = useRef();
  const timeRef = useRef();

  const closeItem = (e) => {
    if (e.target === e.currentTarget) { planWindow(false); }
  };

  const planInfo = { };
  const pickColor = (e) => {
    const color = getComputedStyle(e.target).backgroundColor;
    planInfo.color = color;
    console.log(planInfo);
  };

  const atSubmit = () => {
    const title = titleRef.current.value;
    const time = timeRef.current.value;
    if (title !== '' && time !== '') {
      planInfo.title = title;
      planInfo.time = time;
      console.log(planInfo);
    }

    if (planInfo.title && planInfo.color && planInfo.time) {
      const infoArray = [];
      infoArray.push(planInfo);
      planWindow(false);
      console.log(infoArray);
      getPlanInfo(infoArray);
    }
  };

  console.log(planDate);

  return (
    <div className="plan">
      <div className="mask" onClick={closeItem}>
        <div className="plan-window">
          <img className="close" src={require('img/close.png')} alt="close" onClick={closeItem} />
          <div className="form">
            <div className="section"> 新增計畫</div>
            <ColorPicker pickColor={pickColor} />
            <label htmlFor="plan-title">標題
              <input type="input" name="title" id="plan-title" ref={titleRef} />
            </label>
            <label htmlFor="plan-time">時間
              <input type="input" name="title" id="plan-time" ref={timeRef} defaultValue={planDate} />
            </label>
            <label htmlFor="plan-detail">描述
              <input type="input" name="title" id="plan-detail" />
            </label>
            <label htmlFor="plan-addTo">新增計畫至以下日曆
              <input type="section" name="title" id="plan-addTo" />
            </label>
            <button className="submit" onClick={atSubmit}> 新增計畫 ＋ </button>
          </div>
        </div>
      </div>
    </div>
  );
}

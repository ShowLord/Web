import React, { useState, useEffect, useRef } from 'react';
import ColorPicker from '../FormComponents/ColorPicker';

export default function Plan(props) {
  const { planWindow } = props;
  const titleRef = useRef();

  const closeItem = (e) => {
    if (e.target === e.currentTarget) { planWindow(false); }
  };

  const planInfo = { };
  const pickColor = (e) => {
    const color = getComputedStyle(e.target).backgroundColor;
    planInfo.color = color;
  };

  const atSubmit = () => {
    const title = titleRef.current.value;
    if (title !== '') {
      planInfo.title = title;
    }

    if (planInfo.title && planInfo.color) {
      const infoArray = [];
      infoArray.push(planInfo);
      planWindow(false);
      console.log(infoArray);
      // getPlanInfo(infoArray);
    }
  };

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
              <input type="input" name="title" id="plan-time" />
            </label>
            <label htmlFor="plan-detail">描述
              <input type="input" name="title" id="plan-detail" />
            </label>
            <label htmlFor="plan-addTo">新增計畫至以下日曆
              <input type="input" name="title" id="plan-addTo" />
            </label>
            <button className="submit" onClick={atSubmit}> 新增計畫 ＋ </button>
          </div>
        </div>
      </div>
    </div>
  );
}

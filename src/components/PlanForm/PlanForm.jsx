import React, { useState, useEffect } from 'react';
import ColorPicker from '../FormComponents/ColorPicker';

export default function Plan(props) {
  const { planStatus } = props;

  const closeItem = (e) => {
    if (e.target === e.currentTarget) { planStatus(false); }
  };

  return (
    <div className="plan">
      <div className="mask" onClick={closeItem}>
        <div className="plan-window">
          <img className="close" src={require('img/close.png')} alt="close" onClick={closeItem} />
          <div className="form">
            <div className="section"> 新增計畫</div>
            <ColorPicker />
            <label htmlFor="plan-title">標題
              <input type="input" name="title" id="plan-title" />
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
            <button className="submit"> 新增計畫 ＋ </button>
          </div>
        </div>
      </div>
    </div>
  );
}

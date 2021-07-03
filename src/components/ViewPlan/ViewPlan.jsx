import React, { useState, useEffect, useRef } from 'react';
import ViewTodo from './ViewTodo';

export default function ViewPlan(props) {
  const { plan, viewPlanStatus, todoChecked } = props;

  const closeItem = (e) => {
    if (e.target === e.currentTarget) { viewPlanStatus(false); }
  };
  const closeIcon = () => {
    viewPlanStatus(false);
  };

  return (
    <div className="mask" onClick={closeItem}>
      <div className="plan-window view-plan">
        <svg className="close pointer" onClick={closeIcon} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.8434 21.8645C20.4405 22.4616 21.3993 22.4707 21.9851 21.8849C22.5709 21.2991 22.5618 20.3403 21.9647 19.7432L17.537 15.3155L22.3207 10.5319C22.8954 9.95716 22.8864 9.01637 22.3006 8.43058C21.7149 7.8448 20.7741 7.83584 20.1993 8.41057L15.4157 13.1942L10.6918 8.47029C10.0948 7.87324 9.13589 7.86411 8.55011 8.44989C7.96432 9.03568 7.97345 9.99456 8.57051 10.5916L13.2944 15.3155L8.8456 19.7643C8.27087 20.339 8.27983 21.2798 8.86561 21.8656C9.4514 22.4514 10.3922 22.4604 10.9669 21.8856L15.4157 17.4368L19.8434 21.8645Z" fill={plan.color} fillOpacity="0.95" />
        </svg>
        <div className="form">
          <div className="title">
            <span style={{ color: plan.color }}>{plan.title}</span>
            <svg className="edit pointer" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-inside-1" fill="white">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.7931 4.0196C23.23 3.45649 22.317 3.45649 21.7539 4.0196L18.5663 7.20721L23.1416 11.7826L26.3292 8.59496C26.8923 8.03185 26.8923 7.11887 26.3292 6.55576L23.7931 4.0196ZM16.9068 8.86665L21.4822 13.442L10.5435 24.3807L10.5434 24.3807L6.1019 25.3976C5.60528 25.5113 5.1506 25.0881 5.22851 24.5846L5.9681 19.8054L5.96808 19.8054L16.9068 8.86665Z" />
              </mask>
              <path fillRule="evenodd" clipRule="evenodd" d="M23.7931 4.0196C23.23 3.45649 22.317 3.45649 21.7539 4.0196L18.5663 7.20721L23.1416 11.7826L26.3292 8.59496C26.8923 8.03185 26.8923 7.11887 26.3292 6.55576L23.7931 4.0196ZM16.9068 8.86665L21.4822 13.442L10.5435 24.3807L10.5434 24.3807L6.1019 25.3976C5.60528 25.5113 5.1506 25.0881 5.22851 24.5846L5.9681 19.8054L5.96808 19.8054L16.9068 8.86665Z" fill="#4C5760" fillOpacity="0.95" />
              <path d="M18.5663 7.20721L18.3114 6.95231L18.0565 7.20721L18.3114 7.46211L18.5663 7.20721ZM23.1416 11.7826L22.8867 12.0375L23.1416 12.2924L23.3965 12.0375L23.1416 11.7826ZM21.4822 13.442L21.7371 13.6969L21.992 13.442L21.7371 13.1871L21.4822 13.442ZM16.9068 8.86665L17.1617 8.61175L16.9068 8.35685L16.6519 8.61175L16.9068 8.86665ZM10.5435 24.3807L10.5864 24.7387L10.7102 24.7238L10.7984 24.6356L10.5435 24.3807ZM10.5434 24.3807L10.5005 24.0228L10.4816 24.0251L10.463 24.0294L10.5434 24.3807ZM6.1019 25.3976L6.02145 25.0462L6.02145 25.0462L6.1019 25.3976ZM5.22851 24.5846L4.87227 24.5295L4.87227 24.5295L5.22851 24.5846ZM5.9681 19.8054L6.32434 19.8605L6.35231 19.6798L6.223 19.5505L5.9681 19.8054ZM5.96808 19.8054L5.71318 19.5505L5.45828 19.8054L5.71318 20.0603L5.96808 19.8054ZM22.0088 4.2745C22.4311 3.85217 23.1158 3.85217 23.5382 4.2745L24.048 3.7647C23.3441 3.06081 22.2029 3.06081 21.499 3.7647L22.0088 4.2745ZM18.8212 7.46211L22.0088 4.2745L21.499 3.7647L18.3114 6.95231L18.8212 7.46211ZM23.3965 11.5277L18.8212 6.95231L18.3114 7.46211L22.8867 12.0375L23.3965 11.5277ZM26.0743 8.34006L22.8867 11.5277L23.3965 12.0375L26.5841 8.84986L26.0743 8.34006ZM26.0743 6.81066C26.4967 7.23299 26.4967 7.91773 26.0743 8.34006L26.5841 8.84986C27.288 8.14597 27.288 7.00475 26.5841 6.30086L26.0743 6.81066ZM23.5382 4.2745L26.0743 6.81066L26.5841 6.30086L24.048 3.7647L23.5382 4.2745ZM21.7371 13.1871L17.1617 8.61175L16.6519 9.12155L21.2273 13.6969L21.7371 13.1871ZM10.7984 24.6356L21.7371 13.6969L21.2273 13.1871L10.2886 24.1258L10.7984 24.6356ZM10.5864 24.7387L10.5864 24.7387L10.5005 24.0228L10.5005 24.0228L10.5864 24.7387ZM6.18235 25.749L10.6239 24.7321L10.463 24.0294L6.02145 25.0462L6.18235 25.749ZM4.87227 24.5295C4.7554 25.2847 5.43741 25.9196 6.18235 25.749L6.02145 25.0462C5.77314 25.1031 5.5458 24.8915 5.58475 24.6397L4.87227 24.5295ZM5.61185 19.7503L4.87227 24.5295L5.58475 24.6397L6.32434 19.8605L5.61185 19.7503ZM5.71318 20.0603L5.7132 20.0603L6.223 19.5505L6.22298 19.5505L5.71318 20.0603ZM16.6519 8.61175L5.71318 19.5505L6.22298 20.0603L17.1617 9.12155L16.6519 8.61175Z" fill="#4C5760" fillOpacity="0.95" mask="url(#path-1-inside-1)" />
            </svg>
          </div>
          <div className="scroll-content">
            <label htmlFor="plan-time">時間
              <input className="dateButton" type="button" name="time" defaultValue={`${plan.date} ${plan.time}`} />
            </label>
            <label htmlFor="plan-detail">描述
              <textarea name="detail" id="plan-detail" rows="2" readOnly defaultValue={plan.description} />
            </label>
            {plan.todoList.length >= 1 && (
              <div className="form-item view-todo">待辦清單
                {plan.todoList.map((ele) => (
                  <ViewTodo
                    key={ele.id}
                    id={ele.id}
                    value={ele.value}
                    color={plan.color}
                    todoChecked={todoChecked}
                    isChecked={ele.isChecked}
                  />
                ))}
              </div>
            )}
            {plan.imgList.length >= 1 && (
              <div className="album">
                {plan.imgList.map((ele) => (
                  <div className="preview pointer img-cover">
                    <img
                      src={ele}
                      alt="img"
                    />
                  </div>
                ))}
              </div>
            )}
            <label className="comment" htmlFor="plan-detail">回應
              <textarea name="detail" id="plan-detail" rows="2" placeholder="輸入文字....." />
              <button
                className="pointer"
                style={{ backgroundColor: plan.color }}
              >留言
              </button>
            </label>

          </div>

        </div>
      </div>
    </div>
  );
}

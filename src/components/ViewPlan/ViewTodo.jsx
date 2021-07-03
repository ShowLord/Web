import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

export default function ViewTodo(props) {
  const {
    value, color, id, todoChecked, isChecked,
  } = props;
  const [checked, setChecked] = useState(isChecked);

  const onToggle = () => {
    if (checked) {
      setChecked(false);
      todoChecked(id, false);
    } else {
      setChecked(true);
      todoChecked(id, true);
    }
  };
  return (
    <div className="todo-item">
      <div className="box-trigger pointer" onClick={onToggle}>
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="28" height="28" rx="7" stroke={color} strokeWidth="2" />
        </svg>
        <svg className={classNames('checked', { active: checked })} viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="24" fill="black">
            <rect fill="white" width="31" height="24" />
            <path fillRule="evenodd" clipRule="evenodd" d="M29.5173 4.27178C30.2333 3.44489 30.1422 2.19553 29.3138 1.48126C28.4854 0.766998 27.2334 0.858301 26.5174 1.6852L11.8254 18.652L4.05533 10.8986C3.28117 10.1261 2.026 10.1261 1.25184 10.8986C0.477678 11.6711 0.47768 12.9236 1.25184 13.6961L10.1911 22.6162C10.7794 23.2032 11.6454 23.3441 12.3671 23.039C12.9202 23.0365 13.4695 22.8044 13.8596 22.3538L29.5173 4.27178Z" />
          </mask>
          <path fillRule="evenodd" clipRule="evenodd" d="M29.5173 4.27178C30.2333 3.44489 30.1422 2.19553 29.3138 1.48126C28.4854 0.766998 27.2334 0.858301 26.5174 1.6852L11.8254 18.652L4.05533 10.8986C3.28117 10.1261 2.026 10.1261 1.25184 10.8986C0.477678 11.6711 0.47768 12.9236 1.25184 13.6961L10.1911 22.6162C10.7794 23.2032 11.6454 23.3441 12.3671 23.039C12.9202 23.0365 13.4695 22.8044 13.8596 22.3538L29.5173 4.27178Z" fill={color} />
          <path d="M29.3138 1.48126L29.6403 1.10258L29.3138 1.48126ZM29.5173 4.27178L29.8953 4.59909H29.8953L29.5173 4.27178ZM26.5174 1.6852L26.1394 1.35789L26.5174 1.6852ZM11.8254 18.652L11.4722 19.0059L11.8521 19.385L12.2034 18.9793L11.8254 18.652ZM4.05533 10.8986L3.70216 11.2526L4.05533 10.8986ZM1.25184 13.6961L0.89867 14.05L1.25184 13.6961ZM10.1911 22.6162L10.5443 22.2622L10.1911 22.6162ZM12.3671 23.039L12.3648 22.539L12.2646 22.5395L12.1724 22.5785L12.3671 23.039ZM13.8596 22.3538L14.2376 22.6811L13.8596 22.3538ZM28.9873 1.85994C29.6063 2.39362 29.6743 3.32665 29.1393 3.94448L29.8953 4.59909C30.7924 3.56313 30.6782 1.99744 29.6403 1.10258L28.9873 1.85994ZM26.8953 2.0125C27.4309 1.39405 28.3677 1.32573 28.9873 1.85994L29.6403 1.10258C28.6031 0.208269 27.0359 0.322556 26.1394 1.35789L26.8953 2.0125ZM12.2034 18.9793L26.8953 2.0125L26.1394 1.35789L11.4474 18.3247L12.2034 18.9793ZM3.70216 11.2526L11.4722 19.0059L12.1785 18.2981L4.4085 10.5447L3.70216 11.2526ZM1.60501 11.2526C2.184 10.6748 3.12317 10.6748 3.70216 11.2526L4.4085 10.5447C3.43916 9.57746 1.86801 9.57746 0.898668 10.5447L1.60501 11.2526ZM1.60501 13.3422C1.02662 12.765 1.02662 11.8297 1.60501 11.2526L0.898668 10.5447C-0.0712643 11.5126 -0.0712624 13.0822 0.89867 14.05L1.60501 13.3422ZM10.5443 22.2622L1.60501 13.3422L0.89867 14.05L9.83794 22.9701L10.5443 22.2622ZM12.1724 22.5785C11.6314 22.8072 10.9836 22.7006 10.5443 22.2622L9.83794 22.9701C10.5752 23.7058 11.6594 23.881 12.5618 23.4995L12.1724 22.5785ZM13.4816 22.0265C13.19 22.3633 12.78 22.5372 12.3648 22.539L12.3693 23.539C13.0604 23.5359 13.7489 23.2454 14.2376 22.6811L13.4816 22.0265ZM29.1393 3.94448L13.4816 22.0265L14.2376 22.6811L29.8953 4.59909L29.1393 3.94448Z" fill={color} mask="url(#path-1-outside-1)" />
        </svg>
      </div>
      <span>{value}</span>
    </div>
  );
}

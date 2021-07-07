/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, useEffect, useRef } from 'react';

export default function UploadImg(props) {
  const {
    src, removeImg, idx, getImgPreview,
  } = props;
  const [isHovered, setIsHovered] = useState(false);

  const onRemove = () => {
    removeImg(idx);
  };

  const onView = (e) => {
    if (e.target === e.currentTarget) {
      getImgPreview(src, true);
    }
  };

  return (
    <div className="preview pointer ">
      <img
        src={src}
        alt="img"
        onMouseOver={() => setIsHovered(true)}
      />
      {isHovered && (
        <div onClick={onView} className="img-hover pointer" onMouseLeave={() => setIsHovered(false)}>
          <svg onClick={onRemove} className="del pointer" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3104 5.46207C10.0991 5.46207 9.11725 6.44395 9.11725 7.65517L20.8138 7.65517C20.8138 6.44395 19.8319 5.46207 18.6207 5.46207H11.3104ZM11.3104 4C9.29165 4 7.65518 5.63648 7.65518 7.65517L4.9138 7.65517C4.40912 7.65517 4 8.06429 4 8.56897C4 9.07364 4.40912 9.48276 4.9138 9.48276H6.96069L8.2691 22.5668C8.41858 24.0616 9.67644 25.2 11.1787 25.2H18.7523C20.2546 25.2 21.5125 24.0617 21.6619 22.5668L22.9703 9.48276H25.0172C25.5219 9.48276 25.931 9.07364 25.931 8.56897C25.931 8.06429 25.5219 7.65517 25.0172 7.65517H22.2759C22.2759 5.63648 20.6394 4 18.6207 4H11.3104ZM12.0414 20.8138C11.6376 20.8138 11.3103 20.4802 11.3103 20.0687V12.7865C11.3103 12.375 11.6376 12.0414 12.0414 12.0414C12.4451 12.0414 12.7724 12.375 12.7724 12.7865V20.0687C12.7724 20.4802 12.4451 20.8138 12.0414 20.8138ZM14.9655 20.8138C14.5618 20.8138 14.2345 20.4802 14.2345 20.0687V12.7865C14.2345 12.375 14.5618 12.0414 14.9655 12.0414C15.3693 12.0414 15.6966 12.375 15.6966 12.7865V20.0687C15.6966 20.4802 15.3693 20.8138 14.9655 20.8138ZM17.1586 20.0687C17.1586 20.4802 17.4859 20.8138 17.8897 20.8138C18.2934 20.8138 18.6207 20.4802 18.6207 20.0687V12.7865C18.6207 12.375 18.2934 12.0414 17.8897 12.0414C17.4859 12.0414 17.1586 12.375 17.1586 12.7865V20.0687Z"
              fillOpacity="0.95"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

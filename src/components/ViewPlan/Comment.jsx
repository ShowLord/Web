import React, { useState, useEffect, useRef } from 'react';

export default function Comment(props) {
  const { commentList } = props;

  return (
    <div className="comments">
      {
            commentList.map((ele) => (
              <div className="comment-card">
                <img src={require('img/avatar.png')} alt="avatar" />
                <div>
                  <span className="user"> Show Lo </span>
                  <span className="content"> {ele} </span>
                </div>
              </div>
            ))
        }
    </div>
  );
}

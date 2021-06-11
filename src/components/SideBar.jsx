import React from 'react';

export default function SideBar() {
  return (
    <div className="sideBar">
      <img className="logo" src={require('img/Logo.png')} alt="logo" />
      <button> Add Calendar ＋ </button>
      <div className="user">
        <img src={require('img/avatar.png')} alt="logo" />
        <div>
          <span>Show Lo</span>
          <span>iiiishowlo@gmail.com</span>
        </div>
        <img src={require('img/user.png')} alt="logo" />
      </div>
    </div>
  );
}

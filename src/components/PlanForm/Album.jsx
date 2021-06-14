import React, { useState, useEffect, useRef } from 'react';

export default function Album(props) {
  const { imgURL } = props;

  console.log(imgURL);

  return (
    <div className="album">
      <img src={imgURL} alt="uploaded-img" />
      dskjfosfjo

    </div>
  );
}

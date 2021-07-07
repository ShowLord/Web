import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';

export default function ColorPicker(props) {
  const { pickColor, defaultColor } = props;
  const [chosenColor, setChosenColor] = useState(defaultColor.colorName);

  console.log(defaultColor);

  const atPickColor = (e) => {
    pickColor({ colorName: e.target.ariaLabel, rgb: getComputedStyle(e.target).backgroundColor });
    setChosenColor(e.target.ariaLabel);
    console.log(defaultColor.color);
  };

  return (
    <div className="color-picker ">
      <button aria-label="red" className={classnames('red', { chosen: chosenColor === 'red' })} onClick={atPickColor} />
      <button aria-label="yellow" className={classnames('yellow', { chosen: chosenColor === 'yellow' })} onClick={atPickColor} />
      <button aria-label="green" className={classnames('green', { chosen: chosenColor === 'green' })} onClick={atPickColor} />
      <button aria-label="blue" className={classnames('blue', { chosen: chosenColor === 'blue' })} onClick={atPickColor} />
      <button aria-label="purple" className={classnames('purple', { chosen: chosenColor === 'purple' })} onClick={atPickColor} />
    </div>
  );
}

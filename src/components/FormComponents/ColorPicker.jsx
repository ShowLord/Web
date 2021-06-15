import React, { useState } from 'react';
import classnames from 'classnames';

export default function ColorPicker(props) {
  const { pickColor } = props;
  const [chosenColor, setChosenColor] = useState('');

  const atPickColor = (e) => {
    pickColor(e);
    setChosenColor(e.target.className);
  };

  return (
    <div className="color-picker ">
      <button aria-label="color" className={classnames('red', 'pointer', { chosen: chosenColor === 'red' })} onClick={atPickColor} />
      <button aria-label="color" className={classnames('yellow', 'pointer', { chosen: chosenColor === 'yellow' })} onClick={atPickColor} />
      <button aria-label="color" className={classnames('green', 'pointer', { chosen: chosenColor === 'green' })} onClick={atPickColor} />
      <button aria-label="color" className={classnames('blue', 'pointer', { chosen: chosenColor === 'blue' })} onClick={atPickColor} />
      <button aria-label="color" className={classnames('purple', 'pointer', { chosen: chosenColor === 'purple' })} onClick={atPickColor} />
    </div>
  );
}

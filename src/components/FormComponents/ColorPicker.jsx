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
    <div className="color-picker">
      <button aria-label="color" className={classnames('red', { chosen: chosenColor === 'red' })} onClick={atPickColor} />
      <button aria-label="color" className={classnames('yellow', { chosen: chosenColor === 'yellow' })} onClick={atPickColor} />
      <button aria-label="color" className={classnames('green', { chosen: chosenColor === 'green' })} onClick={atPickColor} />
      <button aria-label="color" className={classnames('blue', { chosen: chosenColor === 'blue' })} onClick={atPickColor} />
      <button aria-label="color" className={classnames('purple', { chosen: chosenColor === 'purple' })} onClick={atPickColor} />
    </div>
  );
}

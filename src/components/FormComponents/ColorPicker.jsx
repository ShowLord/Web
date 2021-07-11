import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';

export default function ColorPicker(props) {
  const { pickColor, defaultColor } = props;
  const [chosenColor, setChosenColor] = useState(defaultColor);

  const atPickColor = (e) => {
    const colorItem = { colorName: e.target.ariaLabel, rgb: getComputedStyle(e.target).backgroundColor };
    pickColor(colorItem);
    setChosenColor(colorItem);
  };

  const chosenStyle = { boxShadow: `0px 0px 0px 3px ${chosenColor.rgb.replace(')', ',0.3)')}` };
  const intialSyle = { boxShadow: 'none' };

  return (
    <div className="color-picker ">
      <button aria-label="red" className="red" style={chosenColor.colorName === 'red' ? chosenStyle : intialSyle} onClick={atPickColor} />
      <button aria-label="yellow" className="yellow" style={chosenColor.colorName === 'yellow' ? chosenStyle : intialSyle} onClick={atPickColor} />
      <button aria-label="green" className="green" style={chosenColor.colorName === 'green' ? chosenStyle : intialSyle} onClick={atPickColor} />
      <button aria-label="blue" className="blue" style={chosenColor.colorName === 'blue' ? chosenStyle : intialSyle} onClick={atPickColor} />
      <button aria-label="purple" className="purple" style={chosenColor.colorName === 'purple' ? chosenStyle : intialSyle} onClick={atPickColor} />
    </div>
  );
}

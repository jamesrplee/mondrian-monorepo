import React from 'react';
import convert from 'color-convert';

import './ColorPicker.css';


export default function ColorPicker({
  rootColor,
  colors,
  rgb,
  index,
  cmyk,
  setColors,
  switcher,
  activeSlide
}) {
  let augmentedColor = ''

  switch(rootColor) {
    case 'blue':
      augmentedColor = `#${convert.rgb.hex(colors[0].rgb)}`;

      break;
    case 'yellow':
      augmentedColor = `#${convert.rgb.hex(colors[1].rgb)}`;

      break;
    default:
      augmentedColor = `#${convert.rgb.hex(colors[2].rgb)}`;
  }

  const handleFocus = (e) => e.target.select();

  function handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    if (target.validity.valid) {
      let newArr = [...colors]

      if (name === 'red' || name === 'green' || name === 'blue') {
        newArr[index] = {
          ...newArr[index],
          rgb: [
            name === "red" ? value : newArr[index].rgb[0],
            name === "green" ? value : newArr[index].rgb[1],
            name === "blue" ? value : newArr[index].rgb[2],
          ],
          hasCmykChanged: true,
        }
      }

      if (name === 'cyan' || name === 'magenta' || name === 'yellow' || name === 'key') {
        newArr[index] = {
          ...newArr[index],
          cmyk: [
            name === "cyan" ? value : newArr[index].cmyk[0],
            name === "magenta" ? value : newArr[index].cmyk[1],
            name === "yellow" ? value : newArr[index].cmyk[2],
            name === "key" ? value : newArr[index].cmyk[3],
          ],
          hasCmykChanged: true,
        }
      }

      setColors(newArr)
    }
  }

  return (
    <div className="container" style={{ boxShadow: `0.5rem 0.5rem ${augmentedColor}50`, transform: activeSlide && 'scale(1.05)' }}>
      <div className="ColorPicker" style={{ borderColor: augmentedColor }}>
        <div className="rgb row-group" style={{
          borderBottom: `1px solid ${augmentedColor}90`,
          backgroundColor: switcher === 0 && `${augmentedColor}10`
        }}>
          <label>RGB</label>
          <div className="inputs-group">
            <label htmlFor="red">R</label>
            <input
              type="number"
              min={0}
              max={255}
              pattern="[0-9]*"
              name="red"
              value={rgb[0]}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <label htmlFor="green">G</label>
            <input
              type="number"
              min={0}
              max={255}
              pattern="[0-9]*"
              name="green"
              value={rgb[1]}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <label htmlFor="blue">B</label>
            <input
              type="number"
              min={0}
              max={255}
              pattern="[0-9]*"
              name="blue"
              value={rgb[2]}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
        </div>

        <div className="cmyk row-group" style={{ backgroundColor: switcher === 1 && `${augmentedColor}10` }}>
          <label>CMYK</label>
          <div className="inputs-group">
            <label htmlFor="cyan">C</label>
            <input
              type="number"
              min={0}
              max={100}
              pattern="[0-9]*"
              name="cyan"
              value={cmyk[0]}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <label htmlFor="magenta">M</label>
            <input
              type="number"
              min={0}
              max={100}
              pattern="[0-9]*"
              name="magenta"
              value={cmyk[1]}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <label htmlFor="yellow">Y</label>
            <input
              type="number"
              min={0}
              max={100}
              pattern="[0-9]*"
              name="yellow"
              value={cmyk[2]}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <label htmlFor="key">K</label>
            <input
              type="number"
              min={0}
              max={100}
              pattern="[0-9]*"
              name="key"
              value={cmyk[3]}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
        </div>
        {/* <div className={`icon ${hasCmykChanged && 'broken'}`}>
          {hasCmykChanged ? <BrokenLink /> : <Link />}
        </div> */}
      </div>
      <div className="swatch">
        <div className="rgb" style={{
          backgroundColor: augmentedColor,
          boxShadow: switcher === 0 && `0 10px 0px rgba(0,0,0,0.2)`,
          zIndex: switcher === 0 && 1,
        }}></div>
        <div className="cmyk" style={{
          backgroundColor: `rgb(${convert.cmyk.rgb(cmyk)})`,
          boxShadow: switcher === 1 && `0 -10px 0px rgba(0,0,0,0.2)`,
          zIndex: switcher === 1 && 1,
        }}></div>
    </div>
  </div>
  );
}

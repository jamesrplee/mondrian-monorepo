import React from 'react';
import PropTypes from 'prop-types';
import './App.css';


function App({svg}) {
  const domparser = new DOMParser()
  const el = domparser.parseFromString(svg, 'image/svg+xml')

  console.log(el.documentElement)

  const svgDom = el.documentElement

  return (
    <div className="App">
      <div
        id="svg"
      >
        <svg
          width={svgDom.width.baseVal.value}
          height={svgDom.height.baseVal.value}
          viewBox={`${svgDom.viewBox.baseVal.x} ${svgDom.viewBox.baseVal.y} ${svgDom.viewBox.baseVal.width} ${svgDom.viewBox.baseVal.height}`}
          dangerouslySetInnerHTML={{ __html: svgDom.innerHTML }}
        />
      </div>

    </div>
  );
}

App.propTypes = {
  svg: PropTypes.string
}

App.defaultProps = {
  svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1504" height="1504" viewBox="0 0 1504 1504"><defs/><g><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 0 0 L 214.8571428571429 0 L 214.8571428571429 1504 L 0 1504 L 0 0 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#F7D842" stroke="#000000" paint-order="fill stroke markers" d=" M 429.7142857142857 644.5714285714286 L 644.5714285714287 644.5714285714286 L 644.5714285714287 1504 L 429.7142857142857 1504 L 429.7142857142857 644.5714285714286 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 644.5714285714286 644.5714285714286 L 1504 644.5714285714286 L 1504 859.4285714285714 L 644.5714285714286 859.4285714285714 L 644.5714285714286 644.5714285714286 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#D40920" stroke="#000000" paint-order="fill stroke markers" d=" M 214.85714285714286 429.7142857142857 L 429.7142857142858 429.7142857142857 L 429.7142857142858 859.4285714285716 L 214.85714285714286 859.4285714285716 L 214.85714285714286 429.7142857142857 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 1074.2857142857142 1074.2857142857142 L 1504 1074.2857142857142 L 1504 1504 L 1074.2857142857142 1504 L 1074.2857142857142 1074.2857142857142 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 644.5714285714286 859.4285714285714 L 1074.2857142857142 859.4285714285714 L 1074.2857142857142 1074.2857142857142 L 644.5714285714286 1074.2857142857142 L 644.5714285714286 859.4285714285714 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 1074.2857142857142 859.4285714285714 L 1504 859.4285714285714 L 1504 1074.2857142857142 L 1074.2857142857142 1074.2857142857142 L 1074.2857142857142 859.4285714285714 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 429.7142857142857 429.7142857142857 L 1074.2857142857142 429.7142857142857 L 1074.2857142857142 644.5714285714287 L 429.7142857142857 644.5714285714287 L 429.7142857142857 429.7142857142857 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 214.85714285714286 0 L 1074.2857142857142 0 L 1074.2857142857142 429.7142857142858 L 214.85714285714286 429.7142857142858 L 214.85714285714286 0 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 1074.2857142857142 0 L 1504 0 L 1504 429.7142857142858 L 1074.2857142857142 429.7142857142858 L 1074.2857142857142 0 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 644.5714285714286 1074.2857142857142 L 1074.2857142857142 1074.2857142857142 L 1074.2857142857142 1289.142857142857 L 644.5714285714286 1289.142857142857 L 644.5714285714286 1074.2857142857142 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 644.5714285714286 1289.142857142857 L 1074.2857142857142 1289.142857142857 L 1074.2857142857142 1504 L 644.5714285714286 1504 L 644.5714285714286 1289.142857142857 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 214.85714285714286 859.4285714285714 L 429.7142857142858 859.4285714285714 L 429.7142857142858 1289.142857142857 L 214.85714285714286 1289.142857142857 L 214.85714285714286 859.4285714285714 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 214.85714285714286 1289.142857142857 L 429.7142857142858 1289.142857142857 L 429.7142857142858 1504 L 214.85714285714286 1504 L 214.85714285714286 1289.142857142857 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#F2F5F1" stroke="#000000" paint-order="fill stroke markers" d=" M 1074.2857142857142 429.7142857142857 L 1289.142857142857 429.7142857142857 L 1289.142857142857 644.5714285714287 L 1074.2857142857142 644.5714285714287 L 1074.2857142857142 429.7142857142857 Z" stroke-miterlimit="10" stroke-width="4"/><path fill="#1356A2" stroke="#000000" paint-order="fill stroke markers" d=" M 1289.142857142857 429.7142857142857 L 1504 429.7142857142857 L 1504 644.5714285714287 L 1289.142857142857 644.5714285714287 L 1289.142857142857 429.7142857142857 Z" stroke-miterlimit="10" stroke-width="4"/></g></svg>'
}

export default App;

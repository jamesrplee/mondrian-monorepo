import React, { useRef, useEffect } from 'react';
import './App.css';
import C2S from 'canvas2svg'

export default function MondrianCanvas({colors, props, svg, setSvg, setSerializedSvg}) {
  const canvasRef = useRef(null);

  let gridColors = colors.map((color) => `rgb(${color.rgb})`)

  useEffect(() => {
    const canvas = canvasRef.current;
    var context = new C2S(window.innerWidth, window.innerWidth)

    const size = window.innerWidth;
    const dpr = window.devicePixelRatio;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    context.lineWidth = 4;

    const step = size / 7;
    const white = '#F2F5F1';
    const colors = gridColors

    const squares = [{
        x: 0,
        y: 0,
        width: size,
        height: size
      }];

    function splitSquaresWith(coordinates) {
      const { x, y } = coordinates;

      for (var i = squares.length - 1; i >= 0; i--) {
      const square = squares[i];

      if (x && x > square.x && x < square.x + square.width) {
          if(Math.random() > 0.5) {
            squares.splice(i, 1);
            splitOnX(square, x);
          }
      }

      if (y && y > square.y && y < square.y + square.height) {
          if(Math.random() > 0.5) {
            squares.splice(i, 1);
            splitOnY(square, y);
          }
      }
      }
    }

    function splitOnX(square, splitAt) {
      var squareA = {
        x: square.x,
        y: square.y,
        width: square.width - (square.width - splitAt + square.x),
        height: square.height
      };

      var squareB = {
      x: splitAt,
      y: square.y,
      width: square.width - splitAt + square.x,
      height: square.height
      };

      squares.push(squareA);
      squares.push(squareB);
    }

    function splitOnY(square, splitAt) {
      var squareA = {
        x: square.x,
        y: square.y,
        width: square.width,
        height: square.height - (square.height - splitAt + square.y)
      };

      var squareB = {
      x: square.x,
      y: splitAt,
      width: square.width,
      height: square.height - splitAt + square.y
      };

      squares.push(squareA);
      squares.push(squareB);
    }

    for (var i = 0; i < size; i += step) {
      splitSquaresWith({ y: i });
      splitSquaresWith({ x: i });
    }

    function draw() {
      for (var i = 0; i < colors.length; i++) {
        squares[Math.floor(Math.random() * squares.length)].color = colors[i];
      }
      for (var index = 0; index < squares.length; index++) {
        context.beginPath();
        context.rect(
          squares[index].x,
          squares[index].y,
          squares[index].width,
          squares[index].height
        );
        if(squares[index].color) {
          context.fillStyle = squares[index].color;
        } else {
          context.fillStyle = white
        }
        context.fill()
        context.stroke();
      }
    }

    draw()

    var mySvg = context.getSvg()
    mySvg.setAttribute("viewBox", `0 0 ${window.innerWidth} ${window.innerWidth}`)

    var serializer = new XMLSerializer();
    var str = serializer.serializeToString(mySvg);

    setSvg(mySvg)
    setSerializedSvg(str)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors]) // useEffect

  return (
    <>
      <canvas ref={canvasRef} {...props} />

      <div
        id="svg"
      >
        <svg
          viewBox={svg && `${svg.viewBox.baseVal.x} ${svg.viewBox.baseVal.y} ${svg.viewBox.baseVal.width} ${svg.viewBox.baseVal.height}`}
          dangerouslySetInnerHTML={svg && { __html: svg.innerHTML }}
        />
      </div>
    </>
  )
}

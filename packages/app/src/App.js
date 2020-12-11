/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

import convert from 'color-convert';

import MondrianCanvas from './MondrianCanvas';
import Button from './Button/Button';
import ColorPicker from './ColorPicker/ColorPicker';

import './App.css';

function App() {
  const initialColors = [
    {
      key: 0,
      rootColor: 'blue',
      rgb: [19, 86, 162],
      cmyk: convert.rgb.cmyk([19, 86, 162]),
      hasCmykChanged: false,
    },
    {
      key: 1,
      rootColor: 'yellow',
      rgb: [247, 216, 66],
      cmyk: convert.rgb.cmyk([247, 216, 66]),
      hasCmykChanged: false,
    },
    {
      key: 2,
      rootColor: 'red',
      rgb: [212, 9, 32],
      cmyk: convert.rgb.cmyk([212, 9, 32]),
      hasCmykChanged: false,
    },
  ]
  const [colors, setColors] = useState(initialColors)
  const [svg, setSvg] = useState(null)
  const [serializedSvg, setSerializedSvg] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generated, setGenerated] = useState(null)
  const [switcher, setSwitcher] = useState(0)

  const handleReset = () => {
    setColors(initialColors)
    setSvg(null)
    setSerializedSvg(null)
    setIsGenerating(false)
    setGenerated(false)
    setSwitcher(0)
  }

  useEffect(() => {
    // Get all elements that have a style attribute
    const elms = document.querySelectorAll(".canvas-container path");

    // Loop through them
    Array.prototype.forEach.call(elms, function(elm) {
      // Get the color value

      const fillColor = elm.getAttribute("fill")

      // Switch on the possible values we know of

      switch (fillColor) {
        case `rgb(${colors[0].rgb})` :
          elm.classList.add("custom-color", "blue");
          break;
        case `rgb(${colors[1].rgb})` :
          elm.classList.add("custom-color", "yellow");
          break;
        case `rgb(${colors[2].rgb})` :
          elm.classList.add("custom-color", "red");
          break;
        default:
      }
    });
  }, [colors, switcher, svg])

  const css = {
    '.custom-color.blue': {
      fill: `rgb(${convert.cmyk.rgb(colors[0].cmyk)})`,
    },
    '.custom-color.yellow': {
      fill: `rgb(${convert.cmyk.rgb(colors[1].cmyk)})`,
    },
    '.custom-color.red': {
      fill: `rgb(${convert.cmyk.rgb(colors[2].cmyk)})`,
    }
  }

  return (
    <div className="App" css={switcher === 1 && css}>
      <div className="border" />
      <div className="sidebar">
        <header>
          <h1>
            Mondrian
            <br />
            <span>Color Mapping</span>
          </h1>
          <div>
            <p>
              Testing out the capabilities of <a href="https://make.cm">Outfit Make’s</a> RGB to CMYK color mapping.
              <br />
              <br />
              Try adjusting a swatch's RGB values (what goes in) and the CMYK values (what will come out) and see how the PDF re-generates.
            </p>
          </div>
        </header>
        <Footer />
      </div>
      <section>
        <div className="colorPickerContainer">
          {colors.map((color) => (
            <ColorPicker
              rootColor={color.rootColor}
              key={color.key}
              index={color.key}
              rgb={color.rgb}
              cmyk={color.cmyk}
              hasCmykChanged={color.hasCmykChanged}
              setColors={setColors}
              colors={colors}
              switcher={switcher}
            />
          ))}
          <Button
            text="Generate PDF"
            colors={colors}
            serializedSvg={serializedSvg}
            isGenerating={isGenerating}
            setIsGenerating={setIsGenerating}
            generated={generated}
            setGenerated={setGenerated}
          />
        </div>
        <div className="canvas-container">
          <div className="topBar">
            <div className="switcher">
              <button
                className={switcher === 0 ? 'active' : ''}
                onClick={() => setSwitcher(0)}
              >
                RGB
              </button>
              <button
                className={switcher === 1 ? 'active' : ''}
                onClick={() => setSwitcher(1)}
              >
                CMYK
              </button>
            </div>

            <button className="reset" onClick={() => handleReset()}>Reset</button>
          </div>

          <MondrianCanvas
            colors={colors}
            setSvg={setSvg}
            setSerializedSvg={setSerializedSvg}
            svg={svg}
          />

          <a
            className="download"
            href={generated}
            target="_blank"
            rel="noreferrer"
            style={{
              visibility: generated ? 'initial' : 'hidden'
            }}
          >
            Download your PDF
          </a>
        </div>
      </section>
      <div className="grid mobile-only-grid">
        <Swiper
            className="swiper"
            spaceBetween={30}
            slidesPerView="auto"
            centeredSlides={true}
          >
            {colors.map((color, index) => (
              <SwiperSlide key={index}>
                {({isActive}) => (
                  <ColorPicker

                    activeSlide={isActive}
                    rootColor={color.rootColor}
                    key={color.key}
                    index={color.key}
                    rgb={color.rgb}
                    cmyk={color.cmyk}
                    hasCmykChanged={color.hasCmykChanged}
                    setColors={setColors}
                    colors={colors}
                    switcher={switcher}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            text="Generate PDF"
            colors={colors}
            serializedSvg={serializedSvg}
            isGenerating={isGenerating}
            setIsGenerating={setIsGenerating}
            generated={generated}
            setGenerated={setGenerated}
          />
          <a
            className="download mobile-only-download"
            href={generated}
            target="_blank"
            rel="noreferrer"
            style={{
              visibility: generated ? 'initial' : 'hidden'
            }}
          >
            Download your PDF
          </a>
        </div>
        <Footer className="mobile-only-footer" />
    </div>
  );
}

export default App;

const Footer = ({className}) => (
  <footer className={className}>
    Made with ♥️ by <a href="https://twitter.com/jamesrplee" target="_blank" rel="noreferrer">@jamesrplee</a>.
    <br />
    <br />
    Built with <a href="https://reactjs.org/" rel="noreferrer">React</a>, <a href="https://generativeartistry.com/tutorials/piet-mondrian/" rel="noreferrer">Generative Artistry's Mondrian Grid</a> and <a href="https://make.cm" rel="noreferrer">Outfit Make</a>. Check out the repo on <a href="https://github.com/jamesrplee/mondrian-mapping" target="_blank" rel="noreferrer">Github</a>.
  </footer>
)

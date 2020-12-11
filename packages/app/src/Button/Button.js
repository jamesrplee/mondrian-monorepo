import React from 'react'
import axios from "axios";

import './Button.css';

export default function Button({
  setIsGenerating,
  isGenerating,
  setGenerated,
  text,
  colors,
  serializedSvg
}) {

    const generateAvatar = () => {
      setIsGenerating(true);

      const url =
        "https://api.stg.make.cm/make/t/e24e523b-25ce-4d52-ad1a-aaf7ed39a766/sync";

      const headers = {
        'Content-Type': 'application/json',
        'X-MAKE-API-KEY': 'e3comu3ku6ocYk+zuwKiSCuB2vHb3IndX+AXcOy8'
      }

      const data = {
        customSize: {
          width: 1000,
          height: 1000,
          unit: "px"
        },
        format: "pdf",
        fileName: "mondrian-map",
        contentDisposition: "inline",
        postProcessing: {
          colorSpace: 'cmyk',
          colorMapping: colors.map((color) => (
              {
                'fromRGB': `rgb(${color.rgb})`,
                'toCMYK': `cmyk(${color.cmyk.map((ink) => (
                  parseFloat(ink)/100
                ))})`,
              }
            ))
        },
        data: {
          svg: serializedSvg
        }
      };

      console.log(data)

      axios
        .post(url, data, {
          headers: headers
        })
        .then((response) => {
          const generatedPDF = response.data.resultUrl
          setGenerated(generatedPDF);
          setIsGenerating(false);
        })
        .catch((error) => {
          console.log(error);
          setIsGenerating(false);
        });
    };

  return (
    <div className="Button">
      <button
        disabled={isGenerating}
        className={isGenerating ? 'disabled' : ''}
        onClick={() => generateAvatar()}
      >
        {isGenerating ? 'Generating' : text}
        {isGenerating && <span className="spinner" />}
      </button>
    </div>
  );
}

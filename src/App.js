import React, { useEffect, useState } from 'react';
import fullpage from 'fullpage.js';
import { TypeAnimation } from 'react-type-animation';
import 'fullpage.js/dist/fullpage.css';
import './App.css';
import slides from './data/slides';

const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
const EMPTY_CURSOR_CLASS_NAME = 'empty-custom-type-animation-cursor';

const TypeTextComponent = (props) => {
  const { text } = props;
  if (!text) return null;
  return (
    <TypeAnimation
      cursor={false}
      className={CURSOR_CLASS_NAME}
      sequence={[
        text,
        3500,
        (el) => el.classList.add(EMPTY_CURSOR_CLASS_NAME),
      ]}
      wrapper="p"
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    new fullpage('#fullpage', {
      autoScrolling: true,
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      onLeave: (origin, destination, direction) => {
        // Control active slides to start typing animation
        setActiveSlide(destination.index);
      },
    });
  }, []);

  useEffect(() => {
    // Removes default watermark for fullpage.js
    const watermark = document.querySelector("#fullpage .fp-watermark");
    watermark && watermark.remove();
  }, []);

  return (
    <div id="fullpage">
      {slides.map((slide, index) => (
        <div className="section" key={index}>
        <div className="background" style={{ backgroundImage: slide.background }}></div>
          <div className="content">
              {(activeSlide === index) && (<TypeTextComponent text={slide.text} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

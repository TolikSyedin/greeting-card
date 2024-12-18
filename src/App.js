import React, { useEffect, useState } from 'react';
import fullpage from 'fullpage.js';
import './App.css';
import 'fullpage.js/dist/fullpage.css';
// import Typical from 'react-typical';
import { TypeAnimation } from 'react-type-animation';
 
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
const EMPTY_CURSOR_CLASS_NAME = 'empty-custom-type-animation-cursor';

const TypeTextComponent = (props) => {
  const { text } = props;
  console.log(text);
  if (!text) return null;
  return (
    <TypeAnimation
      cursor={false}
      className={CURSOR_CLASS_NAME}
      sequence={[
        text,
        3500,
        // (el) => el.classList.remove(CURSOR_CLASS_NAME),
        (el) => el.classList.add(EMPTY_CURSOR_CLASS_NAME),
      ]}
      wrapper="p"
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};
const slides = [
  {
    text: `
      В неї очі янтарно смарагдові,
      Її губи на смак як пуер,
      Ці волосся, кудлаті, привабливі,
      Що знаходжу я в ліжку тепер... `,
    background: "url('/images/1.png')"
  },
  {
    text: `
      Ці дбайливі, ласкаві долоні,
      Тонкі пальці, брови чорняві,
      Мене ніжно тримають в полоні
      В головній ролі у цій виставі.`,
    background: "url('/images/qvi.gif')"
  },
  {
    text: `
      Поруч з нею я в космос злітаю,
      Щоб зірки позбирати для нас,
      Під ногами я землю втрачаю,
      Та так міцно стою в одночас`,
    background: "url('/images/3.png')"
  },
  {
    text: `
      Все навколо магічним чином
      Без супротиву їй підкоряється.
      З нею час по-інакшому плине,
      Інші сенси в житті зʼявляються.`,
    background: "url('/images/4.png')"
  },
  {
    text: `
      Коли я загублюсь у тиші,
      Вона знайде мене наосліп,
      Сяйвом сонячним заполонивши
      Суматошний похмурий простір.`,
    background: "url('/images/5.png')"
  },
  {
    text: `
      Врятувала, знайшла і зцілила
      Серце вкрите глибокими шрамами,
      Я його віддаю бережливо,
      І пірнаю в волосся каштанове.`,
    background: "url('/images/6.jpg')"
  },
  {
    text: `
      Ми зустрілись в цей час не даремно,
      І позбувшись всіх зайвих тривог,
      Проміж нами кликоче буремно
      Це дихання - одне на двох`,
    background: "url('/images/7.jpg')"
  },
  {
    text: `
       Київ, 19.12.2024.`,
    background: "url('/images/2.png')"
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    new fullpage('#fullpage', {
      autoScrolling: true,
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      onLeave: (origin, destination, direction) => {
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

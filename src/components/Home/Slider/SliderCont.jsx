import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import one from "./Images/one.jpg";
import two from "./Images/two.jpg";
import three from "./Images/three.jpg";
import four from "./Images/four.jpg";
import five from "./Images/five.jpg";
import six from "./Images/six.jpg";
import seven from "./Images/seven.jpg";
import eight from "./Images/eight.jpg";
import nine from "./Images/nine.jpg";
import ten from "./Images/ten.jpg";
import eleven from "./Images/eleven.jpg";
import twelve from "./Images/twelve.jpg";

const SliderCont = () => {
  const index = useRef(0);
  const elements = [
    {
      image: `${one}`,
      title: `What is the productivity of your solution?`,
      ind: 0,
    },

    {
      image: `${two}`,
      title: "How productive is your end user?",
      ind: 1,
    },
    {
      image: `${three}`,
      title: "Are your Supply and Demand plans sensible?",
      ind: 2,
    },
    {
      image: `${four}`,
      title: "What if the price of Raw materials surges by 40%?",
      ind: 3,
    },
    {
      image: `${five}`,
      title:
        "Why should you produce in the first place if you can't even sell at the price you thought you would?",
      ind: 4,
    },
    {
      image: `${six}`,
      title:
        "How much to buy and when to buy is often strategic discussion, your ROP/ROQ/MOQ etc.. are just gimmicks?",
      ind: 5,
    },
    {
      image: `${seven}`,
      title:
        "Did you know that the risk of sudden price change can turn your S&OP upside down?",
      ind: 6,
    },
    {
      image: `${eight}`,
      title:
        "Why do you even forecast, When you can replenish automatically based on consumption rate?",
      ind: 7,
    },
    {
      image: `${nine}`,
      title: "What makes you think your inventory level is high?",
      ind: 8,
    },
    {
      image: `${ten}`,
      title:
        "Are you using market research data in your market demand forecasting?",
      ind: 9,
    },
    {
      image: `${eleven}`,
      title:
        "How real are your lead times, do you even bother to update it based on reality?",
      ind: 10,
    },
    {
      image: `${twelve}`,
      title:
        "Do you know the in built algorithm in Supply Chain software you decide to buy?",
      ind: 11,
    },
  ];

  const [image, setImage] = useState(elements[index.current].image);
  const [title, setTitle] = useState(elements[index.current].title);
  // const [title, setTitle] = useState(elements[7].title);
  const [ind, setInd] = useState(elements[index.current].ind);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      var num = Math.trunc(Math.random() * 20) + 1;
      num %= 12;
      // index.current = index.current + 1;
      // index.current = index.current % elements.length;
      // setImage(elements[index.current].image);
      // setTitle(elements[index.current].title);
      // setInd(elements[index.current].ind);
      setImage(elements[num].image);
      setTitle(elements[num].title);
      setInd(elements[num].ind);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div id="slider">
      <img src={image} alt="" id="slider-img" />
      <p className={`slider-text${ind}`}>
        <span>{title}</span>
      </p>
    </div>
  );
};

export default SliderCont;

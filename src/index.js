import React from "react";
import ReactDOM from "react-dom";

//const name = "donNo1";
//const currDate = new Date().toLocaleDateString();
//const currTime = new Date().toLocaleTimeString();
//ReactDOM.render(
//<p>
//<h1>Suno, Duniya Walo {name}</h1>
//<p>Current date is = {currDate} </p>
//<p>Current Time is = {currTime}</p>
//</>,
//document.getElementById("root")
//);
const name = "DonNo1 Bharat sarkar paanWali gali";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/201/300";
const img3 = "https://picsum.photos/202/300";
const img4 = "https://picsum.photos/203/300";
const img5 = "https://picsum.photos/204/300";
const img6 = "https://picsum.photos/205/300";
const img8 = "https://picsum.photos/206/300";
const img9 = "https://picsum.photos/207/300";
const img10 = "https://picsum.photos/208/300";
const img11 = "https://picsum.photos/209/300";
const img12 = "https://picsum.photos/207/300";
const img13 = "https://picsum.photos/203/300";
const img14 = "https://picsum.photos/202/300";
const img15 = "https://picsum.photos/200/300";

const links = "https://www.thapatechnical.com";
ReactDOM.render(
  <>
    <h1 contentEditable="true"> My name is {name}</h1>,
    <img src={img1} alt="randomImages" />
    <img src={img2} alt="randomImages" />
    <img src={img3} alt="randomImages" />
    <img src={img4} alt="randomImages" />
    <img src={img5} alt="randomImages" />
    <img src={img6} alt="randomImages" />
    <img src={img8} alt="randomImages" />
    <img src={img9} alt="randomImages" />
    <img src={img10} alt="randomImages" />
    <img src={img11} alt="randomImages" />
    <img src={img12} alt="randomImages" />
    <img src={img13} alt="randomImages" />
    <img src={img14} alt="randomImages" />
    <a href={links} target="me">
      <img src={img15} alt="randomImages" />
    </a>
  </>,
  document.getElementById("root")
);

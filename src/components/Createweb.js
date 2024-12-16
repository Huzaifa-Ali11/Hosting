import { useState, useEffect } from "react"
import React from 'react'

export default function Createweb() {

  const WaytobuildWebsite = [
    {
      headStatment: " Choose how to build",
      bottomStatment: "Let AI generate a unique website for you or pick from 150 professional templates – fully customisable to your liking.",
      imgUrl: "walling-XLqiL-rz4V8-unsplash.jpg"
    },
    {
      headStatment: "Customise Your Website",
      bottomStatment: "Keep what you like. Discard what you don't. Easily move elements and experiment with different colour schemes and fonts. No coding or web design skills required. ",
      imgUrl: "colourful background laptop.jpg"
    },
    {
      headStatment: " Go live",
      bottomStatment: "Select the perfect domain name for your business or project, and launch your brand-new website with performance and security you can rely on.",
      imgUrl: 'html-css-collage-concept-with-person.jpg'
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i < WaytobuildWebsite.length - 1 ? i + 1 : 0));
    }, 1500);
    return  () => clearInterval(interval);
  })

 const currentLine = WaytobuildWebsite[index];
  return (
    <div>
      <div className="container d-flex" style={{ justifyContent: 'space-evenly', color: '#2f1c6a', padding: '23px 2px' }}>
        <div >
          <h1 style={{ margin: '0px', padding: '0px 85px' }}>Create a website in 3 easy steps </h1>
          <div style={{ padding: '75px 110px', color: 'blue' }}>
            <h3><span style={{color:'#2f1c6a'}}>{index + 1}.</span> {currentLine.headStatment}</h3>
            <p>{currentLine.bottomStatment}</p>
          </div>
          <div>
            <button type='button' style={{ padding: '10px 50px', margin: '34px 190px', color: 'white', backgroundColor: 'black', borderRadius: '15px' }}><b>Get Started</b></button>
          </div>
        </div>
        <div >
          <img src={currentLine.imgUrl} style={{ height: '520px', width: '560px', borderRadius: '15px' }} alt="img" />
        </div>
      </div>
    </div>
  );
}
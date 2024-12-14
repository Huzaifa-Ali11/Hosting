import React from 'react'

export default function Createweb() {
  return (
    <div>
      <div className="container d-flex" style={{justifyContent: 'space-evenly', color: '#2f1c6a', padding: '23px 2px'}}>
        <div style={{ width: '500px', height: '525px', p: '35px'}}>
            <h1>Create a website in 3 easy steps</h1>
            <div style={{margin: '60px 30px', color: 'blue'}}>
            <h3>1. Choose how to build</h3>
            <p>Let AI generate a unique website for you or pick from 150 professional templates – fully customisable to your liking.</p>
            </div>
            <div> 
                <button type='button' style={{    height: '48px', width: '182px', margin: '84px 157px',color:'white', backgroundColor: 'black', borderRadius: '15px'}}><b>Get Started</b></button>
            </div>
            {/* <h1>Create a website in 3 easy steps</h1>
            <h3>2. Customise Your Website</h3>
            <p>Keep what you like. Discard what you don't. Easily move elements and experiment with different colour schemes and fonts. No coding or web design skills required.</p>     
            <h1>Create a website in 3 easy steps</h1>
            <h3>3. Go live</h3> */}
            {/* <p> Select the perfect domain name for your business or project, and launch your brand-new website with performance and security you can rely on.</p> */}
        </div>
        <div style={{ width: '500px', height: '525px' }}>
            <img src="walling-XLqiL-rz4V8-unsplash.jpg" style={{height:'521px' ,width:'496px', borderRadius:'15px'}} alt="img" />
        </div>
      </div>
    </div>
  );
}

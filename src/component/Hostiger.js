import React from 'react'

export default function Hostiger() {
  return (
    <div className='container d-flex' style={{ justifyContent: 'space-around', color: '#2f1c6a', marginTop: '35px' }}>
      <div style={{ width: '500px', height: '525px' }}>
        <p style={{ fontSize: '20px' }}><b>Up to <span style={{ color: '#673de6' }}>74%</span> off Website builder</b></p>
        <h1>Biggest ever <span style={{ color: '#673de6' }}>Cyber Week</span> sale</h1>
        <div style={{ margin: '25px 2px' }}>
          <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" />Free domain name ?</p>
          <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" />Build your site fast, with AI</p>
          <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" />24/7 live customer support</p>
        </div>
        <span style={{ display: 'flex', alignItems: 'baseline', fontSize: '25px' }}>Rs. <h1><b>529</b></h1>/mo</span>
        <h3>+3 months free</h3>
        <div>
          <button type="button" className="btn btn-dark " style={{ margin: '5px' }} >Cliam deal</button>
          <button type="button" className="btn btn-light " style={{ margin: '5px' }}>3 : 19 : 16 : 59</button>
        </div>
        <div>
          <p>30-day money-back guarantee</p>
        </div>
      </div>
      <div style={{ width: '540px', height: '525px', display: 'flex', alignItems: 'center' }}>
        <img src="percent-70 (2).png" width={'400px'} height={'436px'} alt="logo" />
        <img src="icons8-o-84.png" width={'100px'} height={'100px'} alt="logo" />
        <img src="icons8-f-84.png" width={'100px'} height={'100px'} alt="logo" />
      </div>
    </div>
  )
}

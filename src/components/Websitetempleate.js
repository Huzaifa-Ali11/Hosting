import React from 'react'

export default function Websitetempleate() {
   return (
        <div>
            <div className='d-flex'>
                <div>
                    <img src="technology.jpg" width={'725px'} height={'645px'} alt="img" />
                </div>
                <div style={{ padding: '95px 129px', backgroundColor: 'black', color: 'white' }}>
                    <h1>Let AI do the hard work</h1>
                    <p style={{ margin: '25px 0px' }}>Choose the type of website you want and simply describe what you need. Let AI craft a unique website for you with relevant images and bespoke content. Use our powerful AI tools to fine-tune your website until you're ready to hit 'Go live'.</p>
                    <div>
                        <button type='button' style={{  padding: '10px 50px', margin: '25px auto', borderRadius: '15px' }}><b>Get Started</b></button>
                    </div>
                </div>
            </div>
            <div className="container" style={{ margin: '65px auto', textAlign: 'center', color: '#2f1c6a' }}>
                <h1>Choose a website template that inspires you</h1>
                <div style={{ margin: '40px 215px' }}>
                    <p style={{ margin: '0px' }}>Take advantage of 150 responsive, designer-made templates, suitable for businesses, eCommerce stores, portfolios, landing pages, blogs, and more.</p>
                </div>
                <button type='button' style={{   padding: '10px 50px', margin: '25px auto', borderRadius: '15px', color: 'white', backgroundColor: 'black' }}><b>Get Started</b></button>
            </div>
            <div className='container' style={{ textAlign: 'center', color: '#2f1c6a' }}>
                <h1>Build a website your way</h1>
                <p style={{ margin: '35px auto' }}>Effortlessly perfect your website with user-friendly, intuitive design tools.</p>
                <div className='d-flex' style={{ justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    <div style={{ width: '330px', padding:'6px 13px', backgroundColor: '#f2f2f270', borderRadius: '15px' }}>
                        <img src="icons8-drag-and-drop-70.png" height={'100px'} width={'100px'} alt="logo" />
                        <h4>Drag-n-drop</h4>
                        <p>Simply pick up the content you like, drag it where you want it, and drop it into place.</p>
                    </div>
                    <div style={{ width: '330px', padding:'6px 13px', backgroundColor: '#f2f2f270', borderRadius: '15px' }}>
                        <img src="icons8-grid-view-48.png" height={'100px'} width={'100px'} alt="logo" />
                        <h4>Use smart grid</h4>
                        <p>Keep everything perfectly aligned as you fine-tune your website.</p>
                    </div>
                    <div style={{width: '330px', padding:'6px 13px', backgroundColor: '#f2f2f270', borderRadius: '15px' }}>
                        <img src="icons8-available-updates-48.png" height={'100px'} width={'100px'} alt="logo" />
                        <h4>Change colors & fonts</h4>
                        <p>Explore what truly captures the essence of your brand or project.</p>
                    </div>
                    <div style={{ width: '330px', padding:'6px 13px', marginTop: '30px', backgroundColor: '#f2f2f270', borderRadius: '15px' }}>
                        <img src="icons8-tools-70.png" height={'100px'} width={'100px'} alt="logo" />
                        <h4>Customize elements</h4>
                        <p>Rearrange elements to create the website you've always wanted.</p>
                    </div>
                    <div style={{ width: '330px', padding:'6px 13px', marginTop: '30px', backgroundColor: '#f2f2f270', borderRadius: '15px' }}>
                        <img src="icons8-laptop-and-iphone-x-50.png" height={'100px'} width={'100px'} alt="logo" />
                        <h4>Desktop and mobile editing</h4>
                        <p>Create, edit, and publish your website with ease on your chosen device.</p>
                    </div>
                </div>
                <div style={{margin:'35px 0px'}}>
                    <button type='button' style={{ padding: '10px 50px', margin: '34px 190px', backgroundColor:'black', color: 'white', borderRadius: '15px' }}><b>Get Started</b></button>
                </div>
            </div>
            <div className='d-flex'>
                <div>
                    <img src="621d25cd92a9c1000165b198.jpg" width={'725px'} height={'645px'} alt="img" />
                </div>
                <div style={{ padding: '95px 129px', backgroundColor: 'black', color: 'white' }}>
                    <h1>Earn more with eCommerce features</h1>
                    <p style={{ margin: '25px -1px' }}>Everything you need to launch and grow an eCommerce business, all in one place. Sell up to 500 products with no hidden transaction fees. Pick from <a href="/"><b style={{color: 'white'}}>20+ payment methods</b></a> to provide your customers with a completely seamless shopping experience.</p>
                    <div>
                        <button type='button' style={{ padding:'10px 45px', margin: '90px 70spx', borderRadius: '15px' }}><b>Get Started</b></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

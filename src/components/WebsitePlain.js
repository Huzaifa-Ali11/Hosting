import React from 'react'

export default function WebsitePlain() {
    return (
        <div style={{ margin: '60px 0px' }}>
            <div className="container" style={{ color: 'rgb(47, 28, 106)', textAlign: 'center' }}>
                <h1>Find the perfect website builder plan for you</h1>
                <p style={{ margin: '30px 0px' }}>Get your idea online risk-free with a 30-day money-back guarantee.</p>
                {/* <div style={{ display: 'flex', justifyContent: 'center', margin: '25px 0px' }}>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    </div>
                </div> */}
                <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '0px 150px', alignItems: 'flex-end', textAlign: 'justify', }}>
                    <div style={{ border: '2px solid #d5d5d5',  padding: '25px 15px', borderRadius: '20px' }}>
                        <h3>Premium Website Builder</h3>
                        <p style={{margin:'0px'}}>Get the essentials you need to create a</p>
                        <p style={{margin:'0px'}}>website.</p><br />
                        <span className='d-flex'>
                            <p style={{ textDecoration: 'line-through' }}>Rs.1,999</p>
                            <h5 style={{ marginLeft: '15px', backgroundColor: 'chartreuse', width: '61px', borderRadius: '6px' }}> 75%of</h5>
                        </span><br />
                        <span style={{ display: 'flex', alignItems: 'baseline' }}>Rs. <h2 style={{ fontSize: '45px' }}><b>529</b></h2>/mo</span>
                        <h5 style={{ color: '#2323de' }}>+3 months free</h5>
                        <button type="button" style={{ padding:'8px 115px', margin: '5px', borderRadius: '11px' }} >Choose plan</button>
                        <p>Rs.1,099/mo when you renew</p>
                        <hr /><br />
                        <h3>Top features</h3>
                        <div style={{ margin: '25px 2px' }}>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}> <dfn title='The maximum of website allowed per account.'>100 websites</dfn></a></p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title='Create up to email addresses and forwarder at exta cost.Each mailbox come with 1GB of storage space.'>Free email</dfn></a></p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" />Drag&Drop e ditor</p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" />150 templates</p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title='Communication with customers more efficienty, optimize campaighs, and track website data with thirdparty marketing tools, including Google Analyticas, Facebook Pixel, WhatApp, Google AdSense, and much more.'>Marketing integrations</dfn></a></p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title="Create, edit, publish, and maintain your website seamlessly on both mobile and desktop device. Make change to your site on the go, ensuring it's always up to date.">Mobile editor</dfn></a></p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title='Buy our services risk-free and try them with peace of mind .You can get a full refund of your hosting fee(excluding domain registration fee) within 30 days of signing up.'>30-Day money-back gurantee</dfn></a></p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title='Your success is our first  prioity. Contact our customer support 24/7 via live chat.'>24/7  customer support</dfn></a></p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title="Purchase your website bulider plan for 12 months or loger and claim your free domain name for a year. Option range from popular extensions like .com and .net to niche-specific TIDs like .store, .live, and .tech.">free domain (Rs.2,299 value)</dfn></a></p>
                        </div>
                        <h3>AI tools</h3>
                        <div style={{ margin: '25px 2px' }}>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title="Launch your website in minutes with AI Website Bulider.Just answer three question and let the AI create asite with SEO-friendly content ,unique copy, and topical images. Use what you like, discardwhat you don't, and customerize it all with the darg-and-drop editor.">Al websites builder</dfn></a></p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-cross-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title='Make yourwebsite stand  out with uniqe visuals the fifty images are on us, so get creative!'>Al image generator</dfn></a></p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-cross-48.png" width={'25px'} alt="" /><span style={{ color: 'rgb(47, 28, 106)' }}>Al writer</span></p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-cross-48.png" width={'25px'} alt="" /><span style={{ color: 'rgb(47, 28, 106)' }}>Al blog generator</span></p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-cross-48.png" width={'25px'} alt="" /><span style={{ color: 'rgb(47, 28, 106)' }}>Al heatmapes</span></p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-cross-48.png" width={'25px'} alt="" /><span style={{ color: 'rgb(47, 28, 106)' }}>Al SEO tools</span></p>
                        </div>
                        <h3>eCommerce</h3>
                        <div style={{ margin: '25px 2px' }}>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-cross-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title='Manaye eCommerce with ease. Sell up to 500 products, accept online payments, and set up email notifications. Use automatic tools for order and inventory management and scheduling client appointments and consultaions.'>eCommerce features</dfn></a></p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-cross-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title="We don't change any transaction fees, so you keep as much of your pofit as possible. However, payment providers may charge an extra transaxtion fee, which is out of our control.">0% transaction fees</dfn></a></p>
                            <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-cross-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title="The payment methods available for your store depent on where you,re selling your location, currency, and who you're selling to.">20+ payment methods</dfn></a></p>
                        </div>
                    </div>
                    <div style={{ border: '2px solid #0822ff', textAlign: 'justify', borderRadius: '20px' }}>
                        <div>
                            <h3 style={{ textAlign: 'center', color: 'white', height: '38px', margin: '0px', backgroundColor: '#7131e7', borderRadius: '18px 18px 0px 0px' }}><b>MOST POPULAR</b></h3>
                        </div>
                        <div style={{ padding: '25px 19px' }}>
                            <h3>Business Website Builder</h3>
                            <p style={{  margin: '0px' }} >Grow with advanced AI tools and eCommerce </p>
                            <p style={{ margin: '0px' }}>features</p>
                            <br />
                            <span className='d-flex'>
                                <p style={{ textDecoration: 'line-through' }}>Rs.2,499</p>
                                <h5 style={{ marginLeft: '15px', backgroundColor: 'chartreuse', width: '61px', borderRadius: '6px' }}> 67%of</h5>
                            </span><br />
                            <span style={{ display: 'flex', alignItems: 'baseline' }}>Rs. <h2 style={{ fontSize: '45px' }}><b>829</b></h2>/mo</span>
                            <h5 style={{ color: '#2323de' }}>+3 months free</h5>
                            <button type="button" style={{  padding:'8px 115px', margin: '5px', borderRadius: '11px', backgroundColor: '#323030', color: 'white' }} >Choose plan</button>
                            <p>Rs.1,899/mo when you renew</p>
                            <hr /><br />
                            <h3>Top features</h3>
                            <div style={{ margin: '25px 2px' }}>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title='The maximum of website allowed per account.'>100 websites</dfn></a></p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title='Create up to email addresses and forwarder at exta cost.Each mailbox come with 1GB of storage space.'>Free email</dfn></a></p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" />Drag&Drop editor</p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" />150 templates</p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title='Communication with customers more efficienty, optimize campaighs, and track website data with thirdparty marketing tools, including Google Analyticas, Facebook Pixel, WhatApp, Google AdSense, and much more.'>Marketing integrations</dfn></a></p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title="Create, edit, publish, and maintain your website seamlessly on both mobile and desktop device. Make change to your site on the go, ensuring it's always up to date.">Mobile editor</dfn></a></p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title='Buy our services risk-free and try them with peace of mind .You can get a full refund of your hosting fee(excluding domain registration fee) within 30 days of signing up.'>30-Day money-back gurantee</dfn></a></p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title='Your success is our first  prioity. Contact our customer support 24/7 via live chat.'>24/7  customer support</dfn></a></p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title="Purchase your website bulider plan for 12 months or loger and claim your free domain name for a year. Option range from popular extensions like .com and .net to niche-specific TIDs like .store, .live, and .tech.">free domain (Rs.2,299 value)</dfn></a></p>
                            </div>
                            <h3>AI tools</h3>
                            <div style={{ margin: '25px 2px' }}>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title="Launch your website in minutes with AI Website Bulider.Just answer three question and let the AI create asite with SEO-friendly content ,unique copy, and topical images. Use what you like, discardwhat you don't, and customerize it all with the darg-and-drop editor.">Al websites builder</dfn></a></p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title='Make yourwebsite stand  out with uniqe visuals the fifty images are on us, so get creative!'>Al image generator</dfn></a></p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" />Al writer</p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" />Al blog generator</p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" />Al heatmapes</p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" />Al SEO tools</p>
                            </div>
                            <h3>eCommerce</h3>
                            <div style={{ margin: '25px 2px' }}>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title='Manaye eCommerce with ease. Sell up to 500 products, accept online payments, and set up email notifications. Use automatic tools for order and inventory management and scheduling client appointments and consultaions.'>eCommerce features</dfn></a></p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title="We don't change any transaction fees, so you keep as much of your pofit as possible. However, payment providers may charge an extra transaxtion fee, which is out of our control.">0% transaction fees</dfn></a></p>
                                <p style={{ display: 'flex', margin: '0px' }}><img src="icons8-correct-48.png" width={'25px'} alt="" /><a href="/" style={{ color: 'rgb(47, 28, 106)' }}><dfn title="The payment methods available for your store depent on where you,re selling your location, currency, and who you're selling to.">20+ payment methods</dfn></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{ color: '#006eff' }}><b><a href="/">Payment terms</a></b></p>
            </div >
        </div >

    )
}

import React from 'react'

export default function Footer() {
    return (
        <div style={{ backgroundColor: '#f4f5ff' }}>
            <div style={{paddingTop: '25px'}}>
                <div className=" d-flex" style={{ justifyContent: 'space-evenly', color: '#2f1c6a', margin: '15px 40px' }}>
                    <div style={{padding: '0px 9px' }}>
                        <h3>Hosting</h3>
                        <p>Web hosting</p>
                        <p>WordPress hosting</p>
                        <p>VPS hosting</p>
                        <p>Business email</p>
                        <p>Cloud hosting</p>
                        <p>WooCommerce hosting</p>
                        <p>Hosting for agencies</p>
                        <p>Mincraft hosting</p>
                        <p>Google Workspace</p>
                    </div>
                    <div style={{padding: '0px 9px'}}>
                        <h3>Domain</h3>
                        <p>Domain name search</p>
                        <p>Cheap domain names</p>
                        <p>Free domain</p>
                        <p>WHOIS Lookup</p>
                        <p>Free SSL certificate</p>
                        <p>Domain transfer</p>
                        <p>Domain extensions</p>
                    </div>
                    <div style={{ padding: '0px 9px' }}>
                        <h3>Tools</h3>
                        <p>Website Builder</p>
                        <p>AI Website Builder</p>
                        <p>eCommerce Website Builder</p>
                        <p>AI Logo Gernator</p>
                        <p>Migrate to Hostinger</p>
                    </div>
                    <div style={{ padding: '0px 9px' }}>
                        <h3>Information</h3>
                        <p>Pricing</p>
                        <p>Reviews</p>
                        <p>Affiliate program</p>
                        <p>Roadmap</p>
                        <p>Wall of fame</p>
                        <p>System status</p>
                        <p>Sitemap</p>
                    </div>
                    <div style={{ padding: '0px 11px' }}>
                        <h3>COMPANY</h3>
                        <p>About Hostinger</p>
                        <p>Our tecnology</p>
                        <p>Blog</p>
                    </div>
                    <div style={{ padding: '0px 11px' }}>
                        <h3>SUPPORT</h3>
                        <p>Tutorials</p>
                        <p>Knoledge base</p>
                        <p>VContact us</p>
                        <p>Report abuse</p>
                    </div>
                </div>
                <div >
                    <nav className=" navbar-expand-lg " style={{ fontSize: 'large' }}>
                        <div className="container-fluid d-flex">
                            <div>
                                <img src="icons8-h-64.png" style={{ height: '35px', width: '60px' }} alt="logo" />
                                <a className="navbar-brand" href="/"><strong style={{ color: '#2f1c6a' }}>HOSTIGER</strong></a>
                            </div>
                            <div className=" navbar-collapse" style={{ justifyContent: 'flex-end' }} id="navbarSupportedContent">
                                <div className="d-flex" >
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item" style={{ marginRight: '25px' }}>
                                            <a className="nav-link" href="/">
                                                <img src="icons8-linkedin-logo-30.png" alt="logo" />
                                            </a>
                                        </li>
                                        <li className="nav-item" style={{ marginRight: '25px' }}>
                                            <a className="nav-link" href="/">
                                                <img src="icons8-twitter-logo-30.png" alt="logo" />
                                            </a>
                                        </li>
                                        <li className="nav-item" style={{ marginRight: '25px' }}>
                                            <a className="nav-link" href="/">
                                                <img src="icons8-instagram-logo-30.png" alt="logo" />
                                            </a>
                                        </li>
                                        <li className="nav-item" style={{ marginRight: '25px' }}>
                                            <a className="nav-link" href="/">
                                                <img src="icons8-youtube-logo-30.png" alt="logo" />
                                            </a>
                                        </li>
                                        <li className="nav-item" style={{ marginRight: '25px' }}>
                                            <a className="nav-link" href="/">
                                                <img src="icons8-facebook-logo-30.png" alt="logo" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav className=" navbar-expand-lg " style={{ fontSize: 'large', alignItems: 'center' }}>
                        <div className="container-fluid d-flex">
                            <div>
                                <a className="navbar-brand" href="/" style={{ color: '#2f1c6a',marginLeft: '15px' }}>Payment methods</a>
                            </div>
                            <div className=" navbar-collapse" style={{ justifyContent: 'flex-end' }} id="navbarSupportedContent">
                                <div className="d-flex" >
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item" style={{ marginRight: '25px' }}>
                                            <a className="nav-link" href="/" style={{ color: '#2f1c6a' }}>Privacy policy</a>
                                        </li>
                                        <li className="nav-item " style={{ marginRight: '25px' }}>
                                            <a className="nav-link" href="/" style={{ color: '#2f1c6a' }}>Refund policy</a>
                                        </li>
                                        <li className="nav-item " style={{ marginRight: '25px' }}>
                                            <a className="nav-link" href="/" style={{ color: '#2f1c6a' }}>Trems of services</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <hr />
                    <nav className=" navbar-expand-lg " style={{ fontSize: 'large', alignItems: 'center' }}>
                        <div className="container-fluid d-flex">
                            <div>
                                <a href="/"><p style={{ fontSize: '15px', margin: '0px', color: '#2f1c6a' }}> © 2004-2024 hostinger.pk - Premium Web Hosting, Cloud, VPS, AI Website Builder & Domain Registration Services</p></a>
                            </div>
                            <div className="navbar-collapse" style={{ justifyContent: 'flex-end' }}>
                                <div className="d-flex" >
                                    <ul>
                                        <li style={{ marginRight: '25px' }}>
                                            <a href="/" style={{ color: '#2f1c6a' }}>Privacy policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    )
}
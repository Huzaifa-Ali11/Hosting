import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ fontSize: 'large',boxShadow:'0px 0px 13px 0px gray' }}>
            <div className="container-fluid d-flex">
                <div>
                    <img src="icons8-h-64.png" style={{ height: '35px', width: '60px' }} alt="logo" />
                    <a className="navbar-brand" href="/"><strong style={{color: '#2f1c6a'}}>HOSTIGER</strong></a>
                </div>
                <div>
                    <img src="icons8-pakistan-48.png" style={{ width: '34px' }} alt="logo" />
                    <a className="navbar-brand" href="/"><span  style={{color: '#2f1c6a'}}>English</span></a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" navbar-collapse" style={{ justifyContent: 'flex-end' }} id="navbarSupportedContent">
                    <div className="d-flex" >
                        <ul className="navbar-nav ">
                            <li className="nav-item dropdown" style={{ marginRight: '15px' }}>
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   <span style={{color: '#2f1c6a'}}>WordOress</span>
                                </a>
                                <ul className="dropdown-menu" style={{ padding: '15px', borderRadius: '0px 38px', boxShadow: '0px 3px 19px #aaaaaa' }}>
                                    <li style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="icons8-wordpress-48.png" alt="logo" />
                                        <a className="dropdown-item" href="/">
                                            <div style={{color: '#2f1c6a'}}>
                                                <h5>Management Wordpress</h5>
                                                <p>Premium built-in features and AI tools included.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="icons8-woocommerce-48.png" alt="logo" />
                                        <a className="dropdown-item" href="/">
                                            <div style={{color: '#2f1c6a'}}>
                                                <h5>Managed WooCommerce</h5>
                                                <p>Start and scale your eCommerce website.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown" style={{ marginRight: '15px' }}>
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span  style={{color: '#2f1c6a'}}>Website builder</span>
                                </a>
                                <ul className="dropdown-menu" style={{ padding: '15px', borderRadius: '0px 38px', boxShadow: '0px 3px 19px #aaaaaa' }}>
                                    <li style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="icon2.png" alt="logo" />
                                        <a className="dropdown-item" href="/">
                                            <div style={{color: '#2f1c6a'}}>
                                                <h5>Hostinger Website Builder</h5>
                                                <p>Create your website with ease.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="shoppingicon.png" alt="logo" />
                                        <a className="dropdown-item" href="/">
                                            <div style={{color: '#2f1c6a'}}>
                                                <h5>eCommerce Website Builder</h5>
                                                <p>All the tools you need to build an online store.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown" style={{ marginRight: '15px' }}>
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span  style={{color: '#2f1c6a'}}>Hosting</span>
                                </a>
                                <ul className="dropdown-menu" style={{ padding: '15px', borderRadius: '0px 38px', boxShadow: '0px 3px 19px #aaaaaa' }}>
                                    <li style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="icons8-wordpress-48.png" alt="logo" />
                                        <a className="dropdown-item" href="/">
                                            <div style={{color: '#2f1c6a'}}>
                                                <h5>Web hosting</h5>
                                                <p>For small to medium websites.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="icons8-woocommerce-48.png" alt="logo" />
                                        <a className="dropdown-item" href="/">
                                            <div style={{color: '#2f1c6a'}}>
                                                <h5>Cloud hosting</h5>
                                                <p>For large scale projects.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="icons8-woocommerce-48.png" alt="logo" />
                                        <a className="dropdown-item" href="/">
                                            <div style={{color: '#2f1c6a'}}>
                                                <h5>VPS hosting</h5>
                                                <p>Dedicated resources to scale.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="icons8-woocommerce-48.png" alt="logo" />
                                        <a className="dropdown-item" href="/">
                                            <div style={{color: '#2f1c6a'}}>
                                                <h5>Business email</h5>
                                                <p>Promote your business with every</p>
                                                <p>outreach.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item" style={{ marginRight: '15px' }}>
                                <a className="nav-link" href="/"><span style={{color: '#2f1c6a'}}>Pro</span></a>
                            </li>
                            <li className="nav-item" style={{ marginRight: '15px' }}>
                                <a className="nav-link" href="/"><span style={{color: '#2f1c6a'}}>Domains</span></a>
                            </li>
                            <li className="nav-item" style={{ marginRight: '15px' }}>
                                <button type="button" className="btn btn-dark">log in</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{fontSize:'large'}}>
            <div className="container-fluid d-flex">
                <div>
                    <img src="icons8-h-64.png" style={{height: '35px', width: '60px'}} alt="logo" />
                <a className="navbar-brand" href="/"><strong>HOSTIGER</strong></a>
                </div>
                <div>
                    <img src="icons8-pakistan-48.png" style={{height: '34px', width: '34px'}} alt="logo" />
                <a className="navbar-brand" href="/">English</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" navbar-collapse" style={{justifyContent: 'flex-end'}} id="navbarSupportedContent">
                    <div className="d-flex" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" style={{marginRight: '25px'}}>
                                <a className="nav-link dropdown-toggle"  href="/">WordOress </a>
                            </li>
                            <li className="nav-item " style={{marginRight: '25px'}}>
                                <a className="nav-link dropdown-toggle " href="/">Website builder</a>
                            </li>
                            <li className="nav-item dropdown" style={{marginRight: '25px'}}>
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Hosting
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item" style={{marginRight: '25px'}}>
                                <a className="nav-link" href="/">Pro</a>
                            </li>
                            <li className="nav-item" style={{marginRight: '25px'}}>
                                <a className="nav-link" href="/">Domains</a>
                            </li>
                            <li className="nav-item" style={{marginRight: '25px'}}>
                            <button type="button" className="btn btn-dark">log in</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

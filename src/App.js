import React from 'react'
import Alert from './components/Alert'
import Navbar from './components/Navbar';
import Hostiger from './components/Hostiger';
import Strick from './components/Strick';
import WebsitePlain from './components/WebsitePlain';
import Createweb from './components/Createweb';
import Footer from './components/Footer';
import Websitetempleate from './components/Websitetempleate';
import Newblog from './components/Newblog';
import WebsiteBuilder from './components/WebsiteBuilder';


export default function App() {
  return (
    <div>
      <div style={{ position: 'sticky',top: '0', zIndex: '10', backgroundColor: 'white'}}>
        <Alert />
        <Navbar />
      </div>
      <Hostiger />
      <Strick />
      <WebsitePlain />
      <Createweb />
      <Websitetempleate />
      <Newblog />
      <WebsiteBuilder />
      <Footer />
    </div>
  );
}

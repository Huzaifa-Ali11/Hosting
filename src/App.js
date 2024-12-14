import React from 'react'
import Alert from './component/Alert'
import Navbar from './component/Navbar';
import Hostiger from './component/Hostiger';
import Strick from './component/Strick';
import WebsitePlain from './component/WebsitePlain';
import Createweb from './component/Createweb';
import Footer from './component/Footer';
import Websitetempleate from './component/Websitetempleate';
import Newblog from './component/Newblog';
import WebsiteBuilder from './component/WebsiteBuilder';


export default function App() {
  return (
    <div>
      <>
      <Alert/>
      <Navbar/>
      <Hostiger/>
      <Strick/>
      <WebsitePlain/>
      <Createweb/>
      <Websitetempleate/>
      <Newblog/>
      <WebsiteBuilder/>
      <Footer/>
      </>
    </div>
  );
}

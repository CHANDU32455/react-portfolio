import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import PortfolioWebsite from './pages/portfolio';
import Resume from './pages/resume';
import Bloglist from './pages/Bloglist';
import GuideToInstallingUbuntuLinux from './blogs/blog1';
import GettingStartedwithReactJS from './blogs/blog2';
import MasteringCssGridAndFlexbox from './blogs/blog3';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<PortfolioWebsite />} />
          <Route path="/resume" element={<Resume />} />

          <Route path='/blogs' element={<Bloglist/>} />
          <Route path='/blogs/guide-to-installing-ubuntu-linux' element={<GuideToInstallingUbuntuLinux/>} />
          <Route path='/blogs/getting-started-with-reactjs' element={<GettingStartedwithReactJS/>} />
          <Route path='/blogs/mastering-css-grid-and-flexbox' element={<MasteringCssGridAndFlexbox/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import PortfolioWebsite from './pages/portfolio';
import Resume from './pages/resume';
import ProjectsSection from './pages/ProjectsSection';
import Bloglist from './pages/Bloglist';
import ServicesList from './pages/serviceslist';
import GuideToInstallingUbuntuLinux from './blogs/blog1';
import GettingStartedwithReactJS from './blogs/blog2';
import MasteringCssGridAndFlexbox from './blogs/blog3';
import ReactHooks from './blogs/blog4';
import IndexedDBGuide from './blogs/indexdb1';
import IndexedDBsetup from './blogs/indexdb2';
import IndexedDBadvanced from './blogs/indexdb3';
import Rough from './components/rough';


function App() {
  return (
    <>
    
    <Router>
      {/*<BuyMeACoffeeWidget /> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<PortfolioWebsite />} />
          <Route path="/resume" element={<Resume />} />

          <Route path='/rough' element={< Rough/>} />

          <Route path='/blogs' element={<Bloglist/>} />
          <Route path='/blogs/guide-to-installing-ubuntu-linux' element={<GuideToInstallingUbuntuLinux/>} />
          <Route path='/blogs/getting-started-with-reactjs' element={<GettingStartedwithReactJS/>} />
          <Route path='/blogs/mastering-css-grid-and-flexbox' element={<MasteringCssGridAndFlexbox/>} />
          <Route path='/blogs/react-hooks' element={<ReactHooks/>} />
          <Route path='/blogs/getting-started-with-indexeddb' element={<IndexedDBGuide/>} />
          <Route path='/blogs/indexdb-setup' element={<IndexedDBsetup/>} />
          <Route path='/blogs/Advanced-indexedDB' element={<IndexedDBadvanced/>} />

          <Route path="/projects" element={<ProjectsSection />} />

          <Route path='/services_list' element={< ServicesList />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

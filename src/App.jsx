import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About, Contact, Feedbacks, Hero, Navbar, Works, StarsCanvas,BlogOne } from "./components";

const App = () => {
  return (
    <Router>
       <Routes>
      <Route exact path="/" element={ <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>} />
      <Route path="/blog/:id" element={<BlogOne />} />
    </Routes>
      
      
    </Router>
    
  );
  
}

export default App;
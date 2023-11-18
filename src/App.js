import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './component/About';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Services from './component/Services';
import Team from './component/Team';
import Footer from './component/Footer';

function App() {
  const location = useLocation();

  const getTitle = React.useCallback(() => {
    switch (location.pathname) {
      case '/':
        return 'Home - MyMobilize';
      case '/blog':
        return 'Blog - MyMobilize';
      case '/team':
        return 'Team - MyMobilize';
      case '/about':
        return 'About Us - MyMobilize';
      case '/services':
        return 'Our Services - MyMobilize';
      case '/contact':
        return 'Contact Us - MyMobilize';
      default:
        return 'MyMobilize';
    }
  }, [location.pathname]);

  const getDescription = React.useCallback(() => {
    switch (location.pathname) {
      case '/':
        return 'Welcome to our website. Learn more about our services and products.';
      case '/blog':
        return 'Read our latest blog posts for insightful information and updates.';
      case '/team':
        return 'Meet our talented team members who drive our company forward.';
      case '/about':
        return 'Discover more about our company and its mission.';
      case '/services':
        return 'Explore the various services we offer to meet your needs.';
      case '/contact':
        return 'Get in touch with us for any queries or collaborations.';
      default:
        return 'Your Website Description';
    }
  }, [location.pathname]);

  React.useEffect(() => {
    document.title = getTitle();
    // Update other meta tags based on the route if needed
    document.querySelector('meta[name="description"]').setAttribute('content', getDescription());
  }, [getTitle, getDescription]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

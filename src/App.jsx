import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './screens/Landing';
import PoetryPage from './screens/Poetry';
import TheJealousMoon from './screens/TheJealousMoon';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  const location = useLocation(); // Get the current route

  // Define pages where you don't want to show the NavigationBar and Footer
  const hideOnRoutes = ['/TheJealousMoon', '/'];

  // Convert both the pathname and routes to lowercase to ensure case-insensitive matching
  const shouldHideNavAndFooter = hideOnRoutes.map(route => route.toLowerCase()).includes(location.pathname.toLowerCase());

  return (
    <div>
      {/* Conditionally render NavigationBar */}
      {!shouldHideNavAndFooter && <NavigationBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/poetry" element={<PoetryPage />} />
        <Route path="/TheJealousMoon" element={<TheJealousMoon />} />
      </Routes>

      {/* Conditionally render Footer */}
      {!shouldHideNavAndFooter && <Footer />}
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

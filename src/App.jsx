import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Product from './pages/Product';
import Integration from './pages/Integration';
import IntegrationDetail from './pages/IntegrationDetail';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Templates from './pages/Templates';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans text-stellar-dark selection:bg-violet-100 selection:text-stellar-primary bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product" element={<Product />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/integration-detail" element={<IntegrationDetail />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

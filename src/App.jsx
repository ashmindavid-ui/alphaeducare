import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Countries from './components/Countries';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CountryPage from './pages/CountryPage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ServicesPage from './pages/ServicesPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Small delay to let the DOM render after route change
    const id = setTimeout(() => {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    return () => clearTimeout(id);
  }, [pathname, hash]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Countries />
      <Services />
      <Testimonials />
      <Partners />
      <News />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopBar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:countryId" element={<CountryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/book-counselling" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

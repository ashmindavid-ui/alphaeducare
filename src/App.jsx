import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Countries from './components/Countries';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CountryPage from './pages/CountryPage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Countries />
      <WhyChoose />
      <Services />
      <Testimonials />
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
          <Route path="/book-counselling" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

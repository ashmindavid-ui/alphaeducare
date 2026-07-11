import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Countries from './components/Countries';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Countries />
        <WhyChoose />
        <Services />
        <Testimonials />
        <Partners />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

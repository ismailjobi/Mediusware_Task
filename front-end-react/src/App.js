import logo from './logo.svg';
import './App.css';
import HomeCard from './components/homecard';
import NavBar from './components/navbar';
import Service from './components/service';
import AboutSection from './components/aboutsection';
import Worksection from './components/worksection';
import Testimonials from './components/testimonials';
import Projects from './components/projects';
import Achievements from './components/achievements';
import TabNavBar from './components/tabnavbar';
import MobileNavBar from './components/mobilenavbar';
import Subscribe from './components/subscribe';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  return (<>
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="HomeVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10">
        <NavBar />
        <HomeCard />
      </div>
      <div className="hidden ml-[1790px] lg:flex bottom-10 right-10 mt-40 items-end">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5 10C21.5 9.17156 20.8284 8.5 20 8.5C19.1716 8.5 18.5 9.17156 18.5 10V16C18.5 16.8284 19.1716 17.5 20 17.5C20.8284 17.5 21.5 16.8284 21.5 16V10Z" fill="#0C98EB" />
          <path fillRule="evenodd" clipRule="evenodd" d="M4 16C4 7.16344 11.1634 0 20 0C28.8366 0 36 7.16344 36 16V24C36 32.8366 28.8366 40 20 40C11.1634 40 4 32.8366 4 24V16ZM33 16V24C33 31.1798 27.1798 37 20 37C12.8203 37 7 31.1798 7 24V16C7 8.82031 12.8203 3 20 3C27.1798 3 33 8.82031 33 16Z" fill="#0C98EB" />
        </svg>
      </div>
    </div>
    <div>
      <Service />
    </div>
    <div>
      <AboutSection />
    </div>
    <div>
      <Worksection />
    </div>
    <div>
      <Testimonials />
    </div>
    <div>
      <Projects />
    </div>
    <div>
      <Achievements />
    </div>
    <div>
      <Subscribe />
    </div>
    <div>
      <Contact />
    </div>
    <div>
      <Footer />
    </div>
  </>
  );
}

export default App;

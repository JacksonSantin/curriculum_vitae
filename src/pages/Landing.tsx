import Header from '../components/header';
import Footer from '../components/footer';

import About from './About';
import SkillEducation from './skillEducation';
import ExperienceTestimonials from './experienceTestimonials';
import Contact from './Contact';


function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">

        <Header />

        <About />

        <SkillEducation />

        <ExperienceTestimonials />

        <Contact />

        <Footer />

      </div>
    </div>
  );
}

export default Landing;
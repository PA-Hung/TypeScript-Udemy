import React from 'react'
import Spinner from '../components/Spinner'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Facilities from '../components/Facilities'
import About from '../components/About'
import CallToAction from '../components/CallToAction'
import Classes from '../components/Classes'
import Appointment from '../components/Appointment'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const MoonEnglish = () => {
  return (
    <div className="container-xxl bg-white p-0">
      {/*  <!-- Spinner Start --> */}
      <Spinner />
      {/*  <!-- Spinner End --> */}


      {/*  <!-- Navbar Start --> */}
      <Navbar />
      {/*  <!-- Navbar End --> */}


      {/*  <!-- Carousel Start --> */}
      <Carousel />
      {/*  <!-- Carousel End --> */}


      {/*  <!-- Facilities Start --> */}
      <Facilities />
      {/*  <!-- Facilities End --> */}


      {/*  <!-- About Start --> */}
      <About />
      {/*  <!-- About End --> */}


      {/*  <!-- Call To Action Start --> */}
      <CallToAction />
      {/*  <!-- Call To Action End --> */}


      {/*  <!-- Classes Start --> */}
      <Classes />
      {/*  <!-- Classes End --> */}


      {/*  <!-- Appointment Start --> */}
      <Appointment />
      {/*  <!-- Appointment End --> */}


      {/*  <!-- Team Start --> */}
      <Team />
      {/*  <!-- Team End --> */}


      {/*  <!-- Testimonial Start --> */}
      <Testimonial />
      {/*  <!-- Testimonial End --> */}


      {/*  <!-- Footer Start --> */}
      <Footer />
      {/*  <!-- Footer End --> */}


      {/*  <!-- Back to Top --> */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  )
}

export default MoonEnglish
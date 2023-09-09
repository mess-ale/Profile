import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import ContactMe from '../components/ContactMe'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="Contact" text="Lets have a chat" />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Contact
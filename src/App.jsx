import React, { useRef } from 'react';

import { HeroComponent } from './components/heroComponent.jsx'
import { NavbarComponent } from './components/navbarComponent.jsx'
import { AboutComponent } from './components/aboutComponent.jsx'
import { ServicesComponent } from './components/servicesComponent.jsx'
import { DescriptionComponent } from './components/descriptionComponent.jsx'
import { PricesComponent } from './components/pricesComponent.jsx'
import { FooterComponent } from './components/footerComponent.jsx'

import './index.css'

function App() {
  const sections = {
     about: useRef(null),
     qo: useRef(null),
     prices: useRef(null)
  }

  const scrollToSection = (e) => {
      const section = sections[e.target.id]?.current

       if (section !== null){
         section.scrollIntoView({behavior: "smooth"})
       }
    };


  return (
    <div>
      <NavbarComponent scrollToSection={scrollToSection}/>
      <div className="">
        <HeroComponent/>

        <div className="flex justify-center p-3 md:p-6">
          <div className="w-[90%] space-y-80">
            <AboutComponent about={sections.about}/>
            <ServicesComponent qo={sections.qo}/>
          </div>
        </div>
          <DescriptionComponent/>
          <PricesComponent prices={sections.prices}/>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default App

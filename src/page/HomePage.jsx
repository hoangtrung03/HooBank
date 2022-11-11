import React from 'react'
import styles from '../style'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Business from '../components/Business'
import Billing from '../components/Billing'
import CardDeal from '../components/CardDeal'
import Testimonials from '../components/Testimonials'
import Clients from '../components/Clients'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Button from '../components/Button'
import FeedbackCard from '../components/FeedbackCard'
import Hero from '../components/Hero'
const HomePage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Hero />
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX}${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomePage

import React from 'react'
import Footer from '../../component/footer/Footer'
import FeatureSection from '../../component/featuresSection/FeatureSection'
import Faq from '../../component/faq/Faq'
import DashboardLanding from '../../component/introductionSection/DashboardLanding'
import Navbar from '../../component/navbar/Navbar'
import PricingSection from '../../component/pricingSection/PricingSection'
import UseCaseSection from '../../component/useCaseSection/UseCaseSection'
import WorkflowSection from '../../component/workflowSection/WorkflowSection'
import Domain from '../../component/domainSection/Domain'
import { Divider } from 'keep-react'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Divider/>
        <DashboardLanding/>
        <Domain/>
        <WorkflowSection/>
        <FeatureSection/>
        <UseCaseSection/>
        <PricingSection/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default LandingPage
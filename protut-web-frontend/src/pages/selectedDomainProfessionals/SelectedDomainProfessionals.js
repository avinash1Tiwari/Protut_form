import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
import DomainWiseProfList from '../../component/domainWiseProfessionalsList/DomainWiseProfList'
const SelectedDomainProfessionals = () => {
  return (
    <>
    <Navbar/>
   <DomainWiseProfList/>
     <div className='h-[50vh] flex justify-center items-center bg-gray-500'>
      Some Content 
     </div>
     <div className='h-[50vh] flex justify-center items-center bg-gray-300'>
      Feedback And Testimonials 
     </div>
    <Footer/>
    </>
  )
}

export default SelectedDomainProfessionals
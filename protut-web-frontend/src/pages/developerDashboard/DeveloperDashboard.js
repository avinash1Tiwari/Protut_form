import React from 'react';
import SocialProfiles from '../../component/devloperDashboard/SocialProfiles';
import SessionInfoCard from '../../component/devloperDashboard/SessionInfoCard';
import DeveloperInfoCard from '../../component/devloperDashboard/DeveloperInfoCard';
import ExperienceInfoCard from '../../component/devloperDashboard/ExperienceInfoCard';
import ProjectsCard from '../../component/devloperDashboard/servicesCards/ProjectsCard';
import MockInterviewCard from '../../component/devloperDashboard/servicesCards/MockInterviewCard';
import SessionCard from '../../component/devloperDashboard/servicesCards/SessionCard';
import ResumeReviewCard from '../../component/devloperDashboard/servicesCards/ResumeReviewCard';
import Availability from '../../component/devloperDashboard/Availability';
import Feedback from '../../component/devloperDashboard/Feedback';
import Footer from '../../component/footer/Footer';
const DeveloperDashboard = () => {
  return (
    <>
      <div className='p-5 bg-black text-white text-3xl font-bvp flex justify-center'>DeveloperDashboard</div>
      <div className='flex flex-row h-[93vh]'>
        <div className='w-[18%] bg-gray-300 text-white p-4 space-y-4 overflow-y-auto'>
          <DeveloperInfoCard />
          <ExperienceInfoCard />
          <SessionInfoCard />
          <SocialProfiles />
        </div>
        <div className='flex flex-col justify-between items-center w-[82%] p-4'>
          <h1 className='text-center text-2xl font-bvp font-bold mb-2'>Services</h1>
          <div className=' grid grid-cols-2 gap-x-60 gap-y-4'>
            <ProjectsCard />
            <MockInterviewCard />
            <SessionCard />
            <ResumeReviewCard />
          </div>
          <div className='mt-4'>
            <Availability />
          </div>
        </div>
      </div>
      <Feedback/>
      <Footer/>
    </>
  );
};

export default DeveloperDashboard;

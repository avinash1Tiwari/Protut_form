import React from 'react';
import autoPlay from 'embla-carousel-autoplay';
import { Carousel } from 'keep-react';
import carouselImage from '../../assets/workflowImage/workflow.png';

const WorkflowSection = () => {
  return ( 
    <div>
    <Carousel options={{ loop: true }} plugins={[autoPlay()]} className='mt-4'>
      <Carousel.Slides>
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Item key={index}>
            <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25 p-20">
              <img src={carouselImage} alt='' />
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Slides>
      <Carousel.Control>
        <Carousel.Buttons>
          <Carousel.PrevButton />
          <Carousel.NextButton />
        </Carousel.Buttons>
        <Carousel.Indicators />
      </Carousel.Control>
    </Carousel>
    </div>
  );
}

export default WorkflowSection;

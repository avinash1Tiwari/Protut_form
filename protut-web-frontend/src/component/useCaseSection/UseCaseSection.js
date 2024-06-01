import React from 'react'
import { Card } from 'keep-react'
import cardImage from '../../assets/usecaseImage/usecase.png'
import { Badge } from 'keep-react'
const UseCaseSection = () => {
  return (
    <div className="h-[150rem] sm:h-[150rem] md:h-[80rem] lg:h-[80rem] xl:h-[60rem] w-full bg-white flex flex-col justify-center items-center">
        <h1 className='  text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <div className="left lg:w-[60rem] sm:mt-5 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <Card className=' mb-6 mr-8 '>
      <Card.Header>
        <img src={cardImage} alt="" width={600} height={400} />
      </Card.Header>
      <Card.Content className="space-y-3">
      <Badge size="md" className='w-28' dot={true}
        dotPosition="left"
        colorType="light"
        variant='base'
        color="success"> For Learners
         </Badge>
        <Card.Title>Lorem ipsum dolor sit</Card.Title>
        <Card.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
        </Card.Description>
       
      </Card.Content>
    </Card>
    <Card className='mb-6 mr-8'>
      <Card.Header>
        <img src={cardImage} alt="" width={600} height={400} />
      </Card.Header>
      <Card.Content className="space-y-3">
      <Badge size="md" className='w-28'  dot={true}
        dotPosition="left"
        colorType="light"
        color="success">For Learners</Badge>
        <Card.Title>Lorem ipsum dolor sit</Card.Title>
        <Card.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
        </Card.Description>
       
      </Card.Content>
    </Card>
    <Card className='mb-6 mr-8'>
      <Card.Header>
        <img src={cardImage} alt="" width={600} height={400} />
      </Card.Header>
      <Card.Content className="space-y-3">
      <Badge size="md" className='w-28' dot={true}
        dotPosition="left"
        colorType="light"
        color="success">For Learners</Badge>
        <Card.Title>Lorem ipsum dolor sit</Card.Title>
        <Card.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
        </Card.Description>
       
      </Card.Content>
    </Card>
    <Card className='mb-6 mr-8'>
      <Card.Header>
        <img src={cardImage} alt="" width={600} height={400} />
      </Card.Header>
      <Card.Content className="space-y-3">
      <Badge size="md" className='w-32'  dot={true}
        dotPosition="left"
        colorType="light"
        color="success">For Developers</Badge>
        <Card.Title>Lorem ipsum dolor sit</Card.Title>
        <Card.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
        </Card.Description>
       
      </Card.Content>
    </Card>
    <Card className='mb-6 mr-8'>
      <Card.Header>
        <img src={cardImage} alt="" width={600} height={400} />
      </Card.Header>
      <Card.Content className="space-y-3">
      <Badge size="md" className='w-32' dot={true}
        dotPosition="left"
        colorType="light"
        color="success">For Developers</Badge>
        <Card.Title>Lorem ipsum dolor sit</Card.Title>
        <Card.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
        </Card.Description>
       
      </Card.Content>
    </Card>
    <Card className='mb-6 mr-8'>
      <Card.Header>
        <img src={cardImage} alt="" width={600} height={400} />
      </Card.Header>
      <Card.Content className="space-y-3">
      <Badge size="md" className='w-32' dot={true}
        dotPosition="left"
        colorType="light"
        color="success">For Developers</Badge>
        <Card.Title>Lorem ipsum dolor sit</Card.Title>
        <Card.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
        </Card.Description>
       
      </Card.Content>
    </Card>
   
        
        </div>
     </div>
  )
}

export default UseCaseSection
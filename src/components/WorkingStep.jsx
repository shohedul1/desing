import React from 'react';
const cartData = [
  {
    icons: 1,
    title: "Fill a Form ",
    description: 'Step 1 description goes here.Lorem iprem dolor sit amet, consectetur addipiscing elit'
  },
  {
    icons: 2,
    title: "Get Matched",
    description: 'Step 2 description goes here.Lorem iprem dolor sit amet, consectetur addipiscing elit'
  },
  {
    icons: 3,
    title: "Schedule",
    description: 'Step 2 description goes here.Lorem iprem dolor sit amet, consectetur addipiscing elit'
  }

]

const WorkingStep = () => {
  return (
    <div className='relative bg-cover bg-center py-12 bg-working-img'>
      <div className='absolute inset-0 bg-heroBg bg-opacity-85'></div>
      <div className='relative container text-center py-20'>
        <div className='text-white text-center mb-20'>
          <h2 className='text-4xl font-bold font-secondary mb-4'>Wow It Works</h2>
        </div>
        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
          {
            cartData.map((item, index) => (
              <div key={index} className='relative bg-white text-center rounded-lg p-6 flex-1'>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center'>
                  {item.icons}
                </div>
                <h3 className='text-lg font-medium mt-8'>{item.title}</h3>
                <p className="my-2">
                  {item.description}
                </p>
                <div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default WorkingStep
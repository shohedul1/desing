import React from 'react';
const packages = [
  {
    name: "Bronze Package",
    price: '$99',
    description: 'Ideal for individuals or small businesses looking to get started with mental wellness',
    features: [
      {
        name: "Access to basic wellness resoures"
      },
      {
        name: 'Weekly mental wellness tips'
      },
      {
        name: 'Community support group access'
      }

    ]
  },
  {
    name: "Silver Package",
    price: '$199',
    description: 'A great choice for growing businesses with additional features and support for mental wellness',
    features: [
      {
        name: "All Bronze Package feautres"
      },
      {
        name: 'Monthly guided meditation sessions'
      },
      {
        name: 'Personalized wellness plan'
      },
      {
        name: 'Access to expert webinars'
      }

    ]
  },
  {
    name: "Gold Package",
    price: '$299',
    description: 'A great choice for growing businesses with additional features and support for mental wellness',
    features: [
      {
        name: "All Sliver Package features"
      },
      {
        name: 'Weckly onc-on ccaching sections'
      },
      {
        name: 'Advanced mented wellness hacking tools'
      },
      {
        name: '24/7 access to mental welness axperts'
      }

    ]
  }
]

const Pricing = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById('contact');
    if(targetElement){
      window.scrollTo({
        top:targetElement.offsetTop,
        behavior:'smooth'
      })
    }
  }
  return (
    <div id='pricing' className='bg-[#f7f8fc] pt-32'>
      <div className='container mx-auto px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary mb-3+'>Perfect for Small & Large Brands</h2>
          <p className='text-lg mb-12 md:w-2/3 mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem dolore tempore quis magnam maiores debitis doloremque saepe velit eum?
          </p>
        </div>
        {/* packages */}
        <div className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 mb-12'>
          {
            packages.map((pkg, index) => (
              <div key={index} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
                <h3 className='text-2xl  font-semibold mb-4'>{pkg.name}</h3>
                <hr className='w-24 border text-primary border-primary' />
                <p className='text-3xl font-bold mb-4'>
                  {pkg.price}
                  <span className='text-lg font-normal'>/mo</span>
                </p>
                <p className='text-lg mb-4'>
                  {pkg.description}
                </p>
                <ul className='list-disc list-inside space-y-2 mb-6'>
                  {
                    pkg.features.map((feature, index) => (
                      <li key={index} className='text-xs'>{feature.name}</li>
                    ))
                  }
                </ul>
                <button
                  onClick={handleScrollToContact}
                  className='bg-primary text-white px-4 py-2 rounded hover:bg-primary/90'>Get Started</button>

              </div>


            ))
          }

        </div>

      </div>

    </div>
  )
}

export default Pricing
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";

const data = {
  tabs: [
    { name: 'Cople Counseling' },
    { name: 'Parenting Skills' },
    { name: 'Feeling Stuck' },
    { name: 'Seft-Confidenceg' },
  ],
  tabsData: [
    {
      title: 'Couple Counseling',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium itaque eligendi. Placeat, ea. Nobis vero pariatur odio consectetur quaerat. Nostrum saepe delectus ea ducimus?",
      name: "Benefits",
      liTag: [
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
      ],
      img: serviceImg1,
    },
    {
      title: 'Parenting Skills',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium itaque eligendi. Placeat, ea. Nobis vero pariatur odio consectetur quaerat. Nostrum saepe delectus ea ducimus?",
      name: "Benefits",
      liTag: [
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
      ],
      img: serviceImg2,
    },
    {
      title: 'Feeling Stuck',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium itaque eligendi. Placeat, ea. Nobis vero pariatur odio consectetur quaerat. Nostrum saepe delectus ea ducimus?",
      name: "Benefits",
      liTag: [
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
      ],
      img: serviceImg3,
    },
    {
      title: 'Self-Confidence',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium itaque eligendi. Placeat, ea. Nobis vero pariatur odio consectetur quaerat. Nostrum saepe delectus ea ducimus?",
      name: "Benefits",
      liTag: [
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
        { name: 'Userstanding Relationship Dynamics' },
      ],
      img: serviceImg4,
    }

  ]
};

const Services = () => {
  return (
    <div id='services' className='bg-[#f7f8fc] pt-32'>
      <div className='pt-28 px-4 container mx-auto'>
        <div className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>What Can We Do Together</h2>
          <p className="md:w-1/3 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat, laboriosam veniam quae perferendis laborum libero sequi qui maxime possimus excepturi pariatur aliquid labore totam.
          </p>
        </div>
        {/* service category */}
        <div className='py-12 md:w-4/5 mx-auto'>
          <Tabs>
            <TabList className="flex flex-wrap justify-between items-center md:gap-0 gap-4">
              {
                data.tabs.map((tab, index) => (
                  <Tab key={index}>{tab.name}</Tab>
                ))
              }
            </TabList>
            {
              data.tabsData.map((item, index) => (
                <TabPanel key={index} >
                  <div className='flex flex-col md:flex-row gap-8 mt-8'>
                    <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                      <h3 className='text-3xl font-semibold text-primary mb-4'>{item.title}</h3>
                      <p className='mb-4'>
                        {item.desc}
                      </p>
                      <h4 className='text-xl font-medium text-black mb-4'>{item.name}</h4>
                      <ul className='list-disc list-inside space-y-3'>
                        {
                          item.liTag.map((liData, index) => (
                            <li key={index}>{liData.name}</li>
                          ))
                        }
                      </ul>
                    </div>
                    <div className='md:w-1/2'>
                      <img src={item.img} alt="image" className='w-full h-auto rounded-2xl object-cover' />
                    </div>
                  </div>
                </TabPanel>
              ))
            }
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services
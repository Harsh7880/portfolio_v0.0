// import pc from '../assets/pc.png'
// import card from '../assets/card.png'
// import finance from '../assets/finance.png'
import {motion} from 'framer-motion'
import problemSolving from '../assets/image.png'
import education from '../assets/education.png'
import experience from '../assets/experience.png'
import technologies from '../assets/technologies.png'

const About2 = () => {
  return (
    <div className="w-fulf">
       <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="grid grid-cols-8 gap-6 place-items-center">

        <div className='w-full col-span-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'> 
        <div className="flex flex-row p-6">
          <img className='w-auto h-[130px]' src={education} alt="book" />
          <div className="flex flex-col mt-4 px-3">
            <h2 className="text-2xl font-bold text-white/80">
               Education
            </h2>
            <p className="text-lg text-white/70 mt-2">I hold a degree in Electronics and Communication and i am focusing on technologies like React, Next.js, and Tailwind CSS.</p>
          </div>
        </div>

        </div>
        <div className='w-full col-span-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'> 
        <div className="flex flex-row p-6">
          <img className='w-auto h-[130px]' src={problemSolving} alt="book" />
          <div className="flex flex-col mt-4 px-0">
            <h2 className="text-2xl font-bold text-white/80">
               Problem-Solving
            </h2>
            <p className="text-lg text-white/70 mt-2">I approch challenges with a logical and sysmatic mindset </p>
          </div>
        </div>

        </div>

        <div className='w-full col-span-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'> 
        <div className="flex flex-row p-6">
          <img className='w-auto h-[130px]' src={experience} alt="book" />
          <div className="flex flex-col mt-4 px-3">
            <h2 className="text-2xl font-bold text-white/80">
               Experience
            </h2>
            <p className="text-lg text-white/70 mt-2">I have diverse porfolio of projects</p>
          </div>
        </div>

        </div>

        <div className='w-full col-span-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'> 
        <div className="flex flex-row p-6">
          <img className='w-auto mt-[-10px] h-[130px]' src={technologies} alt="book" />
          <div className="flex flex-col mt-4 px-3">
            <h2 className="text-2xl font-bold text-white/80">
               Technical skills
            </h2>
            <p className="text-lg text-white/70 mt-2">As a full stack developer i speclaize in React JS, Node JS, Express JS and Java</p>
          </div>
        </div>

        </div>


      </div>
  
    </div>
  );
};

export default About2;

import React from 'react';
import { motion, AnimatePresence, color } from 'framer-motion';
import FeatherLoop from '../components/images/FeatherLoop.png'
import FeatherWhite from '../components/images/FeatherWhite.png'
import FeatherBlack from '../components/images/FeatherBlack.png'
import BlackFeather from '../components/images/BlackFeather.png'
import ManyFeathers from '../components/images/ManyFeathers.png'
import Reveal from '../components/Reveal';
import RevealSlide from '../components/RevealSlide';
import RevealSlideLeft from '../components/RevealSlideLeft';


function Landing() {


  return (
    <div style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent)', overflowX: 'hidden' }}>
      <div className=' items-center justify-center sm:flex pt-40'>

        <Reveal>
          <img src={FeatherLoop} alt="Logo" className="w-64 h-64 mb-2 sm:mr-10 justify-center items-center " />
        </Reveal>

        <Reveal>
          <motion.div
            className='container1'
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 600, damping: 10 }}
          >

            <h1 className='text-4xl font-bold antialiased underline underline-offset-2 decoration-black	decoration-double'>Greetings</h1>

            <h2 className='max-w-full whitespace-normal overflow-hidden text-2xl mt-3'>
              Welcome to my page. I am a writer, a poet, and a coder. Perhaps not all of these pursuits are incongruous with one another, but I wouldn't be a Rambling Shambling Wayfarer then, would I?

            </h2>
          </motion.div>
        </Reveal>

      </div>

      <div className='flex max-w-max justify-start items-start'>
        <motion.img src={FeatherWhite} alt="Logo" className="w-60 h-60 absolute sm:top-28" drag />
      </div>


      <div className='mt-40 items-center justify-center sm:flex sm:mt-96 sm:pt-16'>

        <RevealSlide>
          <div
            className='container2'
          >
            <h1 className='max-w-full whitespace-normal overflow-hidden text-3xl mt-2'>
              We engage in engineering and science to sustain our livelihood, but it is through art, poetry, and writing that we nourish our souls.
            </h1>
            <h2 className='text-2xl mt-10 text-end antialiased'>~Uknown</h2>

          </div>
        </RevealSlide>


      </div>
      <motion.img src={FeatherBlack} alt="Logo" className="w-60 h-60 absolute bottom-0 right-0 " drag />



      <div className="relative flex justify-center items-center mt-72 ">
        <img src={BlackFeather} alt="Logo" className="w-9/12 h-9/12" />


        <motion.img src={ManyFeathers} alt="Logo" className="w-60 h-60 absolute bottom-2/5 mt-96 left-0" drag />
      </div>


      <div className="flex justify-center items-center mt-24 ">

        <h1 className='text-4xl antialiased underline underline-offset-2 decoration-black	decoration-double'>Some of My Work</h1>

      </div>


      <motion.img src={FeatherBlack} alt="Logo" className="w-60 h-60 absolute right-0" drag />

      <RevealSlide>

        <div className="flex justify-center items-center mt-20 sm:pl-96">
          <div class="image-container">
            <div class="image"></div>
          </div>
        </div>
      </RevealSlide>

      <RevealSlideLeft>
        <div className="flex justify-center items-center mt-20 sm:pr-96">
          <div class="image-container">
            <div class="image2"></div>
          </div>
        </div>
      </RevealSlideLeft>

      <motion.img src={FeatherWhite} alt="Logo" className="w-60 h-60 absolute left-0 mb-92" drag />

      <div className="flex justify-center items-center mt-40 pb-40 ">

        <h1 className='text-4xl antialiased '>
          Did my words
          <a href="/poetry" className="ml-1 text-gray-500 hover:text-white">click</a>?
        </h1>

      </div>

    </div>
  );
}

export default Landing;

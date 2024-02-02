import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeatherLoop from '../components/FeatherLoop.png'
import FeatherWhite from '../components/FeatherWhite.png'
import FeatherBlack from '../components/FeatherBlack.png'
import BlackFeather from '../components/BlackFeather.png'
import ManyFeathers from '../components/ManyFeathers.png'
import Reveal from '../components/Reveal';
import RevealSlide from '../components/RevealSlide';
import RevealSlideLeft from '../components/RevealSlideLeft';


function Landing() {

  return (
    <div className="min-h-screen bg-white pb-60 ">

      <div className='mt-10 items-center justify-center sm:flex sm:mt-36  '>


        <Reveal>
          <img src={FeatherLoop} alt="Logo" className="w-64 h-64 mb-2 sm:mr-10 justify-center items-center " />
        </Reveal>

        <Reveal>
          <motion.div
            className='container1'
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 600, damping: 10 }}
          >
            <h1 className='text-4xl font-sans antialiased underline underline-offset-2 decoration-black	decoration-double'>Greetings</h1>

            <h1 className='max-w-full whitespace-normal overflow-hidden text-2xl mt-3'>
              Welcome to my page. I am a writer, a poet, and a coder. Perhaps not all of these pursuits are incongruous with one another, but I wouldn't be a Rambling Shambling Wayfarer then, would I?

            </h1>
          </motion.div>
        </Reveal>

      </div>

      <div className='flex max-w-max justify-start items-start'>
        <motion.img src={FeatherWhite} alt="Logo" className="w-60 h-60 absolute -mt-96 " drag />
      </div>


      <div className='mt-40 items-center justify-center sm:flex sm:mt-96'>

        <RevealSlide>
          <div
            className='container2'
          >

            <h1 className='max-w-full whitespace-normal overflow-hidden text-3xl mt-2'>
              We engage in engineering and science to sustain our livelihood, but it is through art, poetry, and writing that we nourish our souls.
            </h1>
            <h1 className='text-2xl mt-10 font-sans text-end antialiased'>~Uknown</h1>

          </div>
        </RevealSlide>

        <motion.img src={FeatherBlack} alt="Logo" className="w-60 h-60 absolute right-0 mb-80" drag />


      </div>



      <div className="relative flex justify-center items-center mt-72 ">
        <img src={BlackFeather} alt="Logo" className="w-9/12 h-9/12" />


        <motion.img src={ManyFeathers} alt="Logo" className="w-60 h-60 absolute bottom-2/5 mt-96 left-0" drag />
      </div>


      <div className="flex justify-center items-center mt-24 ">

        <h1 className='text-4xl font-sans antialiased underline underline-offset-2 decoration-black	decoration-double'>Some of My Work</h1>

      </div>


      <motion.img src={FeatherWhite} alt="Logo" className="w-60 h-60 absolute right-0" drag />

      <RevealSlide>
        <div className="flex justify-center items-center mt-20 sm:ml-96 sm:-mr-24 ">
          <div class="image-container">
            <div class="image"></div>
          </div>
        </div>
      </RevealSlide>

      <RevealSlideLeft>
        <div className="flex justify-center items-center mt-20 sm:mr-96 sm:-ml-24 ">
          <div class="image-container2">
            <div class="image2"></div>
          </div>
        </div>
      </RevealSlideLeft>

      <motion.img src={FeatherBlack} alt="Logo" className="w-60 h-60 absolute left-0 mb-92" drag />

      <div className="flex justify-center items-center mt-40 ">

        <h1 className='text-4xl font-sans antialiased underline underline-offset-2 decoration-black	decoration-double'>Did my words click?</h1>

      </div>

    </div>
  );
}

export default Landing;

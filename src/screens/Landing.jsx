import React from 'react';
import { motion, AnimatePresence, color } from 'framer-motion';
import FeatherLoop from '../components/images/FeatherLoop.png'
import FeatherWhite from '../components/images/FeatherWhite.png'
import FeatherBlack from '../components/images/FeatherBlack.png'
import BlackFeather from '../components/images/BlackFeather.png'
import ManyFeathers from '../components/images/ManyFeathers.png'
import Moon2 from '../components/images/moon2.png'
import Reveal from '../components/Reveal';
import RevealSlide from '../components/RevealSlide';
import RevealSlideLeft from '../components/RevealSlideLeft';
import Logo from '../components/images/Logo.png'


function Landing() {

  return (
    <div style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent)', overflowX: 'hidden' }}>



      <div className="background-container">
        <img className='moon' loading='lazy' src={Moon2} alt="The Jealous Moon" />

        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>

        <div className="moon-container">
          <p className='moonText'>And each night the moon comes to visit</p>
          <p className='moonText'>Pretending to be the star of the exhibit</p>
          <p className='moonText'>Donning these appealing guises</p>
          <p className='moonText'>Appearing in different forms, different sizes</p>
          <br></br>
          <p className='moonText'>"How about now?" It asks each time</p>
          <p className='moonText'>Am I not the one more sublime?</p>
          <p className='moonText'>With lips pursed, I smile</p>
          <p className='moonText'>At the moon's attempts to beguile</p>
          <br></br>
          <p className='moonText'>"Not quit." I shake my head</p>
          <p className='moonText'>Leaving the moon in a subtle red</p>
          <p className='moonText'>You don these fancy appearances to charm</p>
          <p className='moonText'>Take the spotlight in the heavens to disarm</p>
          <br></br>
          <p className='moonText'>Your crimes are tenfold</p>
          <p className='moonText'>I say to the moon</p>
          <p className='moonText'>While her lone offense; to be bold</p>
          <p className='moonText'>And make my poor heart swoon</p>
        </div>

      </div>



      <div class="HeadingContainer">

        <Reveal>
          <img src={Logo} alt="Logo" className="logo-image" />
        </Reveal>

        <Reveal>
          <motion.div
            className='container1'
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 600, damping: 10 }}
          >

            <h1 class="heading1">Greetings</h1>

            <h2 className='max-w-full whitespace-normal overflow-hidden text-2xl mt-3'>
              Welcome to my page. I am a writer, a poet, and a coder. Perhaps these pursuits may not be congruous with one another, but I wouldn't be a Rambling Shambling Wayfarer then, would I

            </h2>
          </motion.div>
        </Reveal>

      </div>

      <div class="LadyJusticeContainer">


      </div>

      <div className='flex max-w-max justify-start items-start'>
        <motion.img src={FeatherWhite} alt="Logo" className="w-60 h-60 absolute sm:top-21" drag />
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
      <motion.img src={FeatherBlack} alt="Logo" className="w-60 h-60 absolute bottom-2- right-0 " drag />



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

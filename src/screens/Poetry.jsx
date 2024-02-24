import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PurpleNeons from "../components/images/PurpleNeons.jpg";
import PurpleNeons2 from "../components/images/PurpleNeons2.jpg";
import Reprieve from "../components/images/Reprieve.jpg";
import Reveal from "../components/Reveal";
import RevealSlide from "../components/RevealSlide";
import RevealSlideLeft from "../components/RevealSlideLeft";
import PreeningBird from "../components/images/PreeningBird.mp4";

function Poetry() {
  return (
    <div className="bg-whitesmoke pb-60 overflow-x-hidden">

      {/* 1st section */}
      <section className="black relative">

        <div className="sm:flex sm:flex-row justify-evenly">

          <div className="pt-72" >
            <h1 className="text-4xl text-center  text-white underline">Reprieve</h1>
            <h2 className="text-2xl text-center mt-2 text-white">Description Coming Soon!</h2>
          </div>
          <RevealSlide>
            <div className="flex justify-center sm:justify-end pt-20 sm:pt-40  items-center ">
              <div class="image-container">
                <div class="image2"></div>
              </div>
            </div>
          </RevealSlide>
        </div>

        <div class="custom-shape-divider-top-1708641576">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>

      </section>

      {/* 2nd section */}
      <section className="white relative">

        <div className="sm:flex sm:flex-row justify-start sm:pl-14 lg:pl-28">

          <RevealSlide >
            <div className="flex justify-center sm:justify-end pt-96  items-center ">
              <div class="image-container">
                <div class="image"></div>
              </div>
            </div>
          </RevealSlide>

          <div className="pt-20 sm:pt-100 sm:pl-10 md:pl-20 lg:pl-40 xl:pl-72 ">
            <h1 className="text-4xl text-center  text-black underline">Purple Neons</h1>
            <h2 className="text-2xl text-center mt-2 text-black">Description Coming Soon!</h2>
          </div>

        </div>


        <div class="custom-shape-divider-top-1708642640">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>

      </section>

      {/* 3rd section */}
      <section className="black relative">

        <div className="sm:flex sm:flex-row justify-evenly">

          <div className="pt-72" >
            <h1 className="text-4xl text-center  text-white underline">Will you be my valentine?</h1>
            <h2 className="text-2xl text-center mt-2 text-white">Description Coming Soon!</h2>
          </div>
          <RevealSlide>
            <div className="flex justify-center sm:justify-end pt-20 sm:pt-40  items-center ">
              <div class="image-container">
                <div class="image3"></div>
              </div>
            </div>
          </RevealSlide>
        </div>

        <div class="custom-shape-divider-top-1708736418">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>

      </section>

      {/* 4th section */}
      <section className="white relative">

        <div className="sm:flex sm:flex-row justify-start sm:pl-14 lg:pl-28">

          <RevealSlide >
            <div className="flex justify-center sm:justify-end pt-96  items-center ">
              <div class="image-container">
                <div class="image4"></div>
              </div>
            </div>
          </RevealSlide>

          <div className="pt-20 sm:pt-100 sm:pl-10 md:pl-20 lg:pl-40 xl:pl-72 ">
            <h1 className="text-4xl text-center  text-black underline">Charlatan</h1>
            <h2 className="text-2xl text-center mt-2 text-black">Description Coming Soon!</h2>
          </div>

        </div>


        <div class="custom-shape-divider-top-1708642640">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>

      </section>







      {/* <RevealSlideLeft>
        <div className="flex justify-center items-center mt-40 sm:ml-96">
          <div class="image-container2">
            <video
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"

            >
              <source src={PreeningBird} type="video/mp4" />
            </video>
          </div>
        </div>
      </RevealSlideLeft> */}


    </div>
  );
}

export default Poetry;

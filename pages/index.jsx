import React from 'react'
import Carousel from '../components/Carousel';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import LogoCarousel from '../components/LogoCarousel';
export const index = () => {
  return (
    <>

      <Carousel />

      {/* brand-section-started */}

      <div className="brand-section bg-custom-gray py-20">
      <p className="text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl welcome-text mb-5">
  Welcome to <span className="special-text">Salt'n Pepper</span>
</p>

        <p className="text-center text-white text-3xl welcome-text">
          Restaurants! Our Brands
        </p>
        <p className="text-center text-footer-text-color mt-5">
          Please click our brands below for further information, reservations, or to order online!
        </p>

        {/* Grid for Images and Buttons */}
        <div className="flex flex-wrap justify-center items-center mt-10 gap-8">
          {/* Image 1 with Button */}
          <div className="w-64 h-auto text-center">
            <div className="bg-white py-10  mb-8 rounded card-1-class ">
              <img
                src="/images/card-1.png"
                alt="Brand 1"
                className="object-cover "
              />
            </div>
            <button className="inline-flex items-center border-2 border-solid border-white py-3 px-8 text-white rounded-full  mt-4 md:mt-0 mr-6 ml-2">
              Order now

            </button>
          </div>

          {/* Image 2 with Button */}
          <div className="w-64 h-auto text-center ">
            <div className="bg-white py-10  mb-8 rounded card-1-class">
              <img
                src="/images/card2.png"
                alt="Brand 2"
                className="object-cover "
              />
            </div>
            <button className="inline-flex items-center border-2 border-solid border-white py-3 px-8 text-white rounded-full  mt-4 md:mt-0 mr-6 ml-2">
              Order now

            </button>
          </div>

          {/* Image 3 with Button */}
          <div className="w-64 h-auto text-center">
            <div className="bg-white py-10  mb-8 rounded card-1-class">
              <img
                src="/images/card3.png"
                alt="Brand 3"
                className="object-cover "
              />
            </div>
            <button className="inline-flex items-center border-2 border-solid border-white py-3 px-4 text-white rounded-full  mt-4 md:mt-0 mr-6 ml-2 ">
              Reserve a Table

            </button>
          </div>
        </div>

      </div>

      {/* brand-section-ended */}


      {/* Franchise-section-started */}

      <div className='franchise-section bg-custom-gray py-20 bg-franchise-bg '>

        <p className="text-center text-white text-3xl special-text">
          Salt'n Pepper </p>
        <p className="text-center text-white text-3xl franchise-text mt-7">
          Restaurant Franchises </p>

        <p className="text-center text-footer-text-color mt-5 ">Each of our franchises are individually managed. For further details, kindly contact them directly.

        </p>

        <section className="container mx-auto text-gray-600 body-font w-85" >

          {/* hero-image-1 */}
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center location-space-dev ">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font   font-medium uppercase text-location-text-color tracking-widest">Islamabad
              </h1>
              <p className="text-white text-xl franchise-text-2 mt-2">
                <span className="special-text-2">Salt'n Pepper</span> Restaurant </p>
              <span className="flex items-center text-footer-text-color mt-5 text-center sm:text-left">
                <FaLocationDot className="mr-2" /> {/* Add margin to the right of the icon */}
                Plot# 55, Shabbir Plaza, Blue Area, F-6, Islamabad
              </span>
              <span className="flex items-center text-footer-text-color mt-2 mb-10">
                <FaPhone className="mr-2" /> Ph: 051-2604904-6
              </span>

              <button className="inline-flex items-center border-2 border-solid border-white py-3 px-4 text-white rounded-full  mt-10 md:mt-0  get-direction-btn">
                Get Directions <FaArrowRight className="ml-2 bg-white text-custom-button-color rounded-full p-1 " style={{ fontSize: '25px' }} />
              </button>


            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="/images/hero1.jpg" />
            </div>
        
          </div>

          {/* hero-image-2 */}

          <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col-reverse items-center location-space-dev-1">
            {/* Image Section */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="/images/hero2.jpg" />
            </div>
            {/* Text Section */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font font-medium uppercase text-location-text-color tracking-widest">Faisalabad</h1>
              <p className="text-white text-xl franchise-text-2 mt-2">
                <span className="special-text-2">Salt'n Pepper</span> Restaurant
              </p>
              <span className="flex items-center text-footer-text-color mt-5">
                <FaLocationDot className="mr-2" />
                4-Kohinoor City, Faisalabad
              </span>
              <span className="flex items-center text-footer-text-color mt-2 mb-10">
                <FaPhone className="mr-2" />
                4-Kohinoor City, Faisalabad
              </span>
              <button className="inline-flex items-center border-2 border-solid border-white py-3 px-4 text-white rounded-full mt-10 md:mt-0 get-direction-btn">
                Get Directions
                <FaArrowRight className="ml-2 bg-white text-custom-button-color rounded-full p-1"  />
              </button>
            </div>
          </div>

          {/* hero-image-3 */}
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center location-space-dev">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font   font-medium uppercase text-location-text-color tracking-widest">Bahawalpur
              </h1>
              <p className="text-white text-xl franchise-text-2 mt-2">
                <span className="special-text-2">Salt'n Pepper</span> Restaurant </p>
              <span className="flex items-center text-footer-text-color mt-5 sm:text-left">
                <FaLocationDot className="mr-2" /> {/* Add margin to the right of the icon */}
                D.C Chowk, opposite Commissioner House, Bahawalpur
              </span>
              <span className="flex items-center text-footer-text-color mt-2 mb-10">
                <FaPhone className="mr-2" /> Ph: 062-2740271-2
              </span>

              <button className="inline-flex items-center border-2 border-solid border-white py-3 px-4 text-white rounded-full  mt-10 md:mt-0  get-direction-btn">
                Get Directions <FaArrowRight className="ml-2 bg-white text-custom-button-color rounded-full p-1 " style={{ fontSize: '25px' }} />
              </button>


            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="/images/hero3.jpg" />
            </div>
          </div>

        </section>



        {/* express-frachise-started */}

        <section className="text-gray-600 body-font bg-custom-gray mt-10  py-10 w-85 mx-auto"   >
          <p className="text-center text-white text-3xl special-text">
            Salt'n Pepper </p>
          <p className="text-center text-white text-3xl franchise-text mt-7 mb-10 ">
            Express Franchises </p>

          <div className="container px-5  mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-1 border-gray-200 border-opacity-60  overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/pic3.jpg" alt="blog" />
                  <div className="text-center pt-3">
                    <h1 className="title-font text-center  font-medium uppercase text-location-text-color tracking-widest">Emporium Mall
                    </h1>
                    <p className="text-white text-xl franchise-text-3 mt-2">
                      <span className="special-text-2">Salt'n Pepper</span> Express
                    </p>
                    <span className="flex items-center text-footer-text-color mt-5 sm:text-left">
                      <FaLocationDot className="mr-2" />
                      2nd Floor, Food Court Emporium Mall
                    </span>
                    <span className="flex items-center text-center justify-center text-footer-text-color mt-4 mb-10">
                      <FaPhone className="mr-2" />
                      Ph: 0311-1100947
                    </span>
                    <div className="flex items-center flex-wrap justify-center ">
                      <button className="inline-flex items-center border-2 border-solid border-white py-3 px-4 text-white rounded-full  mt-10 md:mt-0  get-direction-btn">
                        Get Directions <FaArrowRight className="ml-2 bg-white text-custom-button-color rounded-full p-1 " style={{ fontSize: '25px', transform: 'rotate(-40deg)' }} />
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-1 border-gray-200 border-opacity-60  overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/pic2.jpg" alt="blog" />
                  <div className="text-center pt-3">
                    <h1 className="title-font text-center  font-medium uppercase text-location-text-color tracking-widest">Gujranwala
                    </h1>
                    <p className="text-white text-xl franchise-text-3 mt-2">
                      <span className="special-text-2">Salt'n Pepper</span> Express
                    </p>
                    <span className="flex items-center justify-center  text-footer-text-color mt-5">
                      <FaLocationDot className="mr-2" />
                      Sixteenth Avenue Mall
                    </span>
                    <span className="flex items-center text-center justify-center text-footer-text-color mt-4 mb-10">
                      <FaPhone className="mr-2" />
                      Ph: 0300-6024000
                    </span>
                    <div className="flex items-center flex-wrap justify-center ">
                      <button className="inline-flex items-center border-2 border-solid border-white py-3 px-4 text-white rounded-full  mt-10 md:mt-0  get-direction-btn">
                        Get Directions <FaArrowRight className="ml-2 bg-white text-custom-button-color rounded-full p-1 " style={{ fontSize: '25px', transform: 'rotate(-40deg)' }} />
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-1 border-gray-200 border-opacity-60  overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/pic1.jpg" alt="blog" />
                  <div className="text-center pt-3">
                    <h1 className="title-font text-center  font-medium uppercase text-location-text-color tracking-widest">sargodha
                    </h1>
                    <p className="text-white text-xl franchise-text-3 mt-2">
                      <span className="special-text-2">Salt'n Pepper</span> Express
                    </p>
                    <span className="flex items-center text-footer-text-color mt-5 sm:text-left">
                      <FaLocationDot className="mr-2" />
                      Opposite Sargodha Council Babar Road
                    </span>
                    <span className="flex items-center text-center justify-center text-footer-text-color mt-4 mb-10">
                      <FaPhone className="mr-2" />
                      048-3725500
                    </span>
                    <div className="flex items-center flex-wrap justify-center ">
                      <button className="inline-flex items-center border-2 border-solid border-white py-3 px-4 text-white rounded-full  mt-10 md:mt-0 ">
                        Get Directions <FaArrowRight className="ml-2 bg-white text-custom-button-color rounded-full p-1 " style={{ fontSize: '25px', transform: 'rotate(-40deg)' }} />
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="text-gray-600 body-font bg-custom-gray   w-85 mx-auto"   >


          <div className="container px-5  mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-1 border-gray-200 border-opacity-60  overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/jehlum.jpg" alt="blog" />
                  <div className="text-center pt-3">
                    <h1 className="title-font text-center  font-medium uppercase text-location-text-color tracking-widest">Jhelum
                    </h1>
                    <p className="text-white text-xl franchise-text-3 mt-2">
                      <span className="special-text-2">Salt'n Pepper</span> Express
                    </p>
                    <span className="flex items-center text-footer-text-color mt-5 text-center sm:text-left">
                      <FaLocationDot className="mr-2" />
                      Opposite Dancing Fountain Gallery 2 Citi Housing Jhelum,
                    </span>
                    <span className="flex items-center text-center justify-center text-footer-text-color mt-4 mb-10">
                      <FaPhone className="mr-2" />
                      Ph: 0307-7675555
                    </span>
                    <div className="flex items-center flex-wrap justify-center ">
                      <button className="inline-flex items-center border-2 border-solid border-white py-3 px-4 text-white rounded-full  mt-10 md:mt-0 ">
                        Get Directions <FaArrowRight className="ml-2 bg-white text-custom-button-color rounded-full p-1 " style={{ fontSize: '25px', transform: 'rotate(-40deg)' }} />
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-1 border-gray-200 border-opacity-60  overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/fisal-town.jpg" alt="blog" />
                  <div className="text-center pt-3">
                    <h1 className="title-font text-center  font-medium uppercase text-location-text-color tracking-widest">Faisal Town

                    </h1>
                    <p className="text-white text-xl franchise-text-3 mt-2">
                      <span className="special-text-2">Salt'n Pepper</span> Express
                    </p>
                    <span className="flex items-center justify-center  text-footer-text-color mt-5 sm:text-left">
                      <FaLocationDot className="mr-2" />
                      34-C Abul Hassan Isfahani Rd, Faisal Town,Lahore
                    </span>
                    <span className="flex items-center text-center justify-center text-footer-text-color mt-4 mb-10">
                      <FaPhone className="mr-2" />
                      Ph: 042-111-100-678
                    </span>
                    <div className="flex items-center flex-wrap justify-center ">
                      <button className="inline-flex items-center border-2 border-solid border-white py-3 px-4 text-white rounded-full  mt-10 md:mt-0 ">
                        Get Directions <FaArrowRight className="ml-2 bg-white text-custom-button-color rounded-full p-1 " style={{ fontSize: '25px', transform: 'rotate(-40deg)' }} />
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-1 border-gray-200 border-opacity-60  overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/dha.jpg" alt="blog" />
                  <div className="text-center pt-3">
                    <h1 className="title-font text-center  font-medium uppercase text-location-text-color tracking-widest">DHA
                    </h1>
                    <p className="text-white text-xl franchise-text-3 mt-2">
                      <span className="special-text-2">Salt'n Pepper</span> Express
                    </p>
                    <span className="flex items-center justify-center text-footer-text-color mt-5">
                      <FaLocationDot className="mr-2" />
                      93-Y Phase III, DHA,Lahore
                    </span>
                    <span className="flex items-center text-center justify-center text-footer-text-color mt-4 mb-10">
                      <FaPhone className="mr-2" />
                      042-111-100-678
                    </span>
                    <div className="flex items-center flex-wrap justify-center ">
                      <button className="inline-flex items-center border-2 border-solid border-white py-3 px-4 text-white rounded-full  mt-10 md:mt-0 ">
                        Get Directions <FaArrowRight className="ml-2 bg-white text-custom-button-color rounded-full p-1 " style={{ fontSize: '25px', transform: 'rotate(-40deg)' }} />
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* village-franschise-started */}

        <section className="text-gray-600 body-font bg-custom-gray mt-10 bg-footer-background-color py-10"   >
          <p className="text-center text-white text-3xl special-text">
            Salt'n Pepper </p>
          <p className="text-center text-white text-3xl franchise-text mt-7 mb-6">
            Village Franchise </p>
          <div className="grid grid-cols-12 gap-8 py-5 items-center">

            {/* Image Section - Span 7 Columns */}
            <div className="col-span-12 lg:col-span-6">
              <img className="object-cover object-center rounded w-full" alt="hero" src="/images/village-fr.jpg" />
            </div>


            {/* Text Section - Span 5 Columns */}
            <div className="col-span-12 lg:col-span-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gujranwala-dev">
              <h1 className="title-font font-medium uppercase text-location-text-color tracking-widest">GUJRANWALA</h1>
              <p className="text-white text-xl franchise-text-2 mt-2">
                <span className="special-text-2">Salt'n Pepper</span> Village
              </p>
              <span className="flex items-center text-footer-text-color mt-5 sm:text-left">
                <FaLocationDot className="mr-2" />
                Adjacent to Rida Marquees /DHA Main Gate, GT Road Gujranwala Cantt
              </span>
              <span className="flex items-center text-footer-text-color mt-2 mb-10">
                <FaPhone className="mr-2" />
                Ph: 055-3884500 l ,055-3880400
              </span>
              <button className="inline-flex items-center bg-get-green-btn border-1  border-solid border-white py-3 px-4 text-white rounded-full mt-10 md:mt-0 get-direction-btn-green">
                Get Directions
                <FaArrowRight className="ml-2 bg-white text-get-green-btn rounded-full p-1"  />
              </button>
            </div>

          </div>
        </section>

      </div>



      {/* brand-section-started */}

      <div className="brand-section-2 bg-custom-gray py-20">
        <p className="text-center text-white text-3xl special-text">
          Salt'n Pepper </p>
        <p className="text-center text-white text-3xl franchise-text mt-7 mb-10 ">
          Express Franchises <span className='font-family-custom text-2xl'>(opening soon)</span> </p>

        {/* Grid for Images and Buttons */}
        <div className="flex flex-wrap justify-center items-center mt-10 gap-8">
          {/* Image 1 with Button */}
          <div className="w-80 h-auto text-center">
            <div className="bg-white py-10  mb-8 rounded justify-center text-center">
              <div className="flex justify-center">
                <img
                  src="/images/loc-icon.jpg"
                  alt="Brand 1"
                  className="object-cover"
                />
              </div>


              <h1 className="title-font font-sm uppercase text-location-text-color tracking-widest pt-5 text-xs mb-3">Opening Soon</h1>
              <span className='font-family-custom font-bold text-2xl mt-6'>Salt'n Pepper</span> <span className="text-xl">Express</span>
              <p><span className="text-xl">Al-Jalil Garden</span></p>
              <p><span className="text-xl">Sadhoke</span></p>
            </div>
           
          </div>

          {/* Image 2 with Button */}
          <div className="w-80 h-auto text-center">
            <div className="bg-white py-10  mb-8 rounded justify-center text-center">
              <div className="flex justify-center">
                <img
                  src="/images/loc-icon.jpg"
                  alt="Brand 1"
                  className="object-cover"
                />
              </div>


              <h1 className="title-font font-sm uppercase text-location-text-color tracking-widest pt-5 text-xs mb-3">Opening Soon</h1>
              <span className='font-family-custom font-bold text-2xl mt-6'>Salt'n Pepper</span> <span className="text-xl">Express</span>
              <p><span className="text-xl">Al-Jalil Garden</span></p>
              <p><span className="text-xl">Sheikhupura</span></p>
            </div>
           
          </div>


          {/* Image 3 with Button */}
          <div className="w-80 h-auto text-center">
            <div className="bg-white py-10  mb-8 rounded justify-center text-center">
              <div className="flex justify-center">
                <img
                  src="/images/loc-icon.jpg"
                  alt="Brand 1"
                  className="object-cover"
                />
              </div>


              <h1 className="title-font font-sm uppercase text-location-text-color tracking-widest pt-5 text-xs mb-3">Opening Soon</h1>
              <span className='font-family-custom font-bold text-2xl mt-6'>Salt'n Pepper</span> <span className="text-xl">Express</span>
              <p><span className="text-xl">Blue World City</span></p>
              <p><span className="text-xl">Rawalpindi</span></p>
            </div>
           
          </div>

        </div>

        
        {/* Grid for Images and Buttons */}
        <div className="flex flex-wrap justify-center items-center  gap-8">
          {/* Image 1 with Button */}
          <div className="w-80 h-auto text-center">
            <div className="bg-white py-10  mb-8 rounded justify-center text-center">
              <div className="flex justify-center">
                <img
                  src="/images/loc-icon.jpg"
                  alt="Brand 1"
                  className="object-cover"
                />
              </div>


              <h1 className="title-font font-sm uppercase text-location-text-color tracking-widest pt-5 text-xs mb-3">Opening Soon</h1>
              <span className='font-family-custom font-bold text-2xl mt-6'>Salt'n Pepper</span> <span className="text-xl">Express</span>
              <p><span className="text-xl">City Housing</span></p>
              <p><span className="text-xl">Gujranwala</span></p>
            </div>
           
          </div>

          {/* Image 2 with Button */}
          <div className="w-80 h-auto text-center">
            <div className="bg-white py-10  mb-8 rounded justify-center text-center">
              <div className="flex justify-center">
                <img
                  src="/images/loc-icon.jpg"
                  alt="Brand 1"
                  className="object-cover"
                />
              </div>


              <h1 className="title-font font-sm uppercase text-location-text-color tracking-widest pt-5 text-xs mb-3">Opening Soon</h1>
              <span className='font-family-custom font-bold text-2xl mt-6'>Salt'n Pepper</span> <span className="text-xl">Express</span>
              <p><span className="text-xl">City Housing</span></p>
              <p><span className="text-xl">Sialkot</span></p>
            </div>
           
          </div>


          {/* Image 3 with Button */}
          <div className="w-80 h-auto text-center">
            <div className="bg-white py-10  mb-8 rounded justify-center text-center">
              <div className="flex justify-center">
                <img
                  src="/images/loc-icon.jpg"
                  alt="Brand 1"
                  className="object-cover"
                />
              </div>


              <h1 className="title-font font-sm uppercase text-location-text-color tracking-widest pt-5 text-xs mb-3">Opening Soon</h1>
              <span className='font-family-custom font-bold text-2xl mt-6'>Salt'n Pepper</span> <span className="text-xl">Express</span>
              <p><span className="text-xl">Al-Jalil Garden</span></p>
              <p><span className="text-xl">Sharqpur</span></p>
            </div>
           
          </div>


                {/* Image 3 with Button */}
                <div className="w-80 h-auto text-center">
            <div className="bg-white py-10  mb-8 rounded justify-center text-center">
              <div className="flex justify-center">
                <img
                  src="/images/loc-icon.jpg"
                  alt="Brand 1"
                  className="object-cover"
                />
              </div>


              <h1 className="title-font font-sm uppercase text-location-text-color tracking-widest pt-5 text-xs mb-3">Opening Soon</h1>
              <span className='font-family-custom font-bold text-2xl mt-6'>Salt'n Pepper</span> <span className="text-xl">Express</span>
              <p><span className="text-xl">Al-Jalil Garden</span></p>
              <p><span className="text-xl">Burewala</span></p>
            </div>
           
          </div>

        </div>

      {/* Logo-carousel-started */}

        <div className=' py-10 bg-black'>
      <h1 className="text-center social-feed-text text-3xl text-white">Social Feed</h1>
      <LogoCarousel />
    </div>

     {/* Logo-carousel-ended */}

      </div>

    

      {/* Franchise-section-ended */}



    </>
  )
}

export default index
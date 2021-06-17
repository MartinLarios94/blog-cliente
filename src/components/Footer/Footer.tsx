import React from "react";
import LogoInverted from '../../assets/img/logo-inverted.svg';

function Footer() {
  return (
    <footer className="bg-tuatara text-white px-4 py-8 w-full mt-auto">
      <div className="container mx-auto flex-row md:py-8 md:px-10 md:grid md:grid-rows-footer md:grid-cols-2">
       <div className="md:row-start-1 md:col-start-1 md:col-end-2">
         <h1 className="font-bold text-2xl break-words w-8/12">No matter what stage you're in, we can support you.</h1>
         <p className="text-md font-poppins w-8/12 break-words">Questions on how we can? <a className="underline md:no-underline" href="/#" target="_self"><span>Contact Us</span></a></p>
       </div>
       <div className="md:flex md:row-start-1 md:col-start-2 md:col-end-3 md:justify-evenly items-start w-full">
         <div className="font-poppins py-6 md:py-0 md:mx-2">
           <h6 className="font-semibold uppercase my-4 md:mt-0 font-poppins">Support</h6>
           <ul>
             <li className="my-4 font-light"><a href="/#" target="_self"><span>Courses</span></a></li>
             <li className="my-4 font-light"><a href="/#" target="_self"><span>Couching</span></a></li>
             <li className="my-4 font-light"><a href="/#" target="_self"><span>Community</span></a></li>
             <li className="my-4 font-light"><a href="/#" target="_self"><span>Workshops</span></a></li>
           </ul>
         </div>
         <div className="font-poppins py-6 md:py-0 md:mx-2">
           <h6 className="font-semibold uppercase my-4 md:mt-0 font-poppins">Explore</h6>
           <ul>
             <li className="my-4 font-light"><a href="/#" target="_self"><span>Join our team</span></a></li>
             <li className="my-4 font-light"><a href="/#" target="_self"><span>Get Certified</span></a></li>
           </ul>
         </div>
         <div className="font-poppins py-6 md:py-0 md:mx-2">
           <h6 className="font-semibold uppercase my-4 md:mt-0 font-poppins">Partners</h6>
           <ul>
             <li className="my-4 font-light"><a href="/#" target="_self"><span>Partner 1</span></a></li>
             <li className="my-4 font-light"><a href="/#" target="_self"><span>Partner 2</span></a></li>
             <li className="my-4 font-light"><a href="/#" target="_self"><span>Partner 3</span></a></li>
             <li className="my-4 font-light"><a href="/#" target="_self"><span>Partner 4</span></a></li>
           </ul>
         </div>
       </div>
       <div className="font-poppins font-light border-t-2 border-white md:row-start-2 md:col-start-1 md:col-end-3 md:flex md:items-center md:mt-20">
         <img className="my-4 md:w-36 md:flex-grow" src={LogoInverted} alt="logo" />
         <p className="my-4 md:flex-grow-2 md:text-right md:mx-4">&copy; 2021 | All Rights Reserved</p>
         <ul className="md:flex-grow-2 flex md:justify-evenly">
           <li className="my-4 md:mx-4"><a href="/#" target="_self"><span>Privacy Policy</span></a></li>
           <li className="my-4 hidden md:block md:mx-4"><a href="/#" target="_self"><span>Terms of Service</span></a></li>
         </ul>
       </div>
      </div>
    </footer>
  );
}

export default Footer;

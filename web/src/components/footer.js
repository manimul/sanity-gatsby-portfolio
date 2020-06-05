import {Link} from 'gatsby'
import React from 'react'


const Footer = ({ siteTitle, siteDescription, siteLogo}) => (  

<footer className="">
<section className="bg-cta  p-4">
   <div className="container p-16 mx-auto flex flex-row">
      <div className="w-1/2">
         <h2 className="text-4xl font-barlow font-extrabold leading-tight">The Who's Who in Ghana Newsletter</h2>
         <p className="text-2xl font-normal italic pt-1 leading-tight">Get the weekly newsletter which is a pickle jar, packed full of the most creative and inspirational stuff on the web.</p>
         <form class="w-full max-w-lg mt-6">
  <div class=" -mx-3 mb-6">
    <div class="w-full px-3 mb-6 md:mb-0">
      <label class="block uppercase w-full tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Your email address
      </label>
      <input class="appearance-none block w-3/4 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="name@email.com"/>
      <button className="transition  w-1/4 duration-100 ease-in-out transform  hover:-translate-y-1  hover:scale-105  bg-brand-accent hover:opacity-75 text-white font-bold rounded-sm  shadow inline-block px-5 py-3 font-semibold ">Send</button>

    </div></div></form>
      
      </div>
      <div className="w-1/2"></div>
     
   </div>


</section>

<div class="bg-brand ">
   <div class="container mx-auto   px-12 md:px-0 pt-12 flex flex-col md:flex-row w-full  text-center  md:text-left  justify-center">
     
      <div className="w-full md:w-1/4  ">
      <Link to='/'><img className="text-center  mx-auto md:mx-0" src={siteLogo}/></Link>
         <p class="mt-4 mb-8">{siteDescription}</p> 
      </div>
      <div class=" w-full md:w-1/4  mb-6">
         <div class="text-xs uppercase  opacity-50 font-medium">Product</div>
         <a class="my-3 block" href="/#">Home<span class="text-xs p-1"></span></a><a class="my-3 block" href="/#">All Categories </a><a class="my-3 block" href="/#">The Book<span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Events<span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
      <div class=" w-full  md:w-1/4 mb-6 ">
         <div class="text-xs uppercase opacity-50  font-medium">Legal</div>
         <a class="my-3 block" href="/#">GDPR <span class=" text-xs p-1"></span></a><a class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
      <div class=" w-full  md:w-1/4 ">
         <div class="text-xs uppercase opacity-50  font-medium">Contact us</div>
         <a class="my-3 block" href="/#">XXX XXXX,XXX XXXX , XXX XXXX <span class=" text-xs p-1"></span></a><a class="my-3 block" href="/#">hello@whoswhoghana.com <span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
   </div>
</div>

<div class="bg-brand pt-2 ">
   <div class="flex pb-5 px-3 m-auto pt-5 text-center border-t border-brand-dark text-sm flex-col
      md:flex-row container">
      <div class="mt-2"> © {new Date().getFullYear()}, WWiG - Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a></div>
     
   </div>
</div>

</footer>
 )


Footer.defaultProps = {
    title: '',
    subtitle: '',
  }
  
  export default Footer
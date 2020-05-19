import {Link} from 'gatsby'
import React from 'react'


const Footer = ({ siteTitle, siteDescription, siteLogo}) => (  

<footer>


<div class="bg-brand">
   <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center pt-12">
     
      <div class="p-5 w-1/4 ">
      <Link to='/'><img src={siteLogo}/></Link>
         <p>{siteDescription}</p> 
      </div>
      <div class="p-5 w-1/4 ">
         <div class="text-xs uppercase text-gray-500 font-medium">Product</div>
         <a class="my-3 block" href="/#">Our Products <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Great Deals <span class="text-teal-600 text-xs p-1">New</span></a><a class="my-3 block" href="/#">Analytics <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Mobile <span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
      <div class="p-5 w-1/4 ">
         <div class="text-xs uppercase text-gray-500 font-medium">Support</div>
         <a class="my-3 block" href="/#">Help Center <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
      <div class="p-5 w-1/4 ">
         <div class="text-xs uppercase text-gray-500 font-medium">Contact us</div>
         <a class="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">contact@company.com <span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
   </div>
</div>

<div class="bg-brand pt-2 ">
   <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-500 border-brand-dark text-sm flex-col
      md:flex-row max-w-6xl">
      <div class="mt-2 text-gray-500"> © {new Date().getFullYear()}, WWiG - Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
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
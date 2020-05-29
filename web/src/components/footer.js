import {Link} from 'gatsby'
import React from 'react'


const Footer = ({ siteTitle, siteDescription, siteLogo}) => (  

<footer className="">


<div class="bg-brand ">
   <div class="container mx-auto  pt-12 flex flex-col md:flex-row w-full  text-center  md:text-left  justify-center">
     
      <div class=" w-full md:w-1/4 ">
      <Link to='/'><img className="text-center mx-auto md:mx-0" src={siteLogo}/></Link>
         <p class="mt-4">{siteDescription}</p> 
      </div>
      <div class=" w-full md:w-1/4 ">
         <div class="text-xs uppercase  font-medium">Product</div>
         <a class="my-3 block" href="/#">Home<span class="text-xs p-1"></span></a><a class="my-3 block" href="/#">Categories </a><a class="my-3 block" href="/#">The Book<span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Events<span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
      <div class=" w-full  md:w-1/4 ">
         <div class="text-xs uppercase  font-medium">Support</div>
         <a class="my-3 block" href="/#">Help Center <span class=" text-xs p-1"></span></a><a class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
      <div class=" w-full  md:w-1/4 ">
         <div class="text-xs uppercase  font-medium">Contact us</div>
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
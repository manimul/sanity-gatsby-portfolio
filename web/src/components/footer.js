import {Link} from 'gatsby'
import React from 'react'
import subscribeImg from '../img/subscribe.png'

const Footer = ({ siteTitle, siteDescription, siteLogo}) => (  

<footer className="">
<section  id="subscribe" className="bg-brand px-5  md:py-4 md:px-0 text-center md:text-left">
   <div className="container py-16 mx-auto flex flex-col-reverse md:flex-row">
      <div className="md:w-1/2 md:pt-16">
         <h2 className="text-2xl md:text-5xl font-luxia leading-tight">Subscribe to the Who's Who in Ghana Newsletter</h2>
         <p className="md:text-xl font-normal pt-4 max-w-md">Every week we share a newsletter than contains a sample of some of the fascinating profiles we document on our platform.</p>
         <form name="subscribe" class="w-full flex flex-col md:flex-row flex-wrap mt-6  mb-6 w-full  md:mb-0 " method="POST" data-netlify="true">
      <label class="block uppercase w-full tracking-wide text-xs font-bold mb-2" for="grid-first-name">
        Your email address
      </label>

      <input class="appearance-none block w-full md:w-1/2   text-brand-dark  md:ml-0   border rounded px-8 py-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="name@email.com"/>
      <button type="submit" className="transition w-full md:w-1/4 text-center md:-ml-1  duration-100 ease-in-out transform    hover:scale-105  bg-brand-accent font-bold rounded-sm  shadow px-8 py-4 font-semibold ">Subscribe</button>

    </form>
      
      </div>
      <div className="md:w-1/2">
      <img className="text-center  mx-auto md:mx-0" src={subscribeImg}/>
      </div>
     
   </div>

<hr className="opacity-75 border-brand-dark"></hr>
</section>

<div class="bg-brand-dark ">
   <div class="container mx-auto   px-12 md:px-0 pt-24 flex flex-col md:flex-row w-full  text-center  md:text-left  justify-center">
     
      <div className="w-full md:w-1/4 md:pr-16 ">
      <Link to='/'><img className="text-center   mx-auto md:mx-0" src={siteLogo}/></Link>
         <p class="mt-4 mb-8">{siteDescription}</p> 
      </div>
      <div class=" w-full md:w-1/4  mb-6">
         <div class="text-xs uppercase  opacity-50 font-medium">Explore</div>
         <a class ="my-3 block" href='/'>Home</a>
         <a class ="my-3 block" href='/categories'>All Categories</a>
         <a  class ="my-3 block" href='/about'>About</a>

      </div>
    
      <div class=" w-full  md:w-1/4 mb-6 ">
         <div class="text-xs uppercase opacity-50  font-medium">Legal</div>
         <a class="my-3 block" href="/#">GDPR <span class=" text-xs p-1"></span></a><a class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
      <div class=" w-full  md:w-1/4 ">
         <div class="text-xs uppercase opacity-50  font-medium">Social Media</div>
         <a class="my-3 block" target="_blank"  href="https://facebook.com/whoswhoghana">Facebook <span class=" text-xs p-1"></span></a>
         <a class="my-3 block"target="_blank"  href="https://twitter.com/whoswhoinghana">Twitter<span class="text-teal-600 text-xs p-1"></span></a>
         <a class="my-3 block" target="_blank" href="https://instagram.com/whoswhoghana">Instagram<span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
      <div class=" w-full  md:w-1/4 ">
         <div class="text-xs uppercase opacity-50  font-medium">Contact Us</div>
         <a class="my-3 block" href="/#">P.O. Box 10481 Accra North,<br></br> 28 Oroko Avenue Kokomlemle,<br></br> Accra <span class=" text-xs p-1"></span></a><a class="my-3 block" href="mailto:hello@whoswhoghana.com">hello@whoswhoghana.com <span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
   </div>
</div>

<div class="bg-brand-dark  pt-2 ">
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
import {Link} from 'gatsby'
import React from 'react'



function Hero (props) {
  return (
   
   
 <section id="hero">
 <div class="h-auto">
   <div class="container px-3 mx-auto flex flex-wrap flex-col-reverse  md:flex-row items-center">

 <div class="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
     <p class="uppercase tracking-loose w-full">{props.subtitle}</p>
     <h1 class="my-4 text-6xl font-serif leading-none">{props.title}</h1>
     <p class="leading-normal w-3/4 md:text-left text-2xl mb-8">{props.description}</p>
     <a class="mx-auto md:ml-0" href="#"><button class="transition duration-100 ease-in-out transform  hover:-translate-y-1  hover:scale-105  bg-brand-accent hover:opacity-75 text-white font-bold rounded-sm my-6 py-4 px-8 shadow">{props.buttonText}</button></a>
   
 </div>

 <div class="w-full md:w-1/2 items-center">
     <img class="w-full md:w-5/5 z-50" src={props.image}></img>
 </div>
 
</div>

</div>
</section>



  )
}

Hero.defaultProps = {
  title: '',
  subtitle: '',
  description: '',
  buttonText: 'Explore',
  image: ''
}

export default Hero

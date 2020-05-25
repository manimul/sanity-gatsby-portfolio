import {Link} from 'gatsby'
import React from 'react'


function Hero (props) {
  return (
   
   
 <section id="hero">
 <div class="h-auto">
   <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

 <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
     <p class="uppercase tracking-loose w-full">{props.subtitle}</p>
     <h1 class="my-4 text-5xl font-bold leading-tight">{props.title}</h1>
     <p class="leading-normal text-2xl mb-8">{props.description}</p>
     <a href="#featured_profiles"><button class="mx-auto lg:mx-0 hover:underline bg-brand-accent text-white font-bold rounded-sm my-6 py-4 px-8 shadow-2xl">{props.buttonText}</button></a>

 </div>

 <div class="w-full md:w-3/5 text-center">
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
  description: 'This is the default description',
  buttonText: 'Click Me',
  image: ''
}

export default Hero

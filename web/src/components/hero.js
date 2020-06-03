import {Link} from 'gatsby'
import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';




function Hero (props) {
  return (
   
   
 <section id="hero">
 <div className="h-auto">
   <div className={'container px-3 mx-auto flex flex-wrap flex-col-reverse items-center' + (props.reverse ? ' md:flex-row-reverse' : ' md:flex-row' )}>

 <div className={   " flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left " }>
     <p className="uppercase  text-center md:text-left tracking-loose w-full">{props.subtitle}</p>
     <h1 className="my-4  w-full text-center md:text-left text-3xl md:text-6xl font-serif leading-none">{props.title}</h1>
     <p className="leading-normal md:w-3/4 md:text-left md:text-2xl md:mb-8">{props.description}</p>
     <button onClick={() => scrollTo("#content_intro")} className="mx-auto md:ml-0 duration-100 ease-in-out transform  hover:-translate-y-1  hover:scale-105  bg-brand-accent hover:opacity-75 text-white font-bold rounded-sm my-6 py-4 px-8 shadow">{props.buttonText}</button>
   
 </div>

 <div className="w-full md:w-1/2 items-center">
     <img className="w-full md:w-5/5 z-50" src={props.image}></img>
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

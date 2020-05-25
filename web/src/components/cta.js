
import {Link} from 'gatsby'
import React from 'react'
import heroImg from '../img/hero-img.png'
import bookImg from '../img/book-cover.png'

function Cta (props) {
    return (
        <div class="my-32 text-base lg:justify-center">
        <div class="bg-cta py-8 bg-fixed md:mx-8 flex flex-col md:flex-row shadow-2xl rounded-lg">
            <div class="w-full md:w-1/2">
                
                <img src={bookImg} class="w-auto -mt-24  md:absolute md:-mt-24 md:w-2/7" />
            </div>
            <div class="pb-6 px-6 md:py-12 md:pr-24 text-center md:text-left w-full md:w-1/2">
                
                <h2 class="leading-tight text-xl md:text-4xl font-bold ">The only book to profile Ghana's V.I.Ps</h2>
                <p class="my-4 md:mb-8  block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita.</p>
                <a href="#" class="bg-brand-accent inline-block px-5 py-3 font-semibold rounded">Explore</a>

                
                
            </div>
        </div>
</div>

 )
}

Cta.defaultProps = {
    title: '',
    subtitle: '',
  }
  
  export default Cta
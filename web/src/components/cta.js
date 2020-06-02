
import {Link} from 'gatsby'
import React from 'react'
import heroImg from '../img/hero-img.png'
import bookImg from '../img/book-cover.png'
import { graphql } from "gatsby"

function Cta (props) {
    return (
        <div class="my-16 md:my-32 text-base md:px-16 lg:justify-center">
        <div class="bg-cta py-8 bg-fixed md:mx-8 flex flex-col md:flex-row shadow rounded-lg">
            <div class="w-full md:w-1/2">
                
                <img src={bookImg} class="w-auto -mt-24  md:absolute md:-mt-24 md:w-2/7" />
            </div>
            <div class="pb-6 px-6 md:py-12 md:pr-24 text-center md:text-left w-full md:w-1/2">
                
                <h2 class="leading-snug text-xl md:text-4xl font-bold ">The only book to profile Ghana's V.I.Ps</h2>
                <p class="my-4 md:mb-8   block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita.</p>
                <a href="#" class="transition duration-100 ease-in-out transform  hover:-translate-y-1  hover:scale-105  bg-brand-accent hover:opacity-75 text-white font-bold rounded-sm  shadow inline-block px-5 py-3 font-semibold ">Explore</a>

                
                
            </div>
        </div>
</div>

 )
}

Cta.defaultProps = {
    title: '',
    subtitle: '',
  }

  export const query = graphql`
  fragment SanityCta on SanityPage {
          _key
        _type
        title
        flow 

  }
`
  
  export default Cta
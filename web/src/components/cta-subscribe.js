
import {Link} from 'gatsby'
import React from 'react'
import heroImg from '../img/hero-img.png'
import bookImg from '../img/book-cover.png'
import profileImg from '../img/profile.png'

function CtaSubscribe (props) {
    return (
     
    <div class="my-32 text-base lg:justify-center">
        <div class="bg-cta  py-8 bg-fixed md:mx-8  flex flex-col md:flex-row relative shadow-2xl rounded-lg">
        <div class="pb-6 px-6 md:p-12 text-center md:text-left  w-full lg:w-1/2">
                <h2 class="leading-tight text-xl md:text-4xl font-bold">Are you sure you know Sarkodie? </h2>
                <p class="my-4 md:mb-8  block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae.</p>
                
                    <a href="#" class="bg-brand-accent inline-block text-gray-100 px-5 py-3 font-semibold rounded">Subscribe Now</a>
              
            </div>
            <div class="w-full md:w-1/2 h-64">
                
                <img src={profileImg} class="absolute bottom-0 w-auto md:w-2/7" />
            </div>
           
        </div>
    </div> 


 )
}

CtaSubscribe.defaultProps = {
    title: '',
    subtitle: '',
  }
  
  export default CtaSubscribe

import {Link} from 'gatsby'
import React from 'react'
import heroImg from '../img/hero-img.png'
import bookImg from '../img/book-cover.png'
import profileImg from '../img/profile.png'

function CtaSubscribe (props) {
    return (
     
    <div class="my-32 lg:py-12 lg:flex lg:justify-center">
        <div class="bg-brand lg:mx-8 lg:flex lg:w-full  relative lg:shadow-lg lg:rounded-lg">
        <div class="py-12 px-24 max-w-xl lg:max-w-5xl  lg:w-1/2">
                <h2 class="text-4xl text-gray-800 font-bold">Are you sure you know Sarkodie? </h2>
                <p class="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>
                <div class="mt-8">
                    <a href="#" class="bg-brand-accent text-gray-100 px-5 py-3 font-semibold rounded">Subscribe Now</a>
                </div>
            </div>
            <div class="lg:w-1/2">
                
                <img src={profileImg} class="absolute bottom-0 w-2/7" />
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
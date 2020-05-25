
import {Link} from 'gatsby'
import React from 'react'
import heroImg from '../img/hero-img.png'
import bookImg from '../img/book-cover.png'

function Cta (props) {
    return (
     
    <div class="my-32 lg:py-12 lg:flex lg:justify-center">
        <div class="bg-brand lg:mx-8 lg:flex lg:w-full lg:shadow-lg lg:rounded-lg">
            <div class="lg:w-1/2">
                
                <img src={bookImg} class="absolute -mt-24 w-2/7" />
            </div>
            <div class="py-12 pr-12 max-w-xl lg:max-w-5xl lg:w-1/2">
                <h2 class="text-4xl font-bold">The only book to profile Ghana's V.I.Ps</h2>
                <p class="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>
                <div class="mt-8">
                    <a href="#" class="bg-brand-accent text-gray-100 px-5 py-3 font-semibold rounded">Explore</a>
                </div>
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
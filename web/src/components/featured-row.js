
import {Link} from 'gatsby'
import React from 'react'
import heroImg from '../img/hero-img.png'
import bookImg from '../img/book-cover.png'
import gtvImg from '../img/gtv.png'
import peacefmImg from '../img/peacefm.png'
import joytvImg from '../img/joytv.png'

function FeaturedRow (props) {
    return (
        <section id="featured_row ">
        <div className="py-6 md:py-32 md:px-16 flex flex-col md:flex-row ">
        <div className=" md:w-1/5"><p className="text-center md:text-left text-2xl font-bold ">As featured on:</p></div>
        <div className="md:w-4/5 flex flex-wrap flex-row">
        <div className="w-1/2 md:w-1/3 mx-auto  p-3 md:p-0"><img src={joytvImg}/></div>
        <div className="w-1/2 md:w-1/3 mx-auto p-3 md:p-0"><img src={peacefmImg}/></div>
        <div className="w-1/2 md:w-1/3 mx-auto p-3 md:p-0"><img src={gtvImg}/></div>
        </div>

        </div>
      </section>

 )
}

FeaturedRow.defaultProps = {
    title: '',
    subtitle: '',
  }
  
  export default FeaturedRow
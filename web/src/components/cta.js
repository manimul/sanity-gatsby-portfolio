
import {Link} from 'gatsby'
import React from 'react'

function Cta (props) {
    return (
     

<section>

          
<div class="w-full   bg-brand" >
<div class=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
<div class=" m-0  p-0  text-3xl  text-white  antialiased uppercase  text-center">Get Our Updates</div>
<div class=" m-0  p-0  text-xl  text-white  antialiased  text-center">Find out about events and other news</div>
<div class=" mt-5  flex  flex-row  flex-wrap">
<input type="text" class=" text-gray-600  w-2/3  p-3" placeholder="john@mail.com"/>
<button class=" p-3  w-1/3  bg-brand-accent   text-white hover:brand-accent" type="button">Subscribe</button>
</div>
</div>
</div>
</section>
 )
}

Cta.defaultProps = {
    title: '',
    nodes: [],
    browseMoreHref: ''
  }
  
  export default Cta
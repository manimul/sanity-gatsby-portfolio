import {Link} from 'gatsby'
import React, {useState} from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import Sidebar from './sidebar'



import styles from './header.module.css'

function Header ({onHideNav, onShowNav, showNav, siteTitle, siteLogo}) {

  const [isExpanded, toggleExpansion] = useState(false)
  const [catExpanded, toggleCatExpansion] = useState(false)
	return (

  <div className="">

    <div className="bg-brand fixed  w-full shadow z-50">
	<div className='invisible xl:visible'><Sidebar/></div>

      <nav class="container flex md:items-end mx-auto justify-start   align-baseline flex-wrap  md:py-6 px-5 md:px-0 w-full ">

		<div class="flex items-center  flex-shrink-0  ml-4  md:ml-0 mr-6">
    <Link to='/'><img className='w-32 md:w-48 ' src={siteLogo}/></Link>
		</div>

		<div class="block order-first md:order-last py-4 md:hidden">
			<button onClick={() => toggleExpansion(!isExpanded)} id="nav-toggle" class="flex  px-3 py-2 rounded ">
				<svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

	

		<div className={`flex flex-col`}>




		<div class={`${ isExpanded ? `absolute bg-brand text-xl left-0 text-center h-screen mt-12 mmx-auto` : `hidden` }  w-full flex-grow md:flex md:items-end lg:w-auto  lg:block pt-6  lg:pt-0`} id="nav-content">
			<ul class=" transform  transition ease-in-out duration-150 list-reset lg:flex justify-start flex-1 items-end uppercase text-sm font-medium">
			<li class="  md:mr-3 md:mt-0 ">
        <Link  class ="opacity-75  hover:opacity-100" to='/'>Home</Link>
				</li>
				<li class="  md:mr-3 md:mt-0 ">
        <Link  class ="opacity-75  hover:opacity-100" to='/most-influential/'>Most Influential</Link>
				</li>
				<li class="md:mr-3 md:mt-0">
        <Link class ="opacity-75  hover:opacity-100" to='/entrepreneurs/'>Entrepreneurs</Link>
				</li>
				<li class="md:mr-3 md:mt-0">
        <Link class ="opacity-75  hover:opacity-100" to='/spiritual-leaders/'>Spiritual Leaders</Link>
				</li>
				<li class="md:mr-3 md:mt-0">
        <Link class ="opacity-75  hover:opacity-100" to='/corporate-gurus/'>Corporate</Link>
				</li>
        <li class="md:mr-3 md:mt-0  ">
        <Link class ="opacity-75  hover:opacity-100  " to='/power-ladies/'>Power Ladies</Link>
				</li>
			


        <li class=" md:mr-3 md:mt-0   hover:opacity-100  focus:opacity-100  "><button  className={`${ catExpanded ? `uppercase text-sm font-regular opacity-100  ` : `hover:opacity-100  uppercase text-sm font-regular opacity-75` } `} onClick={() => toggleCatExpansion(!catExpanded)}>More Categories</button>
      </li>
            
         
	

		 

		  <li className="text-blue-accent md:mr-5 md:mt-0   ">
         
         <Link className="flex justify-center items-center opacity-75 hover:opacity-100 "  to='/book'><span className=" " ><Icon  symbol='book'/></span><span className="pl-1">The Book</span></Link>
         </li>
         
		 <li className='md:mr-3 md:mt-0 opacity-50 text-base mb-1 hover:opacity-100  '><a href="https://facebook.com/whoswhoghana" className=""  ><Icon  symbol='facebook'/></a>
</li>
			  <li className='md:mr-3 md:mt-0 opacity-50 text-base  mb-1 hover:opacity-100 '><a href="https://twitter.com/whoswhoghana" className="  "  ><Icon  symbol='twitter'/></a>
</li>
			  <li className='md:mr-3 md:mt-0 opacity-50 text-base   mb-1 hover:opacity-100'><a href="https://instagram.com/whoswhoghana" className="" ><Icon  symbol='instagram'/></a>
</li>


		 

			</ul>
		</div>
		
		
		</div>
		
	</nav>
	
  <div role="toggle" class={`${ catExpanded ? `w-full bg-brand-dark mt-0  pt-3 pb-3 hidden md:block` : `hidden` } `}>
    <ul className="container mx-auto   font-medium uppercase text-xs text-center leading-snug list-reset lg:flex flex-wrap justify-end flex-1   ">
        <li class="md:mr-2  md:mt-0 my-2 p-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/statesmen/'>Statesmen</Link>
				</li>
				<li class="md:mr-2  md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/traditional-leaders/'>Traditional Leaders</Link>
				</li>
        <li class="md:mr-4  md:mt-0 p-2 my-2  rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/politicians/'>Politicians</Link>
				</li>
        <li class="md:mr-2  md:mt-0 p-2 my-2  rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/media-personalities/'>Media Personalities</Link>
				</li>
        <li class="md:mr-2  md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/music-industry/'>Music Industry</Link>
				</li>
        <li class="md:mr-2  md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/movie-stars/'>Movie Stars</Link>
				</li>
        <li class="md:mr-2  md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/stage-artists/'>Stage Artists</Link>
				</li>
     
        <li class="md:mr-2  md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/legal-practitioners/'>Legal Practitioners</Link>
				</li>
        <li class="md:mr-2  md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/sporting-personalities/'>Sporting Personalities</Link>
				</li>
        <li class="md:mr-2 md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/humanitarians/'>Humanitarians</Link>
				</li>
       
        </ul>
			</div>


  
    </div>
  </div>
)}

export default Header

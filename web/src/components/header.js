import {Link} from 'gatsby'
import React, {useState} from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import Sidebar from './sidebar'



import styles from './header.module.css'

function Header ({onHideNav, onShowNav, showNav, siteTitle, siteLogo}) {

	const [isExpanded, toggleExpansion] = useState(false)
	return (

  <div className="">

    <div className="bg-brand fixed  w-full shadow z-50">
	<div className='invisible md:visible'><Sidebar/></div>

      <nav class="container flex items-center mx-auto justify-between flex-wrap py-1  md:pb-3 px-5 md:px-0 w-full  top-0">

		<div class="flex items-center flex-shrink-0  mr-6">
    <Link to='/'><img className='md:w-16 md:mt-4' src={siteLogo}/></Link>
		</div>

		<div class="block order-last py-4 md:hidden">
			<button onClick={() => toggleExpansion(!isExpanded)} id="nav-toggle" class="flex  px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

	

		<div className={`flex flex-col`}>
		<div className='-mt-2 w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block text-xs pb-2 lg:pt-0'>
			  <ul className='list-reset lg:flex justify-end flex-1 items-center uppercase '>
			  <li className='mr-5 opacity-75 hover:opacity-100 '><a href="https://facebook.com/whoswhoghana" className="flex"  ><span className="mt-1 " ><Icon  symbol='facebook'/></span><span className="pl-1">Facebook</span></a>
</li>
			  <li className='mr-5 opacity-75 hover:opacity-100 '><a href="https://twitter.com/whoswhoghana" className="flex"  ><span className="mt-1" ><Icon  symbol='twitter'/></span><span className="pl-1">Twitter</span></a>
</li>
			  <li className='opacity-75 hover:opacity-100'><a href="https://instagram.com/whoswhoghana" className="flex" ><span className='mt-1 ' ><Icon  symbol='instagram'/></span><span className="pl-1">Instagram</span></a>
</li>
				  </ul>
		  </div>
		<div class={`${ isExpanded ? `absolute bg-brand-dark text-xl left-0 text-center h-screen mt-6 mmx-auto` : `hidden` }  w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:block pt-6 pb-1 lg:pt-0`} id="nav-content">
			<ul class=" transform  transition ease-in-out duration-150 list-reset lg:flex justify-end flex-1 items-center tracking-wide font-bold">
				<li class="  lg:mr-5 lg:mt-0 opacity-75 hover:opacity-100">
        <Link to='/most-influential/'>Most Influential</Link>
				</li>
				<li class="lg:mr-5 lg:mt-0  opacity-75 hover:opacity-100">
        <Link to='/entrepreneurs/'>Entrepreneurs</Link>
				</li>
				<li class="lg:mr-5 lg:mt-0  opacity-75 hover:opacity-100">
        <Link to='/spiritual-leaders/'>Spiritual Leaders</Link>
				</li>
				<li class="lg:mr-5 lg:mt-0  opacity-75 hover:opacity-100">
        <Link to='/corporate-gurus/'>Corporate</Link>
				</li>
        <li class="lg:mr-5 lg:mt-0  opacity-75 hover:opacity-100">
        <Link to='/power-ladies/'>Power Ladies</Link>
				</li>
        <li className="text-blue-accent lg:mt-0 ">
         
         <Link className="inline-flex align-text-bottom"  to='/book'><span className="text-lg mt-1" ><Icon  symbol='book'/></span><span className="pl-1">WWiG Book</span></Link>
         </li>
			</ul>
		</div></div>
	
	</nav>



  
    </div>
  </div>
)}

export default Header

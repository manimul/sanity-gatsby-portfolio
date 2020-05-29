import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'


import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle, siteLogo}) => (
  <div className="">
	  
    <div className="bg-brand fixed  w-full shadow z-50">
   

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>
	 
      <nav class="container flex items-center mx-auto justify-between flex-wrap  pb-3  w-full  top-0">
		
		<div class="flex items-center flex-shrink-0  mr-6">
    <Link to='/'><img className='w-16 mt-4' src={siteLogo}/></Link>
		</div>

		<div class="block lg:hidden">
			<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>
		<div className='flex flex-col'>
		<div className=' w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block text-xs pb-2 lg:pt-0'>
			  <ul className='list-reset lg:flex justify-end flex-1 items-center uppercase '>
			  <li className='mr-5 opacity-75 hover:opacity-100 '><Link className="flex"  to='#'><span className="mt-1 " ><Icon  symbol='facebook'/></span><span className="pl-1">Facebook</span></Link>
</li>
			  <li className='mr-5 opacity-75 hover:opacity-100 '><Link className="flex"  to='#'><span className="mt-1" ><Icon  symbol='twitter'/></span><span className="pl-1">Twitter</span></Link>
</li>
			  <li className='opacity-75 hover:opacity-100'><Link className="flex"  to='#'><span className='mt-1 ' ><Icon  symbol='instagram'/></span><span className="pl-1">Instragram</span></Link>
</li>
				  </ul>
		  </div>
		<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
			<ul class=" transform transition ease-in-out duration-150 list-reset lg:flex justify-end flex-1 items-center tracking-wide font-bold">
				<li class="  mr-5 mt-0 opacity-75 hover:opacity-100">
        <Link to='/most-influential/'>Most Influential</Link>
				</li>
				<li class="mr-5 mt-0 opacity-75 hover:opacity-100">
        <Link to='/entrepreneurs/'>Entrepreneurs</Link>
				</li>
				<li class="mr-5 mt-0 opacity-75 hover:opacity-100">
        <Link to='/spiritual-leaders/'>Spiritual Leaders</Link>
				</li>
				<li class="mr-5 mt-0 opacity-75 hover:opacity-100">
        <Link to='/corporate-gurus/'>Corporate</Link>
				</li>
        <li class="mr-5 mt-0 opacity-75 hover:opacity-100">
        <Link to='/power-ladies/'>Power Ladies</Link>
				</li>
        <li className="text-blue-accent mt-0">
         
         <Link className="flex"  to='#'><span className="text-lg mt-1" ><Icon  symbol='book'/></span><span className="pl-1">WWiG Book</span></Link>
         </li>
			</ul>
		</div></div>
	</nav>



  
    </div>
  </div>
)

export default Header

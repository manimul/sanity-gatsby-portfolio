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
	<div className='invisible md:visible'><Sidebar/></div>

      <nav class="container flex items-center mx-auto justify-between flex-wrap py-1  md:pb-3 px-5 md:px-0 w-full  top-0">

		<div class="flex items-center flex-shrink-0  mr-6">
    <Link to='/'><img className='w-32 md:w-48 md:mt-4' src={siteLogo}/></Link>
		</div>

		<div class="block order-last py-4 md:hidden">
			<button onClick={() => toggleExpansion(!isExpanded)} id="nav-toggle" class="flex  px-3 py-2 rounded ">
				<svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

	

		<div className={`flex flex-col`}>
		<div className='-mt-2 w-full flex-grow lg:flex lg:items-center md:w-auto hidden md:block text-xs pb-2 md:pt-0'>
			  <ul className='list-reset md:flex justify-end flex-1 items-center uppercase '>
			  <li className='mr-5 opacity-50 hover:opacity-100 align-middle '><a href="https://facebook.com/whoswhoghana" className="flex justify-center items-center"  ><span className=" " ><Icon  symbol='facebook'/></span><span className="pl-1">Facebook</span></a>
</li>
			  <li className='mr-5 opacity-50  hover:opacity-100 '><a href="https://twitter.com/whoswhoghana" className="flex justify-center items-center"  ><span className="" ><Icon  symbol='twitter'/></span><span className="pl-1">Twitter</span></a>
</li>
			  <li className='opacity-50  hover:opacity-100'><a href="https://instagram.com/whoswhoghana" className="flex justify-center items-center" ><span className=' ' ><Icon  symbol='instagram'/></span><span className="pl-1">Instagram</span></a>
</li>
				  </ul>
		  </div>
		<div class={`${ isExpanded ? `absolute bg-brand text-xl left-0 text-center h-screen mt-6 mmx-auto` : `hidden` }  w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:block pt-6 pb-1 lg:pt-0`} id="nav-content">
			<ul class=" transform  transition ease-in-out duration-150 list-reset lg:flex justify-end flex-1 items-center  font-medium">
				<li class="  md:mr-5 md:mt-0 opacity-50  hover:opacity-100">
        <Link to='/most-influential/'>Most Influential</Link>
				</li>
				<li class="md:mr-5 md:mt-0 opacity-50 hover:opacity-100">
        <Link to='/entrepreneurs/'>Entrepreneurs</Link>
				</li>
				<li class="md:mr-5 md:mt-0 opacity-50  hover:opacity-100">
        <Link to='/spiritual-leaders/'>Spiritual Leaders</Link>
				</li>
				<li class="md:mr-5 md:mt-0 opacity-50  hover:opacity-100">
        <Link to='/corporate-gurus/'>Corporate</Link>
				</li>
        <li class="md:mr-5 md:mt-0  opacity-50  hover:opacity-100">
        <Link to='/power-ladies/'>Power Ladies</Link>
				</li>
			


        <li class=" md:mr-5 md:mt-0 opacity-50  hover:opacity-100 "><button onClick={() => toggleCatExpansion(!catExpanded)}>All Categories</button>
      </li>
            
         
	

		 

		  <li className="text-blue-accent opacity-50 hover:opacity-100 md:mt-1 ">
         
         <Link className="flex justify-center items-center"  to='/book'><span className="text-lg  mt-1 " ><Icon  symbol='book'/></span><span className="pl-1">The Book</span></Link>
         </li>
         



		 

			</ul>
		</div></div>
	 
	</nav>
  <div role="toggle" class={`${ catExpanded ? `w-full bg-brand-dark mt-0  pt-3 pb-3` : `hidden` } `}>
    <ul className="container mx-auto   font-semibold text-center leading-snug list-reset lg:flex flex-wrap justify-end flex-1   ">
        <li class="md:mr-2  md:mt-0 my-2 p-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/power-ladies/'>Statesmen</Link>
				</li>
				<li class="md:mr-2  md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/categories/'>Traditional Leaders</Link>
				</li>
        <li class="md:mr-2  md:mt-0 p-2 my-2  rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/categories/'>Politicians</Link>
				</li>
        <li class="md:mr-2  md:mt-0 p-2 my-2  rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/categories/'>Media Industry</Link>
				</li>
        <li class="md:mr-2  md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/categories/'>Music Industry</Link>
				</li>
        <li class="md:mr-2  md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/categories/'>Movie Stars</Link>
				</li>
        <li class="md:mr-2  md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/categories/'>Stage Artists</Link>
				</li>
        <li class="md:mr-2  md:mt-0 my-2 p-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/categories/'>Media Personalities</Link>
				</li>
        <li class="md:mr-2  md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/categories/'>Legal Practitioners</Link>
				</li>
        <li class="md:mr-2  md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/categories/'>Sporting Personalities</Link>
				</li>
        <li class="md:mr-2 md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/categories/'>Humanitarians</Link>
				</li>
        <li class="md:mr-2  md:mt-0 p-2 my-2 rounded-md bg-blue-lighter opacity-50  hover:opacity-100">
        <Link to='/categories/'>Parliamentarians</Link>
				</li>
        </ul>
			</div>


  
    </div>
  </div>
)}

export default Header

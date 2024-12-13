import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between w-3/4 flex-row m-auto'>
        {/* Left */}
        <div w->
        <Link to="/"> Logo</Link> 
        </div>
        {/* middle */}
        <div>
            <ul className='flex flex-row justify-between gap-4 rounded '>
                
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        {/* End */}
        <div className='flex-column cursor-pointer '>
            <div className='w-7 h-1 bg-black m-2'></div>
            <div className='w-7 h-1 bg-black m-2'></div>
        </div>
    </div>
 )
}
export default Navbar
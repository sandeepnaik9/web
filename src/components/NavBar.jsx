import React, { useState } from 'react'
import {MdOutlineDashboard, BiBill} from 'react-icons/md'
import posicon from '../assets/pos-terminal.png'
import dashboardicon from '../assets/dashboard.png'
import billsicon from '../assets/receipt.png'
import itemsicon from '../assets/box.png'
const NavBar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
    return (
      <div className='d-flex flex-column align-items-stretch' style={{width:"250px", backgroundColor:"#201E20"}}>
        <div className="logo h3 text-center w-100 pt-3 text-white mb-5">
            POS
        </div>
        <ul className='d-flex flex-column row-gap-5' style={{listStyle:'none', color:"whitesmoke"}}>
            <li>
                <a className='nav-link' href="">
                    <img src={posicon} className='m-3' width="50px" height="50px" alt="" srcset="" />
                    POS
                </a>
            </li>
            <li>
                
                <a className='nav-link d-flex align-items-center text-wrap text-white' href="">
                    
                    <div>
                    <img src={dashboardicon} className='m-3' width="50px" height="50px" alt="" srcset="" />
                    </div>
                    <div>
                    Dashboard
                    </div>
                </a>
            </li>
            <li>
                <a className='nav-link d-flex align-items-center' href="">
                <div>
                    <img src={itemsicon} className='m-3' width="50px" height="50px" alt="" srcset="" />
                    </div>
                    <div>
                    Products
                    </div>
                    
                </a>
            </li>
            <li>
                <a className='nav-link d-flex align-items-center' href="">
                <div>
                    <img src={billsicon} className='m-3' width="50px" height="50px" alt="" srcset="" />
                    </div>
                    <div>
                    Bills
                    </div>
                    
                </a>
            </li>


        </ul>
      </div>
    );
}

export default NavBar
import React from "react";
import {NavLink} from 'react-router-dom';
const Menu = () =>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 menu">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to={'/'} className={'nav'}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/About'} className={'nav'}>About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/Gallery'} className={'nav'}>Gallery</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'} className={'nav'}>Rules And Regulations</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'} className={'nav'}>Contact Us</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Menu
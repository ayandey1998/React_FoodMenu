import React from 'react';


const Header = ()=> {
    return(
        
        <div className='header'>
            <div className='social-media'>
                <span> Follow Us On: </span>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-google"></i>
            </div>
            <div className='right-area'>
                <div className='btn'>
                    <span> Create An Account</span>
                    <button> LogIn</button>
                </div>
            </div>
            

            
        </div>

    )
}


export default Header;

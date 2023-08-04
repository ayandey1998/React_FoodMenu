import React from 'react';

const Cards = (props)=>{
    return(
        <div className='cards'>
            <div class="Title">
                <h1 className='card-title'>{props.title} </h1>
            </div>
            <div class="numbers">
                <p className='card-description'> {props.description} </p>
            </div>
        </div>
        
    )
   
}

export default Cards;
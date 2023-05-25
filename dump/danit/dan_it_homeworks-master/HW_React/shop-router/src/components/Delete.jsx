import React from 'react';

export const Delete=(removeFromBasket,)=>{
    return (
        <>
            <span className="fas fa-trash-alt" onClick={removeFromBasket}></span>
        </>
    )
}
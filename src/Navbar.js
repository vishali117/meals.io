import React from 'react';

function Navbar() {
    return (
        <div style={{backgroundColor:'brown'}}>
            <h1 style={{color:'#ff7',margin:'10px'}}>Meals App</h1>
            <a style={{color:'white',margin:'10px'}}>Home</a>
            <a style={{color:'white',margin:'10px'}}>Order</a>
            <a style={{color:'white',margin:'10px'}}>Contact</a>
            
        </div>
    );
}

export default Navbar;
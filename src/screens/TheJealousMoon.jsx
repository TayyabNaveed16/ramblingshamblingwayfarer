import React from 'react';

function TheJealousMoon() {
    return (
        <div>
            <div className="background-container">
                <img className='moon' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="" />
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>

                <div style={{ zIndex: 3, marginTop: '40px', position: 'relative', marginLeft:'80px', display:'flex', flexDirection:'column' }}>
                    <p className='moonText'>And each night the moon comes to visit</p>
                    <p className='moonText'>Pret</p>

                    
                </div>
            </div>

        </div>
    );
}

export default TheJealousMoon;

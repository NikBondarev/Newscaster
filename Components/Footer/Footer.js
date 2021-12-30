import React from "react";


const Footer = () => {
    return(
        <div style={{display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 100,
            paddingBottom:50}}>
            <div style={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'}}>
                <h4 style={{fontSize: 30}}>
                    News<span style={{color:'blue'}}>caster</span>
                </h4>
                <p style={{fontSize:12}}>
                    Single Page Application
                </p>
            </div>
            <p>
                Diplom Project
            </p>
            <div style={{textAlign: 'right'}}>
                <p>
                    Made by
                </p>
                <p>
                    Bondareu Mikita
                </p>
            </div>
        </div>
    )
}

export default Footer;
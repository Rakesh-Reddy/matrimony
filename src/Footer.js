import React from 'react';
// import amazon from '../images/cart-logo.png';
import LOGO from './images/download.png';

const Footer = (props) => {
    return (
        <div>
            <div className=" row mx-auto d-block mt-3 " style={{ backgroundColor: "#ff6200" }}><img className=" rounded mt-3 img-fluid" width="170" style={{ height: "60px" }} height="10" src={LOGO} alt="logo" /></div>
            <div className="row pt-3 pb-3" style={{ backgroundColor: "#ff6200" }}>
                <div className="col text-white  "><div>About us<br />
                    Documentation<br />
                    Support / Contact Us<br />
                    Registry Status<br />
                    Report Issues<br />
                    Security<br />
                </div>
                </div>
                <div className="col text-white pb-2">
                    <div>facebook </div>
                    <div>twitter</div>
                    <div> Community Site </div>
                    <div>instragram</div>
                </div>
                <div className="col text-white">
                    <div>Help </div>
                    <div>Privacy Policy </div>
                    Content Disclaimer
         </div>
            </div>
            <div className="row text-white pt-3 pb-3 border border-top" style={{ backgroundColor: "#ff6200" }}>
                <div className="col">
                    Countries:   Australia | Brazil | Canada | China | France | Germany | Italy | Japan | Mexico | Netherlands | Spain  |  United Kingdom  | United States
       </div>
            </div>
            <div className="text-white pt-3 pb-3" style={{ backgroundColor: "#ff6200" }}>
                Copyright © 2008 MEE TO MATRIMONY APP Inc. All rights reserved.
       </div>
        </div>
    );
}

export default Footer;
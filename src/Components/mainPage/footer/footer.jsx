import React from "react";
import "../../../assets/css/Footer/footer.css"
import { useLocation } from "react-router-dom";
import { footerlogo1,footerlogo2,footerlogo3, playstoreicon, appstoreicon, dropdown, } from "../../../assets/images/images";

const Footer=()=>{
   const location =useLocation()
   const logos=[footerlogo1,footerlogo2,footerlogo3]
    return location.pathname !== "/"&&location.pathname !== "/signup"?(
        <footer>
         <div className="footercontent wrapper">
         <div className="top">
                <div className="list">
                    <h2>Need Help</h2>
                    <ul>
                        <li>Contact us</li>
                        <li>Track Oder</li>
                        <li>Returns and Refunds</li>
                        <li>FAQ's</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className="list">
                    <h2>Company</h2>
                    <ul>
                        <li>Aout Us</li>
                        <li>euphoria Blog</li>
                        <li>euphoriastan</li>
                        <li>Collaboration</li>
                        <li>Media</li>
                    </ul>
                </div>
                <div className="list">
                    <h2>More Info</h2>
                    <ul>
                        <li>Term and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Shipping Policy</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="list">
                    <h2>Location</h2>
                    <ul>
                        <li>support@euphoria.in</li>
                        <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
                        <li>REturns and Refunds</li>
                        <li>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
                    </ul>
                </div>
            </div>
            <div className="mid">
                <div className="mid-left">
                    {logos?.map((item)=>{
                        return  <i className="logo"><img src={item} alt="logo" /></i>

                    })}
                </div>
                <div className="mid-right">
                    <h2>Download The App</h2>
                    <div className="downloadstations">
                    <div className="downloadstore">
                        <i className="logo1"><img src={playstoreicon} alt="playstore" /></i>
                        <div className="text">
                            <p className="sub">android app on</p>
                            <p className="main">Google Play</p>
                        </div>
                    </div>
                    <div className="downloadstore">
                        <i className="logo1"><img src={appstoreicon} alt="appstore" /></i>
                        <div className="text">
                            <p className="sub">Available on the</p>
                            <p className="main">App Store</p>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className="bottom">
                    <div className="bottom-up">
                        <h1>Popular Categories</h1>
                        <i className="dropdown"><img src={dropdown} alt="dropdown" /></i>
                    </div>
                    <div className="bottom-down">
                        <p>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
                    </div>
                </div>

         </div>
           

        </footer>
    ):null
}
export default Footer
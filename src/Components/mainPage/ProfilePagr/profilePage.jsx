import React from "react";
import Heading from "../heading";
import "../../../assets/css/profile/profile.css"
import { nxtarrow, profileIcon1, profileIcon2, profileIcon3, profileIcon4 } from "../../../assets/images/images";
import Wishlist from "./whishlist";
import AddressEdit from "./addressEditpage";
import UserInfo from "./userInfo";
import OderPage from "./Oderpage";
import { ProfileNavigation } from "../../../assets/const/consts";


const Profile = ()=>{
    return(
        <div className="ProfileInfo">
            <div className="path wrapper">
                <p>Home <span><img src={nxtarrow} alt="path" /></span>My Account <span><img src={nxtarrow} alt="path" /></span>PersonalInfo</p>
            </div>
            <div className="informationdashbord wrapper">
                <div className="navigation">
                    <div className="heading">
                        <Heading headingTxt="Hello Jhanvi"/>
                        <p className="sub">
                         Welcome to your Account
                        </p>
                    </div>
                    <div className="navigationOption">
                        {ProfileNavigation.map((item)=>{
                            const{logo,text}=item
                            return <div className="option">
                                       <i></i>
                                        <p><span><img src={logo} alt="icon" /></span>{text}</p>
                                    </div>
                        })}
                        <div className="option">
                            <i></i>
                            <p> <span><img src={profileIcon4} alt="icon" /></span>Signout</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <UserInfo/>
                    {/* <AddressEdit/> */}
                   {/* <Wishlist/> */}
                   {/* <OderPage/> */}
                </div>
            </div>
        </div>
    )
}
export default Profile
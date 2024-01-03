import React from "react";  
import Heading from "../heading";
import SavingZonecard from "./savingZonecard";
import { savingcard2, savingcard5 } from "../../../assets/images/images";

const SavingZone =({data2})=>{
    return(
        <div className="savingzone wrapper">
        <Heading headingTxt="Big Saving Zone" />
        <div className="topcard">
          {data2 &&
            data2?.map((datas, index) => {
              const { item, about, offer } = datas;
              return index < 3 && (
                <SavingZonecard
                  image={savingcard2}
                  itemName={item}
                  about={about}
                  offer={offer}
                />
              ) ;
            })}
        </div>
        <div className="bottomcard">
          {data2 &&
            data2?.map((datas, index) => {
              const { item, about, offer } = datas;
              return index > 2 && (
                <SavingZonecard
                  image={savingcard5}
                  itemName={item}
                  about={about}
                  offer={offer}
                />
              ) ;
            })}
        </div>
      </div>
    )
}
export default SavingZone
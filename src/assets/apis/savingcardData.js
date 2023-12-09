import axios from "axios";

const SavingcardData = (data2,setData2)=> {
 const api=  axios.get("https://mocki.io/v1/16c3a984-7de3-44e7-8a32-a948c50c3272")
   .then(response=>setData2(response?.data)).catch(error=>console.log("error",error))
console.log(">>>>>>",api)
}

export default SavingcardData
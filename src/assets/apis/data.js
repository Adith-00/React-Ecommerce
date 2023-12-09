import axios from "axios";

const FetchData = (data,setData)=> {
 const api=  axios.get("https://mocki.io/v1/c70739c6-cbe5-4c33-9a9b-afcab26afddf")
   .then(response=>setData(response?.data)).catch(error=>console.log("error",error))
console.log(">>>>>>",api)
}

export default FetchData

  

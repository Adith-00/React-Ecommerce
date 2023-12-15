import axios from "axios";

const FetchData = (data,setData)=> {
 const api=  axios.get("https://mocki.io/v1/28596258-f7fc-492f-afc2-85f205f5f6ad")
   .then(response=>setData(response?.data)).catch(error=>console.log("error",error))
console.log(">>>>>>",api)
}

export default FetchData

// https://mocki.io/v1/28596258-f7fc-492f-afc2-85f205f5f6ad
  

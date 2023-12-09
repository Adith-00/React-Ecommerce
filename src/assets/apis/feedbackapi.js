import axios from "axios";

const FeedbackData = (feedback,setFeedback)=> {
 const api=  axios.get("https://mocki.io/v1/1baa97e8-2ee8-49b7-9a21-9f3469af7eab")
   .then(response=>setFeedback(response?.data)).catch(error=>console.log("error",error))
console.log(">>>>>>",api)
}

export default FeedbackData
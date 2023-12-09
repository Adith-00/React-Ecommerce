
 export const validation =(setPasserror,pass,setMailerror,email)=>{

    const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passValidation =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).*$/

   {email&& emailValidation.test(email)?
    setMailerror(""):
      setMailerror("Enter a Valid E-Mail")
   } 
   {pass&& passValidation.test(pass)?
    setPasserror(""):
    setPasserror("Password must contain at least one uppercase letter,one lowercase letter,one number and one special character!")
   }
   console.log("passss",pass);
   console.log("user",email)
}
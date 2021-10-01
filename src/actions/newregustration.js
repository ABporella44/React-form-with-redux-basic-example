import { newUser } from "./actionTypes"


const newRegisterdUser ={

    newUser:(newUserData)=>({
        type: newUser,
        payload:newUserData

    })
}
export default newRegisterdUser;

/* newregistrationactions = {
 
    firstname:(userData)=>({
        type:newUser.firstname,
       payload:userData.firstName
    }),
    lastname:(userData)=>({
        type:newUser.secondname,
       payload:userData.lastName
    }),
    newPassword:(userData)=>({
        type:newUser.newpassword,
       payload:userData.passowrd
    }),
    emailaddress:(userData)=>({
        type:newUser.emailaddress,
       payload:userData.emailAddress
    }),
    pincode:(userData)=>({
        type:newUser.pincode,
       payload:userData.pincode
    }),
    newstate:(userData)=>({
        type:newUser.state,
       payload:userData.state
    }),
    mobileNumber:(phNo)=>({
        type:newUser.mobilenumber,
       payload:phNo.mobileNumber
    })

}
export default newregistrationactions;*/
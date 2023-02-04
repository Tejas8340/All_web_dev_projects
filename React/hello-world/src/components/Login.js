import React,{useState} from "react";
function Login()
{
    const[user, setuser]=useState("");
    const[password, setpassword]=useState("");
    const[userErr, setUserErr]=useState(false);
    const[passErr, setPassErr]=useState(false);
    function loginHandle(e)
     {
        if(user.length<3 || password.length<3)
        {
            alert("type correct values")
        }
        else
        {
            alert("all good")
        }
        e.preventDefault()
     }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3)
        {
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        setuser(item)
     }
     function passHandler(e){
        let item=e.target.value;
        if(item.length<3)
        {
            setPassErr(true)
        }
        else{
            setPassErr(false)
        }
        setpassword(item)
     }

    return(
        <div>
            <h1>Hello World</h1>
            <form onSubmit={loginHandle}>
            <input type="text" placeholder="Enter Your Id" onChange={userHandler} />{userErr?<span>User Not Valid</span>:""} <br />  <br />
            <input type="text" placeholder="Enter Your Password"onChange={passHandler} />{passErr?<span>Password Not Valid</span>:""} <br />  <br />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
import { useState } from "react";
  
export default function Formvalidation()
{
    let [name,SetName]=useState("")
    let [Password,SetPassword]=useState("")
    let [UserErr,SetNameErr]=useState(false);
    let [PassErr,SetPasswordErr]=useState(false);
    function FormFunc(e)
    { 
      if(name.length<3 ||  Password.length<3)
      {
        alert("Invalid Input");
      }
        e.preventDefault();

    }
    function Namevalidation(value)
    {

        let iteml =value.length;
        if(iteml<3)
        {
            SetNameErr(true);
        }
        else
        {
            SetNameErr(false);
        }
        SetName(iteml);
    }
    function Passvalidation(e)
    {
        let iteml =e.target.value.length;
        if(iteml<3)
        {
            SetPasswordErr(true);
        }
        else
        {
            SetPasswordErr(false);
        }
        SetPassword(iteml);
    }
    return(
        
      <div>
        <form onSubmit={FormFunc}>
        <input type="text" placeholder="Enter the Name" onChange={(e)=>Namevalidation(e.target.value)}></input>
        {UserErr?<span>Invalid User</span>:""}
        <br></br>
        <input type="text" placeholder="Enter the password"onChange={Passvalidation}></input>
        {PassErr?<span>Invalid Password</span>:""}
        <br></br>
        <button type="submit">Save</button>
        </form>
      </div>
    );
}
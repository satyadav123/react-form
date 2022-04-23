import { useState } from "react"

export const Form=()=>{
    const [check,setcheck]=useState(true)
    const [dataform,setdata]=useState({
username:"",
age:"",
address:"",
dept:"",
marital:check,

    })
   
    const onhandle=(e)=>{
    // if(e.target.username==="username"){
    //     setdata({
    //     ...dataform,
    //     username:e.target.value
    //     })
    // }
    // if(e.target.username==="age"){
    //     setdata({
    //     ...dataform,
    //     username:e.target.value
    //     })
    // }
    setcheck(!check)
    
    setdata({
          ...dataform,
          
  [e.target.id]:e.target.value
})


    }
    const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(dataform)
    fetch(" http://localhost:8081/student",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(dataform)
    })
    }
return (
<form onSubmit={handleSubmit}>
    <input  onChange={onhandle} value={dataform.username}type="text" id="username"placeholder="enter your name"/>
    <input onChange={onhandle}value={dataform.age} type="Number" id="age"placeholder="enter your age"/>
    <input onChange={onhandle}value={dataform.address} type="text" id="address"placeholder="enter your address"/>
    <select id="dept"onChange={onhandle}value={dataform.dept}> <option>Department</option><option>IT</option><option>Non-IT</option><option>Medical</option><option>Mechanic</option></select>
    <input onChange={onhandle}value={dataform.salary} type="Number" id="salary"placeholder="enter your salary"/>

    <input onChange={onhandle}value={dataform.marital} type="checkbox" id="marital"placeholder="marital state"/>
    <input type="submit" value="submit"/>
    </form>
)

}
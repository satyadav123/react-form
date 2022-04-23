import { useEffect, useState } from "react";
  import './data.css'

  export const ShowStudents = () => {
   const [show,setShow]=useState([])
   useEffect(()=>{
    getData();
   },[])


    const getData= ()=>{
      fetch('http://localhost:8081/student')
    .then(response => response.json())
    .then(data => 
      setShow(data))
     // console.log({show});

    };

const sortHandler=(e)=>{
   if(e.target.value=="asc"){
       //console.log(show)
   let newData=show.map((e)=>{
       //console.log(e.age)
        return e;
   }).sort((a,b)=>{
       return a.age-b.age;
   })
   setShow(newData)
   }



   if(e.target.value=="desc"){
    //console.log(show)
let newData=show.map((e)=>{
    //console.log(e.age)
     return e;
}).sort((a,b)=>{
    return b.age-a.age;
})
setShow(newData)
}
}

    return (

      <div>
        <div className="controls">
        
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
              onChange={sortHandler}
            >
              <option value="asc" >Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
         
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name  </th>
              <th>Age  </th>
              <th>address </th>
              <th>dept</th>
              <th>salary</th>

              <th>marital </th>

            </tr>
          </thead>
          {show.map((e)=>(

<tbody className="tbody">
            {/* populate all rows like below: */}
            <tr className="row">
              <td  className="first_name">{e.username}  </td>
              <td className="age">{e.age}  </td>
              <td  className="address">{e.address}  </td>
              <td  className="dept">{e.dept}  </td>
              <td  className="salary">{e.salary}  </td>

              <td  className="marital">{e.marital}  </td>
            </tr>
          </tbody>
          ))}
          
        </table>
      </div>
    );
  };
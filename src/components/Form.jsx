import React from 'react'

const Form = () => {

  const [name, setName] = React.useState('');
  const [age,setAge] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [dep,setDep] = React.useState('');
  const [salary,setSalary] = React.useState('');
  const [mar, setMar] = React.useState('');
  const [detail,setDetails] = React.useState([]);
  console.log(name,age,salary,address,dep,salary,mar,detail);

  const getDetails = () =>{
    fetch('http://localhost:3001/employee')
    .then((res)=>res.json())
    .then((res)=> setDetails(res))
    .catch((err)=>console.log(err));
  }
  React.useEffect(()=>{
    getDetails();
  },[]);
  
  const addDetails = () => {
    const payload = {
        name: name,
        age: age,
        address: address,
        dep: dep,
        salary: salary,
        mar: mar,
    }
    fetch('http://localhost:3001/employee',{
        method: "POST",
        body: JSON.stringify(payload),
        headers:{
            "content-type": "application/json"
        }
    })
    .then((res) => res.json())
    .then((res) => {
        getDetails();
    }); 
  };

  return (
    <div>
      <h1>Employee Form</h1>
      <label htmlFor="">Name: </label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <br />
      <label htmlFor="">Age: </label>
      <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
      <br />
      <label htmlFor="">Address</label>
      <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
      <br />
      <label htmlFor="">Department</label>
      <input type="text" value={dep} onChange={(e)=>setDep(e.target.value)}/>
      <br />
      <label htmlFor="">Salary</label>
      <input type="number" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
      <br />
      <label htmlFor="">Maritial status</label>
      <br />
      <input type="checkbox"  value={"Married"} onChange={(e)=>setMar(e.target.value)}/>
      <label htmlFor="">Married</label>
      <input type="checkbox"  value={"Unmarried"} onChange={(e)=>setMar(e.target.value)}/>
      <label htmlFor="">Unmarried</label>
      <br />
      <button onClick={addDetails}>Add Employee</button>
      <br />
      <br />
      <h2>Employeee List</h2>
      {detail.map((data)=>(
        <div>
            <div key={data.id}>{data.title}</div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Marital</th>
                </tr>
                <tr>
                    <td key={data.id}>{data.name}</td>
                    <td key={data.id}>{data.age}</td>
                    <td key={data.id}>{data.address}</td>
                    <td key={data.id}>{data.dep}</td>
                    <td key={data.id}>{data.salary}</td>
                    <td key={data.id}>{data.mar}</td>
                </tr>
            </table>
        </div>
        
      ))}
    </div>
  )
}

export { Form }
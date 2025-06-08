import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Home = () => {

    const [users,setUsers] = useState([])

    useEffect(()=>{
      loadUsers();
    },[]);

      const { id } = useParams();

    const loadUsers= async ()=>{
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

const deleteUsers = async (id) => {
  await axios.delete(`http://localhost:8080/user/${id}`);
  loadUsers();
};
  return (
    <div className="container py-5">
      <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user,index)=>(
    <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
       <td>
        <Link to={`/viewuser/${user.id}`} className="btn btn-primary mx-2">View User</Link>
        <Link to={`/edituser/${user.id}`} className="btn btn-outline-primary mx-2" >Edit User</Link>
        <button onClick={()=>{
            deleteUsers(user.id)
        }} type="button" className="btn btn-danger mx-2">Delete User</button>

       </td>
    </tr>
        ))
    }
    
  </tbody>
</table>
    </div>
  )
}

export default Home

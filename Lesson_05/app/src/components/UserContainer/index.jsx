import React from 'react';
import { useState, useEffect } from "react";
import UserItem from '../UserItem';

export default function UserContainer() {

    const [users, setUsers] = useState([]);


    useEffect(() => {
      (async () => {
        const resp = await fetch("https://reqres.in/api/users");
        const data = await resp.json();
        setUsers(data.data);
        
      })();
    
    }, []);
    
    
    // const deleteUsers = async (delId) => {
    //   try {
    //     const resp = await fetch(`https://reqres.in/api/users/${delId}`, {
    //       method: "DELETE",
    //     });
    //     const { id } = await resp.json();
    
    //     const newArr = users.filter((el) => el.id !== id);
    //     setUsers(newArr);
    //   } catch {
    //     console.log("Что-то пошло не так");
    //   }
    // };
    
    const deleteUsers = (delId) => {
      const newArr = users.filter(({ id }) => id !== delId);
      setUsers(newArr);
    };


  return (
    <div>
    {
      users.map(el => <UserItem key={el.id}{...el} deleteUsers={deleteUsers}/>)
    }
    <p>Total count: {users.length}</p>
    </div>
  )
}

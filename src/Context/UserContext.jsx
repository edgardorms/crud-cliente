import { createContext, useContext, useState } from "react";
import {
  getUserRequest,
  deleteUserRequest,
  createUserRequest,
  updateUserRequest
} from "../api/users.api";

import axios from 'axios';

export const UserContext = createContext();

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UseUsers must be used within a UserContextProvider");
  }
  return context;
};

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const response = await getUserRequest();
    setUsers(response.data);
  }

  const deleteUsers = async (_id) => {
    try {
      const response = await deleteUserRequest(_id);
      setUsers(users.filter((user) => user._id != _id));
    } catch (error) {
      console.error(error);
    }
  };

  const createUsers = async (user) => {
    try {
      const response = await createUserRequest(user);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async (_id) => {
   try {
    const response = await axios.get(`http://localhost:4000/api/users/${_id}`)
    return response.data
    console.log(response.data);
   } catch (error) {  
    console.error(error);
    
   }
  }

    const updateUser = async (_id, newInfo) => {
    try {
      const response = await updateUserRequest(_id, newInfo);
      //console.log(response); 
    } catch (error) {
      console.error(error);
    }
    }
  return (
    <UserContext.Provider
      value={{ users, loadUsers, deleteUsers, createUsers, getUser, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

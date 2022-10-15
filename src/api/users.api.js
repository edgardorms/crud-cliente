import axios from "axios";

export const getUserRequest = async () =>
  await axios.get("http://localhost:4000/api/users");

export const createUserRequest = async (user) => {
  await axios.post("http://localhost:4000/api/users", user);
};

export const deleteUserRequest = async (_id) => {
  await axios.delete(`http://localhost:4000/api/users/${_id}`);
};

export const updateUserRequest = async (_id, newInfo) =>{
  await axios.put(`http://localhost:4000/api/users/${_id}`, newInfo);
}
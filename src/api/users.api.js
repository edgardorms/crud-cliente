import axios from "axios";

export const API_URL = 'https://crud-edgardorms.onrender.com/api/users/'
export const getUserRequest = async () =>
  await axios.get(API_URL);

export const createUserRequest = async (user) => {
  await axios.post(API_URL, user);
};

export const deleteUserRequest = async (_id) => {
  await axios.delete(API_URL + _id);
};

export const updateUserRequest = async (_id, newInfo) =>{
  await axios.put(API_URL + _id, newInfo);
}

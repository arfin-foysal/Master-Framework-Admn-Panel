import React from 'react'
import axios from 'axios';
import { useState } from 'react';
export const userApiContext = React.createContext();
const UserApi = ({children}) => {
    const [userListAllData, setUserList] = useState([]);
    
    const createUser = async (data) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SRVER_BASE_URL}/users/`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data)
            userList()
        } catch (error) {
            console.log(error.response.data)
        }
    }
    
    const userList = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SRVER_BASE_URL}/users/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setUserList(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    

    const userUpdate = async (data, id) => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_SRVER_BASE_URL}/users/${id}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data)
            userList()
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const userDelete = async (id) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_SRVER_BASE_URL}/users/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data)
            userList()
        } catch (error) {
            console.log(error.response.data)
        }
    }




  return (
      <userApiContext.Provider value={{ createUser,userList, userListAllData ,userUpdate,userDelete}}>
          {children}
      </userApiContext.Provider>
      
  )
}

export default UserApi
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';

export const roleApiContext = React.createContext();

const RoleApi = ({ children }) => {
    const [roleListAllData, setRoleList] = React.useState([]);


    const createRole = async (data) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SRVER_BASE_URL}/roles/`,data,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            
            console.log(response.data)
            
            roleList()
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const roleList = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SRVER_BASE_URL}/roles/`, { 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response?.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const roleUpdate = async ( data,id) => {
        
        try {
            const response = await axios.put(`${process.env.REACT_APP_SRVER_BASE_URL}/roles/${id}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data)
            roleList()
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const roleDelete = async (id) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_SRVER_BASE_URL}/roles/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data)
            roleList()
        } catch (error) {
            console.log(error.response.data)
        }
    }





  return (
      <roleApiContext.Provider value={{ createRole,roleList,roleListAllData, roleUpdate,roleDelete}}>
          {children}
        </roleApiContext.Provider>
  )
}

export default RoleApi
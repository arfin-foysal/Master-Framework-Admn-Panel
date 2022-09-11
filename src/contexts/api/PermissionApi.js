import React, { useState } from 'react';
import axios from 'axios';
export const permissionApiContext = React.createContext();


const PermissionApi = ({children}) => {
    const [resData, setResData] = useState(null);   
    const [resError, setResError] = useState(null);
    const [permissionListAllData, setPermissionList] = useState([]);
    const [loading, setLoading] = useState(false);
    const createPermission = async (data) => {

        try {
            const response = await axios.post(`${process.env.REACT_APP_SRVER_BASE_URL}/permissions/`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data)
        } catch (error) {
            console.log(error.response.data)
        };
    }

    const permissionList = async () => {
        
        try {
            const response = await axios.get(`${process.env.REACT_APP_SRVER_BASE_URL}/permissions/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            setPermissionList(response.data)
            setLoading(false); // Stop loading
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const permissionUpdate = async (data, id) => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_SRVER_BASE_URL}/permissions/${id}/`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data)
            permissionList()
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const permissionDelete = async (id) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_SRVER_BASE_URL}/permissions/${id}/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data)
            permissionList()
        } catch (error) {
            console.log(error.response.data)
        }
    }


    



  return (
      <permissionApiContext.Provider value={{loading, createPermission, resData, resError ,permissionListAllData,permissionList,permissionUpdate,permissionDelete}}>
          {children}
        </permissionApiContext.Provider>
  )
}

export default PermissionApi
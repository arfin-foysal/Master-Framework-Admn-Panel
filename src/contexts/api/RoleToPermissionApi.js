
import axios from 'axios';
import React from 'react'

export const roleToPermissionContext = React.createContext();

const RoleToPermissionApi = ({ children }) => {


    const roleToPermissinAssign = async (data) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SRVER_BASE_URL}/rolepermissions/`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }
  return (
      <roleToPermissionContext.Provider value={{ roleToPermissinAssign, }}>
          {children}
        </roleToPermissionContext.Provider>
  )
}

export default RoleToPermissionApi
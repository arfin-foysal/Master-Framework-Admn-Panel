import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
export const authApiContext = React.createContext();

const AuthApi = ({ children }) => {



    const [resData, setResData] = useState(null);
    const [resError, setResError] = useState(null);

    const signup = async (data) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SRVER_BASE_URL}/auth/signup`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            toast.success(response.data.messages);
          

        } catch (error) {
            toast.error(error.response.data.messages);
        };
    }
        const signin = async (data) => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_SRVER_BASE_URL}/auth/signin`, data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                toast.success(response.data.messages);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));

                if(response.data.token){
                    window.location.reload(false)
                }
            } catch (error) {
                toast.error(error.response.data.messages);
            }
    }

    const signout = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SRVER_BASE_URL}/auth/signout`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            // setResData(response.data.token);
            toast.success(response.data.messages);
            window.location.reload(false)
        } catch (error) {
            toast.error(error.response.data.messages);
        }
    }

    
    const logoutAction = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        toast.success("Logout Successfully");
        window.location.reload(false)
    }


        return (
            <authApiContext.Provider value={{ logoutAction,signup,signin,signout,resData,resError}}>
                {children}
            </authApiContext.Provider>
        );
  
    }


export default AuthApi;

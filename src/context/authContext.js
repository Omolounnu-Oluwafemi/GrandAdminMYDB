import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
      JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (values) => {
        const res = await axios.post("/auth/login", values);
        setCurrentUser(res.data);
      };
      
    const logout = async (values) => {
        await axios.post("/auth/logout");
        setCurrentUser(null);
      };

      const adminlogin = async (inputs) => {
        const res = await axios.post("/superAdmin/adminlogin", inputs);
        setCurrentUser(res.data);
      };
      const adminlogout = async (inputs) => {
        await axios.post("/superAdmin/adminlogout");
        setCurrentUser(null);
      };
      const superadminlogin = async (inputs) => {
        const res = await axios.post("/superAdmin/superadminlogin", inputs);
        setCurrentUser(res.data);
      };
      const superadminlogout = async (inputs) => {
        await axios.post("/superAdmin/superadminlogout");
        setCurrentUser(null);
      };
       

      useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
      }, [currentUser]);
       
      return (
        <AuthContext.Provider value={{ currentUser, login, logout, adminlogin, adminlogout, superadminlogin, superadminlogout }}>
          {children}
        </AuthContext.Provider>
      );    
    };
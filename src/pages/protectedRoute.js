import React from "react";
import {Outlet, Navigate} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
 
 const ProtectedRoute = () => {
    const {currentUser} = useContext(AuthContext);

   return (
    currentUser ? <Outlet/> : <Navigate to="/"/>
    );
 }
 
 export default ProtectedRoute
"use client";

import{useState} from "react";
import { ClientComponentTwo } from "./client-component-two";

export const ClientComponentOne = () => {
    console.log("This is a client component.");
    const[count,setName]=useState("Batman");
    return <>
    <h2>Client Component One</h2>
    <ClientComponentTwo/></>
        
}
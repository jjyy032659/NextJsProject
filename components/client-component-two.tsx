"use client";

import{useState} from "react";


export const ClientComponentTwo = () => {
    console.log("This is a client component.");
    const[count,setName]=useState("Batman");
    return <h2>Client Component Two</h2>;
}
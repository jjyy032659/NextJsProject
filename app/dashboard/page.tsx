"use client";
import { useState } from "react";
function BarChart() {
        return <h1>Bar Chart Page</h1>;
 }

 export default function Dashboard() {
    const [name,setName]    =useState("")
    return (
        <div>
            <h1>Dashboard Page</h1>
            <input style={{border:"1px solid black"}} value={name} onChange={(e)=>setName(e.target.value)}/>
            <p>Hello, {name}!</p>
        </div>
    );
}
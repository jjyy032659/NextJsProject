"use client";
import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
    const result = serverSideFunction();
    console.log("This is a client-side component.");    
        return <>
        <h1>client Route Page</h1>;
        <p>{result}</p>
        </>
}
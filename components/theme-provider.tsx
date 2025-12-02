"use client"

import {createContext, useContext} from 'react';


type Theme={
    color:{
        primary:string;
        secondary:string;
    }
}

const defaultTheme:Theme={
    color:{
        primary:"#0070f3",
        secondary:"#ff4081",
    }
}

export const ThemeContext=createContext<Theme>(defaultTheme);


export const ThemeProvider=function ({
    children,
}: {        
    children: React.ReactNode;
}) {
    return (
      
        <ThemeContext.Provider value={defaultTheme}>
          {children}
        </ThemeContext.Provider>
         
    );
}   


export const useTheme=()=>useContext(ThemeContext);
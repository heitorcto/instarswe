'use client';

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
    
    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            <div className={dark ? 'dark' : ''}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);
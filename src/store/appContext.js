import React, { createContext, useState} from 'react'

const AppContext = createContext({
    role: '0',
    login: () => { },
    logout: () => { },
});

/*
role = 0: guest
role = 1: Admin
*/

const AppContextProvider = ({ children }) => {
    const [role, setRole] = useState('0');

    const logout = () => {
        setRole('0');
        console.log(role);
    };

    const login = () => {
        // localStorage.setItem('role', role);
    }

    const contextValue = {
        role: role,
        login: login,
        logout: logout,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };
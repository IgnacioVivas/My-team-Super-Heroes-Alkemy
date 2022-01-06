import React from 'react'
import { useState, useContext } from 'react'
import { createContext } from 'react'

const LoginContext = createContext()
export const useLoginContext = () => useContext(LoginContext)

function LoginContextProvider({ children }) {

    const [isAuthorized, setIsAuthorized] = useState(false)

    function evaluateAuthorization(valorLogin) {
        setIsAuthorized(valorLogin)
    }

    return (
        <>
            <LoginContext.Provider value={{ isAuthorized, evaluateAuthorization }}>
                {children}
            </LoginContext.Provider>
        </>
     )
}

export default LoginContextProvider

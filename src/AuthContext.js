import React, { useState, Component } from "react";

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    const logIn = (email, password) => {
        if(email !== "valid@email.com" || password !== "correctpassword") {
            return
        }

        setIsLoggedIn(true)
    }

    const logOut = () => {
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, logIn, logOut}}>
            {children} 
        </AuthContext.Provider>
    )

}

export const withAuth = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {(value) => {
                        return <WrappedComponent {...value} {...this.props} />
                    }}
                </AuthContext.Consumer>
            )
        }
    }
}
 
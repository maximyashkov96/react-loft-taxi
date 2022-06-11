import React from "react";
import { AuthContext, AuthProvider } from "./AuthContext";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";


describe("#logIn", () => {
    it("sets is 'isLoggedIn' to false", () => {
        let isLoggedIn
        let logIn

        render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {(value) => {
                        isLoggedIn = value.isLoggedIn
                        logIn = value.logIn
                        return null
                    }}
                </AuthContext.Consumer>
            </AuthProvider>
        )

        expect(isLoggedIn).toBe(false)
        act(() => {
            logIn('valid@email.com', 'correctpassword')
        })
        expect(isLoggedIn).toBe(true)
    })
})
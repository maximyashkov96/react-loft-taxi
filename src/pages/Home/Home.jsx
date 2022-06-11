import React, { Component } from "react";
import { withAuth } from '../../AuthContext'

export class Home extends Component {
    goToProfile = () => {
        this.props.navigateToNextPage("profile");
    }

    authenticate = (evt) => {
        evt.preventDefault();
        const [email, password] = evt.target
        this.props.logIn(email.value, password.value)
    }

    render() {
        const { navigateToNextPage } = this.props
        return (
            <>
                {
                    this.props.isLoggedIn
                        ? <p>You are is logged in <button onClick={this.goToProfile}>Go to Profile</button></p>
                        : (
                            <form onSubmit={this.authenticate}>
                                <label htmlFor="email">Email*:</label>
                                <input id="email" type='email' name="email" size={28}></input>
                                <label htmlFor="password">Password:</label>
                                <input id="password" type='password' name="password" size={28}></input>
                                <button onClick={() => navigateToNextPage('profile')} type='submit'>Войти</button>
                                <p>Новый пользователь?<button onClick={() => navigateToNextPage('registration')} type='submit'>Регистрация</button></p>
                            </form>
                        )
                }

            </>
        )
    }
}

export const HomeWithAuth = withAuth(Home)
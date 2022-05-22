import React, { Component } from "react";

const Styles = {
    display: 'block',
    margin: '20% auto',
    border: '1px solid black',
    borderRadius: '15px',
    padding: '15px',
    width: '580px',
    heigth: '631px'
}

class Login extends Component {
    render() {
        const { navigateToNextPage } = this.props

        return (
            <form style={Styles} onSubmit={() => navigateToNextPage('map')}>
                <label htmlFor="email">Email*:</label>
                <input id="email" type='email' name="email" size={28}></input>
                <label htmlFor="password">Password:</label>
                <input id="password" type='password' name="password" size={28}></input>
                <button onClick={() => navigateToNextPage('login')} type='submit'>Войти</button>
                <p>Новый пользователь?<button onClick={() => navigateToNextPage('registration')} type='submit'>Регистрация</button></p>
            </form>
        )
    }
}

export { Login }
import React, { Component } from "react";

const Styles = {
    display: 'block',
    margin: '250px auto',
    border: '1px solid black',
    borderRadius: '15px',
    padding: '15px',
    width: '580px',
    heigth: '631px'
}

class Registration extends Component {
    render() {
        const { navigateToNextPage } = this.props

        return (
            <div style={Styles}>
                <form onSubmit={() => navigateToNextPage('map')}>
                    <label htmlFor="email">Email*:</label>
                    <input id="email" type='email' name="email" size={28}></input>
                    <label htmlFor="name">Как вас зовут?</label>
                    <input id="name" type='text' name="name"></input>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type='password' name="password" size={28}></input>
                    <p>Уже зарегистрированы?<button onClick={() => navigateToNextPage('login')}>Войти</button></p>
                    <button onClick={() => navigateToNextPage('registration')} type='submit'>Зарегистрироваться</button>
                </form>
            </div>
        )
    }
}

export { Registration }
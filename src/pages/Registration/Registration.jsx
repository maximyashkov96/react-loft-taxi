import React, { Component } from "react";
import { withAuth } from "../../AuthContext";
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'

import './Registration.css'

export class Registration extends Component {
    render() {
        const { navigateToNextPage } = this.props

        return (
            <div className="wrapper">
                <div className="root">
                    <h2 className="title">Регистрация</h2>
                    <form onSubmit={() => navigateToNextPage('map')}>
                        <InputLabel className="my-label" htmlFor="email">Email*:</InputLabel>
                        <Input id="email" type='email' name="email" />
                        <InputLabel htmlFor="name">Как вас зовут?*</InputLabel>
                        <Input id="name" type='text' name="name" />
                        <InputLabel htmlFor="password">Придумайте пароль*:</InputLabel>
                        <Input id="password" type='password' name="password" />
                        <Button className="my-button" onClick={() => navigateToNextPage('registration')} type='submit'>Зарегистрироваться</Button>
                        <p>Уже зарегистрированы?<Button onClick={() => navigateToNextPage('home')}>Войти</Button></p>
                    </form>
                </div>
            </div>
        )
    }
}

export const RegistrationWithAuth = withAuth(Registration)
import React, {Component } from "react";
import Button from '@mui/material/Button'

import LoftTaxiLogo from '../../assets/LoftTaxiLogo.svg'
import LoftTaxiText from '../../assets/LoftTaxiText.svg'

const Styles = {
    root: {
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'space-between'
    },
    ul: {
        display: 'flex',
        listStyleType: 'none'
    },
    image: {
        display: 'inherit',
        alignItems: 'center'
    },
    button: {
        border: 'none',
        color: '#fff',
        backgroundColor: 'transparent'
    }
}

export default class Header extends Component {
        render() {
            const { navigateToNextPage } = this.props
            return (
                <>
                <header style={Styles.root}>
                    <div style={Styles.image}>
                        <img src={LoftTaxiLogo} alt='logo' />
                        <img src={LoftTaxiText} alt="logoText" />
                    </div>
                    <nav>
                        <ul style={Styles.ul}>
                            <li>
                                <Button color="primary" size="medium" onClick={() => navigateToNextPage('map')}>Карта</Button>
                            </li>
                            <li>
                                <Button color="primary" size="medium" onClick={() => navigateToNextPage('profile')}>Профиль</Button>
                            </li>
                            <li>
                                <Button color="primary" size="medium" onClick={() => navigateToNextPage('registration')}>Войти</Button>
                            </li>
                        </ul>
                    </nav>
                </header>
                </>
            )
    }
}
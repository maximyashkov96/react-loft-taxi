import React, {Component } from "react";

import LoftTaxiLogo from './assets/LoftTaxiLogo.svg'
import LoftTaxiText from './assets/LoftTaxiText.svg'

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

class Header extends Component {
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
                                <button style={Styles.button} onClick={() => navigateToNextPage('map')}>Карта</button>
                            </li>
                            <li>
                                <button style={Styles.button} onClick={() => navigateToNextPage('profile')}>Профиль</button>
                            </li>
                            <li>
                                <button style={Styles.button} onClick={() => navigateToNextPage('registration')}>Войти</button>
                            </li>
                        </ul>
                    </nav>
                </header>
                </>
            )
    }
}

export { Header }
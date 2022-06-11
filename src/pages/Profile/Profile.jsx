import React, { Component } from "react";
import { withAuth } from "../../AuthContext";
import { Header } from '../../components/Header/Header'

export default class Profile extends Component {

    unauthenticate = () => {
        this.props.logOut()
        this.props.navigateToNextPage('home')
    }

    render() {
        const { navigateToNextPage } = this.props
        return (
            <>
                <Header navigateToNextPage={navigateToNextPage} />
                <h1>Профиль</h1>
                <button onClick={this.unauthenticate}>Log Out</button>
            </>
        )
    }
}

export const ProfileWithAuth = withAuth(Profile)
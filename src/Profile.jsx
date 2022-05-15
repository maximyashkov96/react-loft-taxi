import React, { Component } from "react";
import { Header } from "./Header";

class Profile extends Component {
    render() {
        const { navigateToNextPage } = this.props
        return (
            <>
                <Header navigateToNextPage={navigateToNextPage} />
                <h1>Профиль</h1>
            </>
        )
    }
}

export { Profile }
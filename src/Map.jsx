import React, { Component } from "react";
import { Header } from "./Header";

class Map extends Component {
    render() {
        const { navigateToNextPage } = this.props
        return (
            <>
                <Header navigateToNextPage={navigateToNextPage} />
                <h1>Карта</h1>
            </>
        )
    }
}

export { Map }
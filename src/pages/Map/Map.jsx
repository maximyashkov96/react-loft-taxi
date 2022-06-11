import React, { Component, createRef } from "react";
import mapboxgl from "mapbox-gl";
import { Header } from "../../components/Header/Header";

import './style.css'


class Map extends Component {
    map = null
    mapContainerRef = createRef()
    
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWF4aW15YXNoa292OTUiLCJhIjoiY2wzaGY5dWdjMTVheDNibnJ3YXZ2YzdiYyJ9.5kVmhV1er6WCHOyOZJpIiQ'
        this.map = new mapboxgl.Map({
            container: this.mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.3056504, 59.9429126],
            zoom: 10
        })
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        const { navigateToNextPage } = this.props
        return (
            <>
                <Header navigateToNextPage={navigateToNextPage} />
                <div className="map-wrapper">
                    <div ref={this.mapContainerRef} data-testid="map" className='map'></div>
                </div>
            </>
        )
    }
}

export { Map }
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import React from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

import { Component } from "react"

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1Ijoia2F5dGx5bmd1ZXJyZXJvIiwiYSI6ImNrbGd5ejMwMTB5cDQyd29paGZoYnE0dW4ifQ.FN8hXcvlYPaxkl0UdIatVQ';

class Map extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
          coordinateRoute: props.coordinateRoute,
          center: props.coordinateRoute[props.coordinateRoute.length-1],
          zoom: 12
        };
        this.mapContainer = React.createRef();
      }
      componentDidMount() {
        const { center, zoom } = this.state;
        const map = new mapboxgl.Map({
          container: this.mapContainer.current, // container option  tells mapbox GL JS to render the map inside a specific DOM element.
          style: 'mapbox://styles/mapbox/streets-v11',
          center: center,
          zoom: zoom
        });
    }
    
    render() {
        return (
            <div>
            <div ref={this.mapContainer} className = "map-container" /> 
          </div>
        )
    }
}
export default Map

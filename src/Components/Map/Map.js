import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import React from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

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
        // var geocoder = new MapboxGeocoder({
        //   accessToken: mapboxgl.accessToken,
        //   mapboxgl: mapboxgl
        //   });
           
        //   document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

        map.on('load', function () {
          map.addSource('route', {
          'type': 'geojson',
          'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-97.743127, 30.267215],
            [-97.744555, 30.263397],
            [-97.736771, 30.261224],
            [-97.73722, 30.260014],
            [-97.737208, 30.256924],
            [-97.735073, 30.246365],
            [-97.735061, 30.244821],
            [-97.735662, 30.243183],
            [-97.741481, 30.233463],
            [-97.747739,30.223529],
            [-97.748971, 30.224411],
            [-97.754122, 30.226749],
            [-97.752933, 30.228932]
          ]
            }
          }
          });
          map.addLayer({
              'id': 'route',
              'type': 'line',
              'source': 'route',
              'layout': {
              'line-join': 'round',
              'line-cap': 'round'
              },
              'paint': {
              'line-color': 'black',
              'line-width': 8
          }
          });
          });



        
    }
    
    render() {
        return (
            <div>
            <div ref={this.mapContainer} className = "map-container" /> 
            {/* <div id="geocoder" class="geocoder"></div> */}
          </div>
        )
    }
}
export default Map

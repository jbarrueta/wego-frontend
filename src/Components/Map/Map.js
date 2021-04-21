import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import React from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import * as turf from '@turf/turf';

import { Component } from "react";



mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1Ijoia2F5dGx5bmd1ZXJyZXJvIiwiYSI6ImNrbGd5ejMwMTB5cDQyd29paGZoYnE0dW4ifQ.FN8hXcvlYPaxkl0UdIatVQ";

class Map extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      coordinateRoute: props.coordinateRoute,
      center: props.coordinateRoute[props.coordinateRoute.length - 1],
      zoom: 12,
    };
    this.mapContainer = React.createRef();
    console.log("Constructor", this.state);
  }
  componentDidMount() {
    const { center, zoom, coordinateRoute } = this.state;
    console.log("componentDidMount", this.state);
    const map = new mapboxgl.Map({
      container: this.mapContainer.current, // container option  tells mapbox GL JS to render the map inside a specific DOM element.
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom,
    });


    map.on("load", function () {
      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: coordinateRoute,
          },
        },
      });
      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "black",
          "line-width": 5,
        },
      });
    
      var data = {"geometry": {
        "type": "Point", 
        "coordinates": coordinateRoute[0]},
        "type": "Feature", 
        "properties": {}}

    var i = 0;
    var animate = setInterval(() => {
      var data = {"geometry": {
        "type": "Point", 
        "coordinates": coordinateRoute[i]},
        "type": "Feature", 
        "properties": {}}
      map.getSource("vehicle").setData(data)
      map.flyTo({
        center: data.geometry.coordinates,
        speed: 0.5
      })
      i++;
      if(i >= coordinateRoute.length){
        clearInterval(animate);
        alert("Your vehicle has arrived!")
        // TODO: We will call the vehicle API to set the vehicle to available and request
        // the next leg of the trip. When we call the vehicle api to set vehicle coordinates
        // we will set it at the last coordinate to update in the DB
        
      }

    }, 2000);
    console.log("done")
    map.addSource("vehicle", {
      'type': 'geojson',
        data: data
    });
    map.addLayer({
      'id': 'vehicle',
      'type': 'symbol',
      'source': 'vehicle',
      'layout': {
        'icon-image': 'car-15'
      }
    })

      
      });

  }

  

  render() {
    return (
      <div>
        {/* <div id="map"></div>
        <div class="overlay">
        <button id="replay">Replay</button>
        </div> */}
        <div ref={this.mapContainer} className="map-container" />
        {/* <div id="geocoder" class="geocoder"></div> */}
      </div>
      
    );
  }
}
export default Map;

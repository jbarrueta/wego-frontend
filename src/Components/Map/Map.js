import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import React from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

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
    // var geocoder = new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   mapboxgl: mapboxgl
    //   });

    //   document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

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
          "line-width": 8,
        },
      });
    });
  }


  render() {
    return (
      <div>
        <div ref={this.mapContainer} className="map-container" />
        {/* <div id="geocoder" class="geocoder"></div> */}
      </div>
    );
  }
}
export default Map;

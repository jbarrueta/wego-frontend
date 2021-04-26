import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import React from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

import { Component } from "react";
import config from "../../config/config";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = config.accessTokenMB;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinateRoute: props.coordinateRoute,
      center: props.coordinateRoute[props.coordinateRoute.length - 1],
      zoom: 12,
    };
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    const { center, zoom, coordinateRoute } = this.state;
    const { completeOrder } = this.props;
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

      var data = {
        geometry: {
          type: "Point",
          coordinates: coordinateRoute[0],
        },
        type: "Feature",
        properties: {},
      };

      var i = 0;
      var animate = setInterval(() => {
        var data = {
          geometry: {
            type: "Point",
            coordinates: coordinateRoute[i],
          },
          type: "Feature",
          properties: {},
        };
        map.getSource("vehicle").setData(data);
        map.flyTo({
          center: data.geometry.coordinates,
          speed: 0.5,
        });
        i++;
        if (i >= coordinateRoute.length) {
          clearInterval(animate);
          alert("Your vehicle has arrived!");
          completeOrder(
            "available",
            coordinateRoute[coordinateRoute.length - 1]
          );
        }
      }, 2000);
      map.addSource("vehicle", {
        type: "geojson",
        data: data,
      });
      map.addLayer({
        id: "vehicle",
        type: "symbol",
        source: "vehicle",
        layout: {
          "icon-image": "car-15",
          "icon-size": 1.5,
        },
      });
    });
  }

  render() {
    return (
      <div>
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}
export default Map;

import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import {Labeled} from "react-admin";
import {Map as LeafletMap, Marker, Polygon, Popup, TileLayer} from "react-leaflet";

const useStyles = makeStyles({
  leafletContainer: {
    width: "100%",
    height: "500px"   // Setting up height is necessary
  }
});

const defaultZoom = 16;

const Map = props => {
  const { label, center, marker, markerLabel, zoom, geometry } = props;

  // Center is required so if it is not explicitly
  // defined but marker is, use the marker position
  // for center as well, otherwise use a sane default
  let mapCenter = center;
  if (!center && marker) {
    mapCenter = marker;
  } else if (!center) {
    mapCenter = [0.0, 0.0];
  }

  let mapZoom = zoom;
  if (!zoom) {
    mapZoom = defaultZoom;
  }

  const classes = useStyles();
  return (
    <Labeled label={label} className={classes.leafletContainer}>
        <LeafletMap center={mapCenter} zoom={mapZoom} className={classes.leafletContainer}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {marker &&
          <Marker position={marker}>
            {markerLabel && <Popup>{markerLabel}</Popup>}
          </Marker>}
          {geometry && <Polygon positions={geometry} />}
        </LeafletMap>
    </Labeled>
  );
}

Map.propTypes = {
  //source: PropTypes.string,
  label: PropTypes.string,
  center: PropTypes.array,
  marker: PropTypes.array,
  markerLabel: PropTypes.string,
  zoom: PropTypes.number,
  geometry: PropTypes.array
};

// Map.defaultProps = {
//   addLabel: true
// }

export default Map;
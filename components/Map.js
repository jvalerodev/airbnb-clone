import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';
import { Map as MapGL, Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

const Map = ({ searchResults }) => {
  const [popupLocation, setPopupLocation] = useState(null);

  const coordinates = searchResults.map(result => ({
    latitude: result.lat,
    longitude: result.long
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  });

  return (
    <MapGL
      initialViewState={viewState}
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      onMove={e => setViewState(e.viewState)}
      style={{ width: '100%', height: '100%' }}
    >
      {searchResults.map(({ long, lat, title }) => (
        <div key={long}>
          <Marker
            longitude={long}
            latitude={lat}
            offset={[-20, -10]}
            onClick={() => setPopupLocation(long)}
          >
            <p role="img" className="text-2xl animate-bounce cursor-pointer" aria-label="push-pin">
              📌
            </p>
          </Marker>

          {popupLocation === long && (
            <Popup
              latitude={lat}
              longitude={long}
              onClose={() => setPopupLocation(null)}
              closeOnClick={false}
              offset={[-20, -10]}
            >
              {title}
            </Popup>
          )}
        </div>
      ))}
    </MapGL>
  );
};

export default Map;
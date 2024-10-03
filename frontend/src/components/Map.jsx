import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const position = [-34.9854011, -71.2397409];

  return (
    <section className='container-md'>
        <MapContainer center={position} zoom={20} style={{ height: '90vh', width: '100%' }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
            <Popup>
            Un marcador en el mapa.
            </Popup>
        </Marker>
        </MapContainer>
    </section>
  );
};

export default Map;

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { obtenerCoordenadas } from '../helpers/obtenerCoordenadas';

const Map = () => {

  const URL_ESTACIONAMIENTOS = 'http://localhost:5000/api/estacionamientos';

  const defaultMapPosition = [-34.9854011, -71.2397409];

  const [estacionamientos, setEstacionamientos] = useState([]);

  // Obtener estacionamientos del backend
  useEffect(() => {
    const fetchEstacionamientos = async () => {
      try {
        const response = await fetch(URL_ESTACIONAMIENTOS);
        const data = await response.json();

        const estacionamientosConCoordenadas = await Promise.all(

          data.map(async (estacionamiento) => {
            const coordenadas = await obtenerCoordenadas(estacionamiento.direccion);
            return { ...estacionamiento, coordenadas };
          })

        );

        setEstacionamientos(estacionamientosConCoordenadas);
      } catch (error) {
        console.error('Error al cargar los estacionamientos:', error);
      }
    };
    fetchEstacionamientos();
  }, []);

  return (
    <section className='container-md'>
        <MapContainer center={defaultMapPosition} zoom={15} style={{ height: '90vh', width: '100%' }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {estacionamientos.map((estacionamiento, index) => (
          estacionamiento.coordenadas && (
            <Marker key={index} position={[estacionamiento.coordenadas.latitud, estacionamiento.coordenadas.longitud]}>
              <Popup>
                {estacionamiento.nombre} <br /> Dirección: {estacionamiento.direccion}
              </Popup>
            </Marker>
          )
        ))}
        </MapContainer>
    </section>
  );
};

export default Map;

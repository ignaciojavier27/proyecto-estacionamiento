import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { obtenerCoordenadas } from '../helpers/obtenerCoordenadas';
import MarcadorEstacionamiento from './MarcadorEstacionamiento';

const Map = () => {
  const defaultMapPosition = [-34.9854011, -71.2397409];

  const [estacionamientos, setEstacionamientos] = useState([]);


  useEffect(() => {
    const fetchEstacionamientos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/estacionamientos');
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
    <section className='container-fluid m-0 p-0'>
        <MapContainer center={defaultMapPosition} zoom={15} style={{ height: '90vh', width: '100%' }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {estacionamientos.map((estacionamiento) => (          
          estacionamiento.coordenadas && (
            <MarcadorEstacionamiento key={estacionamiento.estacionamiento_id * 1.1} estacionamiento={estacionamiento}/>
          )
        ))}
        </MapContainer>
    </section>
  );
};

export default Map;
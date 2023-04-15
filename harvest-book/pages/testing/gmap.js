// Google api key: AIzaSyDMzBg_gI4Eya16vbycbtfi-Wre0L7mJcg



import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from '../../styles/map.module.css';

const MapContainer = () => {
    const [maplatitude, setMapLatitude] = useState(41.3851);
    const [maplongitude, setMapLongitude] = useState(2.1734);
    const [mapCenter, setMapCenter] = useState({ lat: maplatitude, lng: maplongitude });
    const [markerPosition, setMarkerPosition] = useState(null);

    const handleButtonClick = async () => {
        const addressInput = document.getElementById('address');
        const address = addressInput.value;
        console.log(address);
        var apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyDMzBg_gI4Eya16vbycbtfi-Wre0L7mJcg`;
        fetch(apiUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // Extract the latitude and longitude from the response
                var location = data.results[0]?.geometry.location;
                if (location) {
                    setMapLatitude(location.lat);
                    setMapLongitude(location.lng);
                    setMapCenter({ lat: maplatitude, lng: maplongitude });
                    setMarkerPosition({ lat: location.lat, lng: location.lng });

                    console.log('Latitude: ' + location.lat);
                    console.log('Longitude: ' + location.lng);
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
    };

    const mapStyles = {
        height: '60vh',
        width: '50%'
    };

    var defaultCenter = {
        lat: maplatitude,
        lng: maplongitude
    };

    return (
        <>
            <div className={styles.mapdiv}>
                <LoadScript googleMapsApiKey="AIzaSyDMzBg_gI4Eya16vbycbtfi-Wre0L7mJcg">
                    <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
                        {markerPosition && (
                            <Marker position={markerPosition} title="Marker" animation="DROP"/>
                        )}
                    </GoogleMap>
                </LoadScript>
            </div>
            <div className={styles.address}>
                <form>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" placeholder="300 W 13th St, Rolla, MO 65409" autoFocus></input>
                    <input type="button" value="submit" onClick={handleButtonClick}></input>
                </form>
            </div>
        </>
    );
};

export default MapContainer;




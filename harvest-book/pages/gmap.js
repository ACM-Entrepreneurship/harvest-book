// Google api key: AIzaSyDMzBg_gI4Eya16vbycbtfi-Wre0L7mJcg



import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from '../styles/map.module.css';

const MapContainer = () => {
    const [maplatitude, setMapLatitude] = useState(38.680222);
    const [maplongitude, setMapLongitude] = useState(-90.34923099999999);
    const [mapCenter, setMapCenter] = useState({ lat: maplatitude, lng: maplongitude });
    const [markerPosition, setMarkerPosition] = useState(null);
    const [markers, setMarkers] = useState([]);

    const locations = [
        {
          name: "Phelps County Animal Welfare League",
          location: { 
            lat: 38.0047141,
            lng: -91.6051981 
          },
        },
        {
          name: "The Rolla Mission",
          location: { 
            lat: 37.9496717,
            lng: -91.7732805
          },
        },
        {
          name: "Feed My People",
          location: { 
            lat: 38.52038170000001,
            lng: 90.2807571
          },
        },
        {
          name: "Harvesters - The Community Food Network",
          location: { 
            lat: 39.0551271,
            lng: -94.51639709999999
          },
        },
        {
          name: "Peter & Paul Community Services",
          location: { 
            lat: 38.5966242,
            lng: -90.2251474
          },
        },
        {
          name: "Jefferson County Rescue Mission",
          location: { 
            lat: 38.2812718,
            lng: -90.3904524
          },
        },
        {
          name: "St Anthony's Food Pantry",
          location: { 
            lat: 38.579704,
            lng: -90.2395756
          },
        },
        {
          name: "Circle of Concern",
          location: { 
            lat: 38.5506689,
            lng: -90.490168
          },
        },
        {
          name: "The Food Bank for Central & Northeast Missouri",
          location: { 
            lat: 38.9722978,
            lng: -92.3066042
          },
        },
        {
          name: "Victory Mission + Ministry",
          location: { 
            lat: 37.229337,
            lng:  -93.2922948
          },
        },
        {
          name: "City Union Mission (Community Assistance)",
          location: { 
            lat: 39.1055769,
            lng: -94.60641299999999
          },
        },
        {
          name: "St Louis Area Foodbank",
          location: { 
            lat: 38.7847099,
            lng: -90.4607825
          },
        },
        {
          name: "Community Outreach",
          location: { 
            lat: 37.8401198,
            lng: -94.35678390000001
          },
        },
        {
          name: "Open Door Service Center, Inc.",
          location: { 
            lat: 37.8401198,
            lng: -94.35678390000001
          },
        },
        {
          name: "Crosslines Community Resource Center",
          location: { 
            lat: 37.2253334,
            lng: -93.232439
          },
        },
        {
          name: "St Patrick Center",
          location: { 
            lat: 38.6333618,
            lng: -90.1955675
          },
        }
    ];

    
    const handleButtonClick = async () => {
        const addressInput = document.getElementById('address');
        const address = addressInput.value;
        console.log(address);
        var apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyDMzBg_gI4Eya16vbycbtfi-Wre0L7mJcg`; // Replace YOUR_API_KEY with your actual API key
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
                    setMarkers(locations); // Update markers state with locations array
    
                    console.log('Latitude: ' + location.lat);
                    console.log('Longitude: ' + location.lng);
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
    };
    

    const mapStyles = {
        height: '100%',
        width: '100%'
    };

    var defaultCenter = {
        lat: maplatitude,
        lng: maplongitude
    };

    return (
        <>
            <div className={styles.mapdiv}>
                <LoadScript googleMapsApiKey="AIzaSyDMzBg_gI4Eya16vbycbtfi-Wre0L7mJcg">
                    <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
                        {markers.map((location, index) => (
                            <Marker key={index} position={location.location} title={location.name} animation="DROP"/>
                        ))}
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
import Layout from '../components/Layout'
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


//import { Link } from "react-router-dom";

function CalculatorForm() {
    const [pounds, setPounds] = useState(0);
    const [netIncome, setNetIncome] = useState(0);
    const [marketPricePer, setMarketPricePer] = useState(0);
    const [costForPounds, setCostForPounds] = useState(0);
    const [deduction, setDeduction] = useState(0);

    const [maplatitude, setMapLatitude] = useState(38.680222);
    const [maplongitude, setMapLongitude] = useState(-90.34923099999999);
    const [mapCenter, setMapCenter] = useState({ lat: maplatitude, lng: maplongitude });
    const [markerPosition, setMarkerPosition] = useState(null);
    const [markers, setMarkers] = useState([]);

    const [isLabelVisible, setIsLabelVisible] = useState(false);

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

  
    function handleSubmit(event) {
      event.preventDefault();
      const marketValue = pounds * marketPricePer;
      const foodProfit = marketValue - costForPounds;
      const MAX_DEDUCTION = 0.15 * netIncome;
      const TaxBasis = marketValue * 0.25;
      const deduction1 = TaxBasis * 2;
      const deduction2 = TaxBasis + (foodProfit * 0.5);

      setIsLabelVisible(!isLabelVisible);

      if (deduction1 > deduction2) {
        if (deduction1 > MAX_DEDUCTION) {
          setDeduction(MAX_DEDUCTION);
        } else {
          setDeduction(deduction1);
        }
      } else {
        if (deduction2 > MAX_DEDUCTION) {
          setDeduction(MAX_DEDUCTION);
        } else {
          setDeduction(deduction2);
        }
      }

      const addressInput = document.getElementById('form-address');
      const cityInput = document.getElementById('form-city');
      const stateInput = document.getElementById('form-state');
      const zipInput = document.getElementById('form-zip');
      const address = addressInput.value + ', ' + cityInput.value + ', '+ stateInput.value + ' ' + zipInput.value;
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

    }

    const mapStyles = {
        height: '100%',
        width: '100%'
    };

    var defaultCenter = {
        lat: maplatitude,
        lng: maplongitude
    };

    return(
        <>
         <Layout>
         <div>
             <div>
               <h1 id="paragraph_header">See how much you can save!</h1>
             </div>
              <div className='container'>
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-6">
                    <label for="validationCustom01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationCustom01" required />
                    <div class="valid-feedback">
                     Looks good!
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom02" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationCustom02" required />
                    <div class="valid-feedback">
                       Looks good!
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom03" class="form-label">Address</label>
                    <input type="text" class="form-control" id="form-address" required />
                    <div class="invalid-feedback">
                    Please provide a valid city.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom03" class="form-label">City</label>
                    <input type="text" class="form-control" id="form-city" required />
                    <div class="invalid-feedback">
                    Please provide a valid city.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">State</label>
                    <select class="form-select" id="form-state" required>
                    <option selected disabled value="">Choose...</option>
                    <option>Missouri</option>
                    <option>Illinois</option>
                    </select>
                    <div class="invalid-feedback">
                    Please select a valid state.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom05" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="form-zip" required />
                    <div class="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom06" class="form-label">Farm property value</label>
                    <input type="text" class="form-control" id="validationCustom06" placeholder="$" required />
                    <div class="invalid-feedback">
                    Please provide a valid number.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom07" class="form-label">Farm assets value</label>
                    <input type="text" class="form-control" id="validationCustom07" placeholder="$" required />
                    <div class="invalid-feedback">
                    Please provide a valid number.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom08" class="form-label">Farm net income</label>
                    <input
                         type="text"
                         className="form-control"
                         id="validationCustom08"
                         placeholder="$"
                         value={netIncome}
                         onChange={(event) => setNetIncome(Number(event.target.value))}
                         required
                     />
                    <div class="invalid-feedback">
                    Please provide a valid number.
                    </div>
                </div>
 
                <div class="col-md-4">
                    <label for="validationCustom09" class="form-label">Pounds to donate</label>
                    <input
                         type="text"
                         className="form-control"
                         id="validationCustom09"
                         placeholder="lb"
                         value={pounds}
                         onChange={(event) => setPounds(Number(event.target.value))}
                         required
                     />
                    <div class="invalid-feedback">
                    Please provide a valid number.
                    </div>
                </div>
 
                <div class="col-md-4">
                    <label for="validationCustom010" class="form-label">Price Per Pound</label>
                    <input
                         type="text"
                         className="form-control"
                         id="validationCustom010"
                         placeholder="$"
                         value={marketPricePer}
                         onChange={(event) => setMarketPricePer(Number(event.target.value))}
                         required
                     />
                    <div class="invalid-feedback">
                    Please provide a valid number.
                    </div>
                </div>
 
                <div class="col-md-4">
                    <label for="validationCustom010" class="form-label">Cost for all pounds</label>
                    <input
                         type="text"
                         className="form-control"
                         id="validationCustom011"
                         placeholder="$"
                         value={costForPounds}
                         onChange={(event) => setCostForPounds(Number(event.target.value))}
                         required
                     />
                    <div class="invalid-feedback">
                    Please provide a valid number.
                    </div>
                </div>
 
                <label for="validationCustom011" class="form-label">Crops grown</label>
                <div class="col-sm-1">
                 <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                   <label class="form-check-label" for="flexRadioDefault1">
                       Wheat
                   </label>
                 </div>
                </div>
 
                
                <div class="col-sm-1">
                 <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                   <label class="form-check-label" for="flexRadioDefault1">
                       Corn
                   </label>
                 </div>
                </div>
 
                <div class="col-sm-1">
                 <div class="form-check form-check-inline">
                   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                   <label class="form-check-label" for="flexRadioDefault1">
                       Oat
                   </label>
                 </div>
                </div>
 
                <div class="col-12 calc-button">
                    <button class="btn btn-success" type="submit" onClick={handleSubmit}>See how much you save</button>
                    
                </div>
               </form>
              </div>
 
              <div className='container'>
                {isLabelVisible && <label id='paragraph_header_congrats'>Congratulations!</label>}
                <h2>Deduction: ${deduction.toFixed(2)}</h2>
                <h3>You can get ${deduction.toFixed(2)} in tax returns if you donate to any of the charities below!</h3>
              </div>

              <div className="mapdiv">
                <LoadScript googleMapsApiKey="AIzaSyDMzBg_gI4Eya16vbycbtfi-Wre0L7mJcg">
                    <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
                        {markers.map((location, index) => (
                            <Marker key={index} position={location.location} title={location.name} animation="DROP"/>
                        ))}
                    </GoogleMap>
                </LoadScript>
              </div>

         </div>
         </Layout>
        </>
    )
}

export default CalculatorForm;
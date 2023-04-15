import React from 'react'
import Navbar from '../components/Navbar'
//import { Link } from "react-router-dom";

function About() {
    return(
        <>
        <Navbar></Navbar>
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
               <div class="col-md-6">
                   <label for="validationCustom03" class="form-label">City</label>
                   <input type="text" class="form-control" id="validationCustom03" required />
                   <div class="invalid-feedback">
                   Please provide a valid city.
                   </div>
               </div>
               <div class="col-md-3">
                   <label for="validationCustom04" class="form-label">State</label>
                   <select class="form-select" id="validationCustom04" required>
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
                   <input type="text" class="form-control" id="validationCustom05" required />
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
                   <input type="text" class="form-control" id="validationCustom07" placeholder="$" required />
                   <div class="invalid-feedback">
                   Please provide a valid number.
                   </div>
               </div>

               <div class="col-md-3">
                   <label for="validationCustom09" class="form-label">Pounds</label>
                   <input type="text" class="form-control" id="validationCustom07" placeholder="lb" required />
                   <div class="invalid-feedback">
                   Please provide a valid number.
                   </div>
               </div>

               <div class="col-md-3">
                   <label for="validationCustom010" class="form-label">Price Per Pounds</label>
                   <input type="text" class="form-control" id="validationCustom07" placeholder="lb" required />
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

               <div class="col-12">
                   <button class="btn btn-success" type="submit">See how much you save</button>
               </div>
              </form>
             </div>
        </div>
        </>
    )
}

export default About;
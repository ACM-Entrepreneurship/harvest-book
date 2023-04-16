import Layout from '../components/Layout'
import React, { useState } from 'react';


//import { Link } from "react-router-dom";

function CalculatorForm() {
    const [pounds, setPounds] = useState(0);
    const [netIncome, setNetIncome] = useState(0);
    const [marketPricePer, setMarketPricePer] = useState(0);
    const [costForPounds, setCostForPounds] = useState(0);
    const [deduction, setDeduction] = useState(0);

  
    function handleSubmit(event) {
      event.preventDefault();
      const marketValue = pounds * marketPricePer;
      const foodProfit = marketValue - costForPounds;
      const MAX_DEDUCTION = 0.15 * netIncome;
      const TaxBasis = marketValue * 0.25;
      const deduction1 = TaxBasis * 2;
      const deduction2 = TaxBasis + (foodProfit * 0.5);
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
    }
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
 
              <h2>Deduction: ${deduction.toFixed(2)}</h2>
         </div>
         </Layout>
        </>
    )
}

export default CalculatorForm;
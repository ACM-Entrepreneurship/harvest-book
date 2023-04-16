//import { Link } from "react-router-dom";
import Layout from '../components/Layout'


function Results() {
    return(
        <>
        <Layout>
        <div>
            <div className='container'>
              <h1 id="paragraph_header">Congratulations!</h1>
              <p id="results-text">You can get <h2>Deduction: ${deduction}</h2> in tax returns if you donate #lb to any of the charities below</p>
            </div>
        </div>
        </Layout>
        </>
    )
}

export default Results;
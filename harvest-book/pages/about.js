import React from 'react'
import styles from '../styles/about.module.css'
//import { Link } from "react-router-dom";
import Layout from '../components/Layout';
import Image from 'next/image';


function About() {
    return(
        <>
        <Layout>
        <div>
            <div className={styles.clr}></div>
            <h1 className={styles.Outerbox}>
                 
            <img src='/images/farm-img2.jpg' height={200} width={600} />
            </h1>
            <div className={styles.GreenBox1}> ABOUT US </div>
            
            <div className={styles.Outerbox}>
            <img src='/images/farm-img1.jpg' height={200} width={600} />
            </div>
            <div className={styles.GreenBox2}> MISSION STATEMENT </div>
            

            <div className={styles.Outerbox1}></div>
            <div className={styles.GreenBox3}> FOOD WASTE? </div>
            <div className={styles.GreenBox4}> Why It Matters? </div>
            <div className={styles.GreenBox5}> Our Solution? </div>
        </div>
        </Layout>
        </>
    )
}

export default About;
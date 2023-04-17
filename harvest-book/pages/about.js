import React from 'react';
import styles from '../styles/about.module.css';
//import { Link } from "react-router-dom";
import Layout from '../components/Layout';
import Image from 'next/image';
import Head from 'next/head'



 export default function About() {
    return(
        <>
        <Layout>
            <div className='justify-content-center align-items-center about-boxes-wrapper'>
                 <div className='box-about-1'>
                   <Image src='/../public/images/about-page-1.png' className="img-about-1" height={200} width={600}/>
                 </div>

                 <div className='box-about-1'>
                   <Image src='/../public/images/about-page-2.png' className="img-about-1" height={200} width={600}/>
                 </div>

                 <div className='box-about-1'>
                    <Image src='/../public/images/about-page-3.png' className="img-about-1" height={200} width={600}/>
                 </div>
            </div>
        </Layout>
        </>
    )
}


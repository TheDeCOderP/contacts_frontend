
import React from 'react';
import 'typeface-poppins'; // Import Poppins font
import 'typeface-raleway'; // Import Raleway font
import './globals.css';
import './mobilestyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';


const MyApp = ({ Component, pageProps }) => {


    return (
   
    <Layout>
            <Component {...pageProps} />
            </Layout>
           
    
    );
};

export default MyApp;

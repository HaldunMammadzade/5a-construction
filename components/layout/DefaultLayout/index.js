import React from 'react';
// import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const DefaultLayout = ({children}) => {
    return (
        <div>
                
            <Header/>
                <div className="main">{children}</div>
            <Footer/>
        </div>
    );
};

export default DefaultLayout;

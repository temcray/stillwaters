import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryButton from "../components/Button";
import { Link } from "react-router-dom";


function GetHelp() {
    return (

        <>
        <Navbar />
        <section style={{ padding: "60px 24px", textAlign: "center" }}>
            <h1>Get Help</h1>
            <p>If you need immediate support, clink below to start the process.</p>
            <PrimaryButton>
                <Link to="/get-help" style={{ color: "white", textDecoration: "none" }}>
                Connect with Shelter
                </Link>
            </PrimaryButton>

        </section>
        </>

    );
}

export default GetHelp;
import React from 'react';
import PrimaryButton from "./Button";
import { Link } from "react-router-dom";


function Hero() {
    return(
        <section style={{ padding: "80px 24px", textAlign: "center", background: "#f1faee"}}>
            <h1 style={{ fontSize: "36px", marginBotton: "20px"}}Welcome to Stillwater Shelter></h1>
            <p style={{ fontSize: "18px", marginBotton: "40px"}}>
                Safe. Supportive. Here to help when you need it most.
                
            </p>
            <PrimaryButton>
                <Link to="/get-help" style={{ color: "white", textDecoration: "none" }}>
                Get Help Now
                </Link>
            </PrimaryButton>

        </section>

    );
}

export default Hero;
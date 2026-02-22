import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryButton from "../components/Button";


function NotFound() {
    return (
        <>
        <Navbar />
        <section style={{ padding: "60px 24px", textAlign: "center" }}>
            <h1>Page Not Found</h1>
            <p>
                Oops! The page you were looking for doesn't exist. But you're safe here.
            </p>
            <PrimaryButton>
                <Link to="/get-help" style={{ color: "white", textDecoration: "none" }}>
                Get Help Now 
                </Link>
            </PrimaryButton>
            <P style={{ marginTop: "20px" }}>
                Or go back to the <Link to="/">home page</Link>.

            </P>
        </section>
        </>
    );
}

export default NotFound;
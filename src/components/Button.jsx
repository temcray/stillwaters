import React from 'react';

function PrimaryButton({ children, onClick }) {
    return (
        <button
        onClick={onClick}
        className= "primary-button" style={{
            backgroundColor: '#e63946',
            color: '#fff',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '16px',

        }}
        >{children}
        </button>

    );
}

export default PrimaryButton;
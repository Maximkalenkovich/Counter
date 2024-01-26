import React from 'react';
import {NavLink} from "react-router-dom";

const styles = {
    notFoundPage: {
       alignItems: 'center',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#FF0000',
    },
    text: {
        fontSize: '18px',
        color: '#666666',
    },
    button:{
        backgroundColor: '#FF0000',
        color: '#FFFFFF',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    }
};

const NotFoundPage = () => {
    return (
        <div style={styles.notFoundPage}>
            <h1 style={styles.heading}>Error 404: Page Not Found</h1>
            <p style={styles.text}>Oops! The requested page could not be found.</p>
            <NavLink to={'/'}><button style={styles.button}>To main</button></NavLink>
        </div>
    );
};

export default NotFoundPage;

import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      backgroundColor: '#f8f9fa',
      color: '#6c757d',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '6rem',
        fontWeight: '700',
        color: '#4a4e69'
      }}>404</h1>
      <p style={{
        fontSize: '2rem',
        marginBottom: '20px'
      }}>Oops! Page not found.</p>
      <p style={{
        fontSize: '1.5rem'
      }}>We can't find the page you're looking for.</p>
    </div>
  );
};

export default NotFoundPage;

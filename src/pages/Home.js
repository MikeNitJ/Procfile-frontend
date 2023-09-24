import React from 'react';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60vh',
};

const imageStyle = {
  maxWidth: '50%', 
  height: 'auto',
};

function Home(props) {
  return (
    <div style={containerStyle}>
      <div style={{ textAlign: 'center' }}>
        <h1>Mike:</h1>
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg?crop=1xw:0.8888888888888888xh;center,top&resize=1200:*"
            alt="Olli the Polite Cat"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

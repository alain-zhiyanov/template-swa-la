import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [iconText, setIconText] = useState(':-)');

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(`/api/Stateful1/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01`);
      const result = await response.json();
      
      setData(result.status);
    })();
  }, []);

  useEffect(() => {
    // Toggle between :-) and ;-) after each bounce
    const bounceInterval = setInterval(() => {
      setIconText(prev => (prev === ':-)' ? ';-)' : ':-)'));
    }, 2000); // Match the bounce animation duration

    return () => clearInterval(bounceInterval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="container">

      <header>
        <img src="/azure.png" alt="azure" className="azure" />
      </header>

      <div className="content">
        <div className="icon">
          <img src="/screen.png" alt="Icon" />
          <span className="icon-text">{iconText}</span>
        </div>

        <h1>Your Static Web App is Calling a Logic App</h1>
        <p>{data}</p>
        <a href="https://learn.microsoft.com/en-us/azure/static-web-apps/apis-overview" target="_blank" rel="noopener noreferrer" className="learn-more">Learn more</a>
      </div>

      <div className="footer">
        <div className="cityscape">
          <img src="/city.png" alt="Cityscape" />
        </div>
      </div>

      
    </div>
  );
}

export default App;

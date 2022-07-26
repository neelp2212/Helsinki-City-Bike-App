import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



// API key = WBrkKT8JNeJRIJiqJUSyxyfZ3ISfXlkOLCjUxHmjWNaPrOx5zC78GBBdYcEdzNdr


/* curl --location --request POST 'https://data.mongodb-api.com/app/data-iftrm/endpoint/data/v1/action/findOne' \
--header 'Content-Type: application/json'   \
--header 'api-key: <API_KEY>' \
--data-raw '{
    "collection":"Address",
    "database":"Helsinki-City-Bike-App",
    "dataSource":"Cluster0",
    "projection": {"_id": 1}
}' */

curl --location --request POST 'https://data.mongodb-api.com/app/62dd4e214fe3dd60e563dba4/endpoint/data/v1/action/findOne' \
-H 'Content-Type: application/json'   \
-H 'api-key: WBrkKT8JNeJRIJiqJUSyxyfZ3ISfXlkOLCjUxHmjWNaPrOx5zC78GBBdYcEdzNdr'
--data-raw '{
  "collection":"Address",
  "database":"Helsinki-City-Bike-App",
  "dataSource":"Cluster0",
  "projection": {"_id": 1}
}'
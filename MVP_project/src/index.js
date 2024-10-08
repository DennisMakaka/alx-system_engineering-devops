mport React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css'; // Import the main CSS file for styling
import App from './App'; // Import the main App component

// Render the App component into the div with id 'root'
ReactDOM.render(
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>,
	  document.getElementById('root')
);

import './App.css';
import React from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
/* const LoadCountries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Visiting every country of the world</h1>
      {countries.map(country =>
        <div>
          <h4>Country name: {country.name.common}</h4>
          <p>Capital: {country.capital}
          </p>
        </div>)}
    </div>
  )
} */

export default App;

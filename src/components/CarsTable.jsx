import React, { useState, useEffect } from 'react';
import fetchAny from '../apiFacade';

const CarsTable = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAny('http://46.101.183.184:3005/api/v1/cars', (data) => {setCars(data.cars)},
     (err) => {setError(err)},
      'GET', null, null)
  }
  , [])

//   useEffect(() => {
//     (async () => {
//       try {
//         const response = await fetch('http://46.101.183.184:3005/api/v1/cars');
//         const data = await response.json();
//         setCars(data.cars);
//       } catch (error) {
//         console.error('Error fetching car data:', error);
//       }
//     })();
//   }, []); // The empty dependency array ensures the effect runs only once after the initial render

// useEffect(() => {
//   fetch('http://46.101.183.184:3005/api/v1/cars')
//   .then(res=>res.json())
//   .then(data=>setCars(data.cars))
//   .catch(err=>console.log(err))
// }, [])

  return (
    <div>
      {error && <div className="error" style={{color:'red'}}>{error}</div>}
      <h2>Car Data</h2>
      <table className="carstable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Speed</th>
            <th>Color</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
            <th>Available</th>
            <th>Brand</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car._id}>
              <td>{car.name}</td>
              <td>{car.speed}</td>
              <td>{car.color}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.price}</td>
              <td>{car.available ? 'Yes' : 'No'}</td>
              <td>{car.brand}</td>
              <td>{car.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarsTable;

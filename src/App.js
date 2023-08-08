import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import MyContext from './Components/MyContext/MyContext';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(data, 'myApidata')

  return (
    <>

      <MyContext.Provider value={{ data }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;

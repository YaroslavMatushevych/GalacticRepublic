import React, { useState, memo, useEffect } from 'react';
import ShipItem from './components/ShipItem'
import './StarShips.css';

// interface Props {
//   name: string;
//   grayed?: boolean;
// }

const StarShips: React.FC = () => {

  const [data, addNewItem] = useState([{name: 'nnn', model: 'mmm', url: 'jjj'}]);
  const [name, setName] = useState('');

  const searchByName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://swapi.co/api/starships/`);
      const json = await res.json();
      await addNewItem(json.results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(name: string) {
      const res = await fetch(`https://swapi.co/api/starships/?search=${name}`);
      const json = await res.json();
      await addNewItem(json.results);
    }
    fetchData(name);
  }, [name]);

  useEffect(() => {
    async function fetchData(name: string) {
      const res = await fetch(`https://swapi.co/api/starships/?search=${name}`);
      const json = await res.json();
      await addNewItem(json.results);
    }
    fetchData(name);
  }, [name]);

  return (
      <main className='main-block'>
        <div className="main-block-content">

          <input className='search-input' type="text" placeholder='Title' name='title' onChange={searchByName} value={name}/>
          <div className='card-container'>
            <ShipItem data={data} />
          </div>

        </div>
      </main>
  );
};

export default memo(StarShips);

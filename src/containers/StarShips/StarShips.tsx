import React, { useState, memo, useEffect } from 'react';
import ShipItem from './components/ShipItem';
import Button from './components/Button';
import './StarShips.css';

const StarShips: React.FC = () => {

  const [data, getShips] = useState({ next: 'next', previous: 'previous', results: [] });
  const [name, setName] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const searchByName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://swapi.co/api/starships/`);
      const parsedData = await res.json();
      await getShips(parsedData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(name: string) {
      const res = await fetch(`https://swapi.co/api/starships/?search=${name}`);
      const parsedData = await res.json();
      await getShips(parsedData);
    }
    fetchData(name);
  }, [name]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://swapi.co/api/starships/?page=${pageNumber}`);
      const parsedData = await res.json();
      await getShips(parsedData);
    }
    fetchData();
  }, [pageNumber]);

  const setPageNumberWrapper = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLTextAreaElement;
    (target.id === 'next' && data.next !== null) && setPageNumber(pageNumber + 1);
    (target.id === 'previous' && data.previous !== null) && setPageNumber(pageNumber - 1);
  }

  return (
    <main className='main-block'>
      <div className="main-block-content">

        <input className='search-input' type="text" placeholder='Name' name='name' onChange={searchByName} value={name} />

        <div className='ship-container'>
          <ShipItem data={data.results} />
        </div>

        <Button id='previous' text='previous' onClick={setPageNumberWrapper} />

        <Button id='next' text='next' onClick={setPageNumberWrapper} />

      </div>
    </main>
  );
};

export default memo(StarShips);

// modules
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// components
import ShipItems from './components/ShipItems';
import Button from '../../ui-library/components/Button';
// actions
import { itemsFetchData } from '../../actions/starShipsAction';
// typings
import { AppState } from '../../reducers/typings';
// styles
import styles from './StarShips.module.css';

type Props = {
  items: {
    next: string | null;
    previous: string | null;
    results: [];
  };
  hasErrored: boolean;
  isLoading: boolean;
  fetchData: (url: RequestInfo) => {};
}

const StarShips: React.FC<Props & ReturnType<typeof mapStateToProps>> = ({
  items,
  hasErrored,
  isLoading,
  fetchData,
}) => {

  // useEffect(()=> {
  //   fetchData(search);
  // }, search))
  const [name, setName] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const searchByName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
    // router.ush(`/shi/${name}`);
    fetchData(`https://swapi.co/api/starships/?search=${name}`);
  };

  useEffect(() => {
    fetchData('https://swapi.co/api/starships/');
  }, []);

  const setPageNumberWrapper = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLTextAreaElement;
    (target.id === 'next' && items.next !== null) && setPageNumber(pageNumber + 1);
    (target.id === 'previous' && items.previous !== null) && setPageNumber(pageNumber - 1);
    fetchData(`https://swapi.co/api/starships/?page=${pageNumber}`)
  }

  return (
    <main className={styles.mainBlock}>
      <div className={styles.mainBlockContent}>

        <input className={styles.searchInput} type="text" placeholder='Name' name='name' onChange={searchByName} value={name} />

        <div className={styles.shipsContainer}>
          {(hasErrored) && <p>Sorry! There was an error loading the items</p>}

          {(isLoading) && <p>Loading…</p>}

          <ShipItems data={items.results} />
        </div>

        {items.previous !== null &&
          <Button
            id='previous'
            className={styles.paginationBtn}
            text='previous'
            onClick={setPageNumberWrapper}
          />}

        {items.next !== null &&
          <Button
            id='next'
            className={styles.paginationBtn}
            text='next'
            onClick={setPageNumberWrapper}
          />}

      </div>
    </main>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    items: state.items as {
      next: string | null;
      previous: string | null;
      results: [];},
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch: any) => {
  // const search = 'from location';
  return {
    fetchData: (url: RequestInfo) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarShips);

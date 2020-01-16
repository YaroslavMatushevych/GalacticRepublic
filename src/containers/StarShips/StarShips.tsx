// modules
import React, { useState, useEffect, memo } from 'react';
import { connect } from 'react-redux';
import QS from 'query-string';
import { useHistory } from 'react-router-dom';
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

const StarShips: React.FC<Props & ReturnType<typeof mapStateToProps>> = memo(({
  items,
  hasErrored,
  isLoading,
  fetchData,
}) => {
  const { location, push } = useHistory();
  const { name = '' } = QS.parse(location.search);
  const [pageNumber, setPageNumber] = useState(1);

  const searchByName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    push(`${location.pathname}?name=${e.target.value}`);
  };

  useEffect(() => {
    fetchData(`https://swapi.co/api/starships/?search=${name}`);
  }, [fetchData, name]);

  useEffect(() => {
    fetchData('https://swapi.co/api/starships/');
  }, [fetchData]);


  useEffect(() => {
    fetchData(`https://swapi.co/api/starships/?page=${pageNumber}`)
  }, [pageNumber, fetchData]);

  const setPageNumberWrapper = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLTextAreaElement;
    (target.id === 'next' && items.next !== null) && setPageNumber(pageNumber + 1);
    (target.id === 'previous' && items.previous !== null) && setPageNumber(pageNumber - 1);
  }

  return (
    <main className={styles.mainBlock}>

      <h2 className={styles.heading}>List of our Imperial Space Fleet</h2>

      <input
        className={styles.searchInput}
        type="text"
        placeholder='Search By Name'
        name='name'
        onChange={searchByName}
        value={name || ''}
      />

      <div className={styles.shipsContainer}>
        {(hasErrored) && <p>Sorry! There was an error loading the items</p>}

        {(isLoading) && <p>Loading…</p>}

        <ShipItems data={items.results} />
      </div>

      {items.previous &&
        <Button
          id='previous'
          className={styles.paginationBtn}
          text='previous'
          onClick={setPageNumberWrapper}
        />}

      {items.next &&
        <Button
          id='next'
          className={styles.paginationBtn}
          text='next'
          onClick={setPageNumberWrapper}
        />}
    </main>
  );
});

const mapStateToProps = (state: AppState) => {
  return {
    items: state.items as {
      next: string | null;
      previous: string | null;
      results: [];
    },
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: (url: RequestInfo) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarShips);
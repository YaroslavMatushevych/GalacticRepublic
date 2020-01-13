export const itemsHasErrored = (bool: boolean) => {
  return {
      type: 'ITEMS_HAS_ERRORED',
      hasErrored: bool
  };
}

export const itemsIsLoading = (bool: boolean) => {
  return {
      type: 'ITEMS_IS_LOADING',
      isLoading: bool
  };
}

export const itemsFetchDataSuccess = (items: {
  next: string | null;
  previous: string | null;
  results: [];
}) => {
  return {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      items
  };
}

export const itemsFetchData = (url: RequestInfo) => {
  return (dispatch: (arg0: { type: string; isLoading?: boolean; items?: {}; hasErrored?: boolean; }) => void) => {
      dispatch(itemsIsLoading(true));

      fetch(url)
          .then((response) => {
            console.log(response);
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(itemsIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((items) => dispatch(itemsFetchDataSuccess(items)))
          .catch(() => dispatch(itemsHasErrored(true)));
  };
}
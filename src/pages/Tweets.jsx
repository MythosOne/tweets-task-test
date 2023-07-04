import { useState, useEffect } from 'react';
import { TweetList } from '../components/TweetsList/TweetsList';
import { Button } from '../components/Button/Button';
import { apiService } from '../components/Api/apiService';
import Loader from '../components/Loader/Loader';

function Tweets() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  localStorage.setItem('items', JSON.stringify(items));

  // useEffect(() => {

  //   setIsLoading(true);

  //   apiService(items, page)
  //     .then(cards => {
  //       setItems(() => [...items, ...cards]);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, [page]);

  useEffect(() => {
    setIsLoading(true);

    apiService(items, page)
      .then(cards => {
        setItems(() => [...items, ...cards]);
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  }, [page]);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div style={{ padding: 0 }}>
      <TweetList cards={items} />
      {isLoading && <Loader />}
      {items.length < 11 && <Button onClick={loadMore} />}
    </div>
  );
}

export default Tweets;

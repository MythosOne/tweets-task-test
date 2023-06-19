import { useState, useEffect } from 'react';
import { TweetList } from '../components/TweetsList/TweetsList';
import { Button } from '../components/Button/Button';
import { apiService } from '../components/Api/apiService';
import Loader from '../components/Loader/Loader';

function Tweets() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const raw = localStorage.getItem('items') || [];
  //   setItems(JSON.parse(raw));
  // }, []);

  useEffect(() => {
    // localStorage.setItem('items', JSON.stringify(items));
    setIsLoading(true);

    apiService(items, page)
      .then(cards => {
        setItems(() => [...items, ...cards]);
        // setItems((prevState) => [...prevState, ...cards]);
      })
      .catch(error => {
        console.error(error);
      })
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
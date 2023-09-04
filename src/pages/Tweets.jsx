import { useState, useEffect } from 'react';
import { TweetList } from '../components/TweetsList/TweetsList';
import { ButtonLoad } from '../components/Button/ButtonLoadMore';
import { ButtonBack } from '../components/Button/ButtonBack';
import { apiService } from '../components/Api/apiService';
import Loader from '../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';

function Tweets() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) ?? []);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  /* eslint-disable */
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    setIsLoading(true);

    apiService(items, page)
      .then(cards => {
        setItems(() => [...items, ...cards]);
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  }, [page]);
  /* eslint-disable */
  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ padding: 0, marginTop: 20 }}>
      <ButtonBack onClick={goBack} />
      <TweetList cards={items} />
      {isLoading && <Loader />}
      {items.length < 11 && <ButtonLoad onClick={loadMore} />}
    </div>
  );
}

export default Tweets;

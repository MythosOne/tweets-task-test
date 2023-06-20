const styles = {
  container: {
    minHeight: 'calc(80vh - 92px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

function Home() {
  return (
    <dir style={styles.container}>
      <h1 style={styles.title}>
        Welcome Tweets Page 😎
      </h1>
    </dir>
  );
}

export default Home;

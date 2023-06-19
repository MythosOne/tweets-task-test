import {lazy, React} from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { Container } from "./App.styled";

const HomePage = lazy(()=> import("./pages/Home"));
const TweetsPage = lazy(()=> import("./pages/Tweets"));

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="/tweets" element={<TweetsPage />}/>
          <Route path="*" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;

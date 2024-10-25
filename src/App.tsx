import Counter from "./components/Counter";
import DataFetcher from "./components/DataFetcher";
import PostsList from "./components/PostsList";

const App = () => {
  return (
    <div>
      <h2>Redux Complete Tutorial</h2>
      <Counter />
      <PostsList />
      <DataFetcher />
    </div>
  );
};

export default App;

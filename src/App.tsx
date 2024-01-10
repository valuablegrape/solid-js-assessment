import { For, type Component } from 'solid-js';
import UpvoteList from './UpvoteList';

const App: Component = () => {
  return (
    <For each={Array(3)}>{
        () => <UpvoteList />
    }</For>
  );
};

export default App;

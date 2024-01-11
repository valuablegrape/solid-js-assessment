import { Index, type Component, createEffect } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import UpvoteList, { type UpvoteListProps } from './components/UpvoteList';

const numberOfUpvoteLists = 3;

const App: Component = () => {
    const initialUpvoteListState = () => {
        const upvoteListsLocalStorage = localStorage.getItem("upvote_lists");

        if (upvoteListsLocalStorage) {
            try {
                return JSON.parse(upvoteListsLocalStorage);
            } catch (err) {}
        }

        const createUpvoteListState = () => ({
            upvoteCount: 0,
            selected: false,
        });

        return Array(numberOfUpvoteLists).fill(createUpvoteListState());
    }

    const [upvoteListState, setUpvoteListState] = createStore<UpvoteListProps[]>(initialUpvoteListState());

    const handleChangeFunc = (i: number) => {
        return (upvoteCount: number, selected: boolean) => {
            setUpvoteListState(produce(list => {
                list[i].upvoteCount = upvoteCount;
                list[i].selected = selected;
            }));
        }
    }

    createEffect(() => {
        localStorage.setItem("upvote_lists", JSON.stringify(upvoteListState));        
    });

    return (
        <Index each={upvoteListState}>{
            (item, i) => {
                return <UpvoteList {...item()} onChange={handleChangeFunc(i)}/>
            }
        }</Index>
    );
};

export default App;

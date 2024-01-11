import { Index, type Component, createEffect } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import UpvoteList, { type UpvoteListProps } from './UpvoteList';

const numberOfUpvoteLists = 3;

const App: Component = () => {
    const initialUpvoteListState = () => {
        const upvoteListsLocalStorage = localStorage.getItem("upvote_lists");

        if (upvoteListsLocalStorage) {
            try {
                return JSON.parse(upvoteListsLocalStorage);
            } catch (err) {}
        }

        return Array(numberOfUpvoteLists).fill(0).map((_) => {
            return {
                upvoteCount: 0,
                selected: false,
            };
        });
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

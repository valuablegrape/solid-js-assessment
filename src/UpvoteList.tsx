import { For, type Component, createSignal } from 'solid-js';
import Upvote from './Upvote';
import styles from './UpvoteList.module.css';

const UpvoteList: Component = () => {
    const [upvoteCount, setUpvoteCount] = createSignal(0);

    const handleClick = () => {
        setUpvoteCount(upvoteCount() + 1);
    }

    const AddButton = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
            <rect width="72" height="72" rx="15" fill="#DDDDDD"/>
            <rect x="15" y="33" width="42" height="6" fill="black"/>
            <rect x="33" y="57" width="42" height="6" transform="rotate(-90 33 57)" fill="black"/>
        </svg>
    );

    return (
        <div class={styles.upvotelist}>
            <div class={styles.addbutton} onclick={handleClick}>
                <AddButton />
            </div>
            <div class={styles.wireframe}>
                <For each={Array(upvoteCount())} >
                    {() => {
                        console.log("create");
                        return <Upvote />;
                    }}
                </For>
            </div>
        </div>
    )
}; 

export default UpvoteList;

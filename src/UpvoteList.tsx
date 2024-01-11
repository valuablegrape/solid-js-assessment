import { For, type Component, createSignal, mergeProps, createEffect } from 'solid-js';
import Upvote from './Upvote';
import styles from './UpvoteList.module.css';

export interface UpvoteListProps {
    upvoteCount?: number;
    selected?: boolean;
    onChange?: (upvoteCount: number, selected: boolean) => void;
};

const defaultProps = {
    upvoteCount: 0,
    selected: false,
    onChange: () => {}
};

const UpvoteList: Component<UpvoteListProps> = (props) => {
    const mergedProps = mergeProps(defaultProps, props);

    const [upvoteCount, setUpvoteCount] = createSignal(mergedProps.upvoteCount);
    const [selected, setSelected] = createSignal(mergedProps.selected);

    const handleAddClick = () => {
        setUpvoteCount(upvoteCount() + 1);
    }

    const handleUpvoteClick = (selected: boolean) => {
        setSelected(selected);
    }

    // If the props change at any moment, we set that value in too
    createEffect(() => {
        setUpvoteCount(mergedProps.upvoteCount);
        setSelected(mergedProps.selected);
    });

    createEffect(() => {
        mergedProps.onChange(upvoteCount(), selected());
    });

    const AddButton = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
            <rect width="72" height="72" rx="15" fill="#DDDDDD"/>
            <rect x="15" y="33" width="42" height="6" fill="black"/>
            <rect x="33" y="57" width="42" height="6" transform="rotate(-90 33 57)" fill="black"/>
        </svg>
    );

    return (
        <div class={styles.upvotelist}>
            <div class={styles.addbutton} onClick={handleAddClick} data-testid="add-button">
                <AddButton />
            </div>
            <div class={styles.wireframe}>
                <For each={Array(upvoteCount())} >
                    {() => {
                        return <Upvote selected={selected()} onClick={handleUpvoteClick} />;
                    }}
                </For>
            </div>
        </div>
    )
}; 

export default UpvoteList;

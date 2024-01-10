import { type Component, mergeProps, createSignal, createEffect } from 'solid-js';
import UpvoteSvg from './UpvoteSvg';
import styles from './Upvote.module.css';

interface UpvoteProps {
    selected?: boolean;
    onClick?: (isSelected: boolean) => void;
};

const defaultProps = {
    selected: false,
    onClick: () => {},
};

const Upvote: Component<UpvoteProps> = (props) => {
    const mergedProps = mergeProps(defaultProps, props);
    
    const [selected, setSelected] = createSignal(mergedProps.selected);
    const backgroundColour = () => selected() ? '#E5E8FD' : '#F4F6F8';
    const arrowColour = () => selected() ? '#253CF2' : '#343A40';

    const handleClick = () => {
        setSelected(!selected());
        mergedProps.onClick(selected());
    }

    // Change selected if prop changes
    createEffect(() => {
        setSelected(mergedProps.selected);
    });

    return (
        <div onClick={handleClick} class={styles.upvotebutton} >
            <UpvoteSvg backgroundColour={backgroundColour()} arrowColour={arrowColour()} /> 
        </div>
    );
}; 

export default Upvote;

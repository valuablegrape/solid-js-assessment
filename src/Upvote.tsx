import { createSignal, type Component } from 'solid-js';
import UpvoteSvg from './UpvoteSvg';
import styles from './Upvote.module.css';

const Upvote: Component = () => {
    const [selected, setSelected] = createSignal(false);
    const backgroundColour = () => selected() ? '#E5E8FD' : '#F4F6F8';
    const arrowColour = () => selected() ? '#253CF2' : '#343A40';

    const handleClick = () => {
        setSelected(!selected());
    }

    return (
        <div onClick={handleClick} class={styles.upvotebutton} >
            <UpvoteSvg backgroundColour={backgroundColour()} arrowColour={arrowColour()} /> 
        </div>
    );
}; 

export default Upvote;

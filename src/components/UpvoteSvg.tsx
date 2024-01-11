import type { Component } from "solid-js";

interface UpvoteSvgProps {
    backgroundColour: string;
    arrowColour: string;
}

const UpvoteSvg: Component<UpvoteSvgProps> = (props: UpvoteSvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
            <rect width="72" height="72" rx="15" fill={props.backgroundColour} />
            <rect x="30" y="28" width="13" height="35" fill={props.arrowColour} />
            <path d="M36 10L51.5885 37H20.4115L36 10Z" fill={props.arrowColour} />
        </svg>
    );
}

export default UpvoteSvg;

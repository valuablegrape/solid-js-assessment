import { fireEvent, render } from '@solidjs/testing-library';
import { describe, it, expect, vi } from 'vitest';
import Upvote from './Upvote';

describe('Upload button tests', () => {
    it('Test the button independently', () => {
        const mockOnClick = vi.fn();

        const { getByTestId, queryByTestId } = render(() => <Upvote onClick={mockOnClick}/>);

        const upvoteButton = getByTestId('upvote-button');

        fireEvent(upvoteButton, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        const selectedUpvoteButton = getByTestId('upvote-button-selected');
        
        expect(queryByTestId('upvote-button')).not.toBeInTheDocument();
        expect(selectedUpvoteButton).toBeInTheDocument();

        fireEvent(selectedUpvoteButton, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(queryByTestId('upvote-button')).toBeInTheDocument();
        expect(queryByTestId('upvote-button-selected')).not.toBeInTheDocument();
    });
});

import { fireEvent, render } from '@solidjs/testing-library';
import { describe, it, expect, vi } from 'vitest';
import UpvoteList from '.';

describe('UpvoteList tests', () => {
    it('Test the buttons', () => {
        const mockOnChange = vi.fn();

        const { getByTestId, queryAllByTestId } = render(() => <UpvoteList onChange={mockOnChange}/>);
        const addButton = getByTestId('add-button');

        expect(queryAllByTestId('upvote-button')).toHaveLength(0);

        fireEvent(addButton, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        fireEvent(addButton, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        const upvoteButtons = queryAllByTestId('upvote-button');
        expect(upvoteButtons).toHaveLength(2);
        expect(mockOnChange).toBeCalledWith(2, false);

        const upvoteButton = upvoteButtons[0];

        fireEvent(upvoteButton, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));
        
        const selectedUpvoteButtons = queryAllByTestId('upvote-button-selected');

        expect(queryAllByTestId('upvote-button')).toHaveLength(0);
        expect(selectedUpvoteButtons).toHaveLength(2);
        expect(mockOnChange).toBeCalledWith(2, true);

        const selectedButton = selectedUpvoteButtons[1];

        fireEvent(selectedButton, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(queryAllByTestId('upvote-button-selected')).toHaveLength(0);
        expect(queryAllByTestId('upvote-button')).toHaveLength(2);
    });
});

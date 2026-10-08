import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LikesProvider } from '../context/LikesContext'
import LikeButton from './LikeButton'

test('increments like count when clicked', async () => {
    render(
        <LikesProvider>
            <LikeButton />
        </LikesProvider>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('0')

    await userEvent.click(button)
    expect(button).toHaveTextContent('1')
})
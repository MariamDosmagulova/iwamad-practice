import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import EventsPage from './EventsPage'
import { events } from '../data/events'

it('shows one card per event', () => {
    render(
        <MemoryRouter>
            <EventsPage />
        </MemoryRouter>
    )
    expect(screen.getAllByRole('article')).toHaveLength(events.length)
})
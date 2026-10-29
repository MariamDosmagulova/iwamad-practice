import { Link, useParams } from 'react-router'
import { events } from '../data/events'

export default function EventDetailsPage() {
    const { eventId } = useParams()
    const event = events.find((item) => item.id === Number(eventId))

    if (!event) {
        return (
            <div className="event-page">
                <h1>Event not found</h1>
                <p>No event with id {eventId}.</p>
                <p>
                    <Link to="/events">← All events</Link>
                </p>
            </div>
        )
    }

    return (
        <div className="event-page">
            <h1>{event.title}</h1>
            <p>{event.date} · {event.place}</p>
            <p>
                <Link to="/events">← All events</Link>
            </p>
        </div>
    )
}
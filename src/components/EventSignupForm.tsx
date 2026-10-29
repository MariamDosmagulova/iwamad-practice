import { useState } from 'react'
import type { ChangeEvent, FocusEvent, SubmitEvent } from 'react'
import TextField from './ui/TextField'
import Button from './ui/Button'
import { validateSignup } from '../lib/validateSignup'
import type { SignupValues } from '../lib/validateSignup'
import type { CampusEvent } from '../data/events'

type EventSignupFormProps = {
    event: CampusEvent;
};

const emptyValues: SignupValues = { fullName: '', email: '', tickets: '1' }

export default function EventSignupForm({ event }: EventSignupFormProps) {
    const [values, setValues] = useState<SignupValues>(emptyValues)
    const [touched, setTouched] = useState<Record<string, boolean>>({})
    const [submitAttempted, setSubmitAttempted] = useState(false)
    const [seatsLeft, setSeatsLeft] = useState(event.seats)
    const [booking, setBooking] = useState<{ tickets: number; name: string } | null>(null)

    const errors = validateSignup(values, seatsLeft)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setValues((current) => ({ ...current, [name]: value }))
    }

    function handleBlur(e: FocusEvent<HTMLInputElement>) {
        const { name } = e.target
        setTouched((current) => ({ ...current, [name]: true }))
    }

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        setSubmitAttempted(true)
        if (Object.keys(errors).length === 0) {
            const tickets = Number(values.tickets)
            setSeatsLeft((current) => current - tickets)
            setBooking({ tickets, name: values.fullName.trim() })
            setValues(emptyValues)
            setTouched({})
            setSubmitAttempted(false)
        }
    }

    function showError(field: keyof SignupValues) {
        if (touched[field] || submitAttempted) {
            return errors[field]
        }
        return undefined
    }

    return (
        <section>
            <h2>Book a seat</h2>
            <p>Seats left: {seatsLeft}</p>
            {booking && (
                <p role="status">Booked: {booking.tickets} for {booking.name}.</p>
            )}
            <form className="form" onSubmit={handleSubmit} noValidate>
                <TextField
                    label="Full name"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={showError('fullName')}
                />
                <TextField
                    label="Email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={showError('email')}
                />
                <TextField
                    label="Tickets"
                    type="number"
                    min={1}
                    max={4}
                    name="tickets"
                    value={values.tickets}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={showError('tickets')}
                />
                <Button type="submit">Book</Button>
            </form>
        </section>
    )
}
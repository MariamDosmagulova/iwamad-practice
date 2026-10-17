import { useState } from 'react'
import type { ChangeEvent, FocusEvent, SubmitEvent } from 'react'
import TextField from '../components/ui/TextField'
import Button from '../components/ui/Button'
import { validateRegistration } from '../lib/validateRegistration'
import type { RegistrationValues } from '../lib/validateRegistration'

export default function RegisterPage() {
    const [values, setValues] = useState<RegistrationValues>({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    })
    const [touched, setTouched] = useState<Record<string, boolean>>({})
    const [submitAttempted, setSubmitAttempted] = useState(false)
    const [registered, setRegistered] = useState(false)

    const errors = validateRegistration(values)

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, type, value, checked } = event.target
        setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    }

    function handleBlur(event: FocusEvent<HTMLInputElement>) {
        const { name } = event.target
        setTouched((current) => ({ ...current, [name]: true }))
    }

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        setSubmitAttempted(true)
        if (Object.keys(errors).length === 0) {
            setRegistered(true)
        }
    }

    function showError(field: keyof RegistrationValues) {
        if (touched[field] || submitAttempted) {
            return errors[field]
        }
        return undefined
    }

    if (registered) {
        return (
            <div className="register-page">
                <h2>Register</h2>
                <p role="status">Thanks, {values.fullName.trim()}. You are registered.</p>
            </div>
        )
    }

    return (
        <div className="register-page">
            <h2>Register</h2>
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
                    label="Password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={showError('password')}
                />
                <TextField
                    label="Confirm password"
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={showError('confirmPassword')}
                />
                <div className="field">
                    <label className="check" htmlFor="acceptTerms">
                        <input
                            id="acceptTerms"
                            type="checkbox"
                            name="acceptTerms"
                            checked={values.acceptTerms}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            aria-invalid={showError('acceptTerms') ? true : undefined}
                            aria-describedby={showError('acceptTerms') ? 'acceptTerms-error' : undefined}
                        />
                        I accept the terms
                    </label>
                    {showError('acceptTerms') && (
                        <p id="acceptTerms-error" className="field-error">
                            {showError('acceptTerms')}
                        </p>
                    )}
                </div>
                <Button type="submit">Create account</Button>
            </form>
        </div>
    )
}
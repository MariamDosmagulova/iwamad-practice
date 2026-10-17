import { useState } from 'react'
import type { ChangeEvent, SubmitEvent } from 'react'
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
    const [submitAttempted, setSubmitAttempted] = useState(false)
    const [registered, setRegistered] = useState(false)

    const errors = validateRegistration(values)

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, type, value, checked } = event.target
        setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    }

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        setSubmitAttempted(true)
        if (Object.keys(errors).length === 0) {
            setRegistered(true)
        }
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
                <div className="field">
                    <label htmlFor="fullName">Full name</label>
                    <input id="fullName" name="fullName" value={values.fullName} onChange={handleChange} />
                    {submitAttempted && errors.fullName && <p className="field-error">{errors.fullName}</p>}
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" value={values.email} onChange={handleChange} />
                    {submitAttempted && errors.email && <p className="field-error">{errors.email}</p>}
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" value={values.password} onChange={handleChange} />
                    {submitAttempted && errors.password && <p className="field-error">{errors.password}</p>}
                </div>
                <div className="field">
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input id="confirmPassword" type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
                    {submitAttempted && errors.confirmPassword && <p className="field-error">{errors.confirmPassword}</p>}
                </div>
                <div className="field">
                    <label className="check" htmlFor="acceptTerms">
                        <input id="acceptTerms" type="checkbox" name="acceptTerms" checked={values.acceptTerms} onChange={handleChange} />
                        I accept the terms
                    </label>
                    {submitAttempted && errors.acceptTerms && <p className="field-error">{errors.acceptTerms}</p>}
                </div>
                <Button type="submit">Create account</Button>
            </form>
        </div>
    )
}
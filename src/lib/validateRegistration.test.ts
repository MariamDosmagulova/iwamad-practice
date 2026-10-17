import { validateRegistration } from './validateRegistration'

const valid = {
    fullName: 'Aliya Nurlanovna',
    email: 'aliya@example.com',
    password: 'almaty2026',
    confirmPassword: 'almaty2026',
    acceptTerms: true,
}

it('1 accepts valid values', () => {
    const errors = validateRegistration(valid)
    expect(errors).toEqual({})
})

it('2 rejects a name that is only spaces', () => {
    const errors = validateRegistration({ ...valid, fullName: '   ' })
    expect(errors.fullName).toBe('Enter your full name')
})

it('3 rejects an email without a domain ending', () => {
    const errors = validateRegistration({ ...valid, email: 'aliya@example' })
    expect(errors.email).toBe('Enter a valid email, like name@example.com')
})

it('4 accepts a password of exactly 8 characters', () => {
    const errors = validateRegistration({ ...valid, password: 'almaty26', confirmPassword: 'almaty26' })
    expect(errors).toEqual({})
})

it('5 rejects a password of 7 characters', () => {
    const errors = validateRegistration({ ...valid, password: 'almaty2', confirmPassword: 'almaty2' })
    expect(errors.password).toBe('Use at least 8 characters')
})

it('6 rejects a password without a number', () => {
    const errors = validateRegistration({ ...valid, password: 'almatycity', confirmPassword: 'almatycity' })
    expect(errors.password).toBe('Include at least one number')
})

it('7 rejects passwords that do not match', () => {
    const errors = validateRegistration({ ...valid, confirmPassword: 'almaty2027' })
    expect(errors.confirmPassword).toBe('Passwords do not match')
})

it('8 rejects when terms are not accepted', () => {
    const errors = validateRegistration({ ...valid, acceptTerms: false })
    expect(errors.acceptTerms).toBe('Accept the terms to continue')
})
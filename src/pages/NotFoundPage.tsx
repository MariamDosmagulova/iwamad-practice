import { Link } from 'react-router'

export default function NotFoundPage() {
    return (
        <div className="page">
            <h1>404 — Page Not Found</h1>
            <p>Oops! This page doesn't exist.</p>
            <p>
                <Link to="/" className="back-link">
                    ← Go back home
                </Link>
            </p>
        </div>
    )
}
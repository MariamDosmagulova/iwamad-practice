import { Link } from 'react-router'

export default function NotFoundPage() {
    return (
        <div className="page">
            <h1>404 — Page Not Found</h1>
            <p>Oops! This page doesn't exist.</p>
            <p>
                <Link to="/" style={{ color: '#ec4899', fontWeight: 600 }}>
                    ← Go back home
                </Link>
            </p>
        </div>
    )
}
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
    return (
        <>
            <Header title="Mariam Dosmagulova — Profile" />
            <main>
                <Outlet />
            </main>
            <Footer text="© 2026 Mariam Dosmagulova" />
        </>
    )
}
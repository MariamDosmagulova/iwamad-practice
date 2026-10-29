import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import logo from '../assets/logo.svg'

type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {
    const { likes } = useLikes()

    return (
        <header className="site-header">
            <h1 className="visually-hidden">{title}</h1>
            <div className="brand">
                <img src={logo} alt="" width={32} height={32} />
                <span>Mariam Dosmagulova</span>
            </div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/events">Events</NavLink>
                <span className="like-count">👍 {likes}</span>
            </nav>
        </header>
    );
}
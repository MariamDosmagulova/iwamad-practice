import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'

type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {
    const { likes } = useLikes()

    return (
        <header>
            <h1 className="visually-hidden">{title}</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <span className="like-count">👍 {likes}</span>
            </nav>
        </header>
    );
}
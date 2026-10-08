import ProfileCard from '../components/ProfileCard'

const links = [
    { id: 1, label: 'Email me', href: 'mailto:m_dosmagulova@kbtu.kz' },
    { id: 2, label: 'My GitHub', href: 'https://github.com/MariamDosmagulova' },
];

const skills = [
    { id: 1, label: 'HTML' },
    { id: 2, label: 'CSS' },
    { id: 3, label: 'JavaScript' },
    { id: 4, label: 'TypeScript' },
    { id: 5, label: 'React' },
    { id: 6, label: 'Python' },
    { id: 7, label: 'Git' },
    { id: 8, label: 'Power BI' },
];

export default function HomePage() {
    return (
        <ProfileCard
            name="Mariam Dosmagulova"
            bio="I am a third-year IT Management student at KBTU, originally from Semey. I enjoy connecting technology and business, learning new things, and improving my coding skills. This course is my chance to build a real portfolio and grow as a frontend developer."
            avatarUrl={`${import.meta.env.BASE_URL}avatar.jpg`}
            links={links}
            skills={skills}
        />
    )
}
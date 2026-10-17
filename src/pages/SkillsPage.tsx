import SkillBadge from '../components/SkillBadge'

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

export default function SkillsPage() {
    return (
        <div className="page">
            <h1>My Skills</h1>
            <p>Technologies and tools I'm learning:</p>
            <ul className="skills-list">
                {skills.map((skill) => (
                    <SkillBadge key={skill.id} skill={skill} variant="card" />
                ))}
            </ul>
        </div>
    )
}
import SkillBadge from './SkillBadge'
import LikeButton from './LikeButton'
import Card from './ui/Card'

type Skill = {
    id: number;
    label: string;
};

type Link = {
    id: number;
    label: string;
    href: string;
};

type ProfileCardProps = {
    name: string;
    bio: string;
    avatarUrl?: string;
    links: Link[];
    skills: Skill[];
};

export default function ProfileCard({ name, bio, avatarUrl, links, skills }: ProfileCardProps) {
    return (
        <Card>
            <div className="profile">
                {avatarUrl && (
                    <img
                        className="avatar"
                        src={avatarUrl}
                        alt="About me"
                    />
                )}

                <h2>{name}</h2>
                <p className="bio">{bio}</p>

                <div className="links">
                    {links.map((link) => (
                        <a key={link.id} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </div>

                {skills.length > 0 ? (
                    <ul className="skills-list">
                        {skills.map((skill) => (
                            <SkillBadge key={skill.id} skill={skill} />
                        ))}
                    </ul>
                ) : (
                    <p className="empty-skills">No skills added yet.</p>
                )}

                <LikeButton />
            </div>
        </Card>
    );
}
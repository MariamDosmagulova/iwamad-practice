import { useState } from 'react';
import SkillBadge from './SkillBadge';

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
    const [liked, setLiked] = useState(false);

    return (
        <div className="p-6 border border-gray-300 mx-auto max-w-[420px] rounded-xl bg-white shadow-md flex flex-col items-center gap-4 text-center">
            {avatarUrl && (
                <img
                    className="w-24 h-24 rounded-full object-cover border-[3px] border-pink-500"
                    src={avatarUrl}
                    alt="About me"
                />
            )}

            <h2 className="m-0 text-2xl">{name}</h2>
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

            <button
                className={`like-btn ${liked ? 'liked' : ''}`}
                onClick={() => setLiked(!liked)}
            >
                {liked ? 'Liked ❤️' : 'Like'}
            </button>
        </div>
    );
}
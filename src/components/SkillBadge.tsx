type Skill = {
    id: number;
    label: string;
};

type SkillBadgeProps = {
    skill: Skill;
    variant?: 'badge' | 'card';
};

export default function SkillBadge({ skill, variant = 'badge' }: SkillBadgeProps) {
    const className = variant === 'card' ? 'skill-card' : 'skill-badge';
    return <li className={className}>{skill.label}</li>;
}
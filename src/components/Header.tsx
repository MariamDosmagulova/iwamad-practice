type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {
    return (
        <header>
            <h1 className="visually-hidden">{title}</h1>
        </header>
    );
}

interface HeaderProps {
    title: string;
    description?: string;
}

const Header =(props: HeaderProps) => {
    const {title, description} = props;

    return (
        <header className="bg-[url('/src/assets/Hero-BG.png')] bg-cover bg-no-repeat h-[442px]">
            <div className="w-[760px] m-auto text-center pt-[120px]">
                <h1 className="pb-4 text-neutral-black font-bold">{title}</h1>
                <p className="pb-12">{description}</p>
            </div>
        </header>
    )
}

export default Header;
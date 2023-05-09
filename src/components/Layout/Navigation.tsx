import {Link} from "react-router-dom"

import Logo from "../../assets/Logo.png"

const Navigation =()=>{
    return <nav className="flex flex-col items-center lg:justify-between lg:flex-row lg:h-[86px]">
        <img className="w-[143px]" src={Logo} alt="Logo" />
        <ul className="flex flex-col lg:flex-row gap-[32px]">
            <li>Home</li>
            <li>Knowledge Base</li>
            <li>Forums</li>
            <li>My Support</li>
        </ul>
        <div className="flex flex-col  lg:flex-row gap-[24px]">
            <Link to="/">Register</Link>
            <Link to="/">Log in</Link>
        </div>
    </nav>
}

export default Navigation;
import {Link} from "react-router-dom"

import Logo from "../../assets/Logo.png"

const Navigation =()=>{
    return <nav className="flex flex-col items-center bg-primary lg:flex-row lg:h-[86px] gap-[64px]">
        <img className="w-[143px]" src={Logo} alt="Logo" />
        <div className="flex lg:justify-between lg:flex- grow">
            <ul className="flex flex-col lg:flex-row gap-[32px]">
                <li><Link className="hover:text-base-black" to="/">Home</Link></li>
                <li><Link className="hover:text-base-black" to="/">Knowledge Base</Link></li>
                <li><Link className="hover:text-base-black" to="/">Forums</Link></li>
                <li><Link className="hover:text-base-black" to="/">My Support</Link></li>
            </ul>
            <div className="flex flex-col  lg:flex-row gap-[24px]">
                <Link to="/">Register</Link>
                <Link to="/">Log in</Link>
            </div>
        </div>

    </nav>
}

export default Navigation;
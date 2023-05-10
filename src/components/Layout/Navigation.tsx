import {Link} from "react-router-dom"

import ContentContainer from "../ContentContainer"

import Logo from "../../assets/Logo.png"

const Navigation =()=>{
    return <nav className=" bg-primary">
        <ContentContainer className="flex flex-col items-center lg:flex-row gap-16 lg:h-[86px] ">
            <img className="w-100" src={Logo} alt="Logo" />
            <div className="flex lg:justify-between lg:flex- grow">
                <ul className="flex flex-col lg:flex-row gap-8">
                    <li><Link className="hover:text-base-black" to="/">Home</Link></li>
                    <li><Link className="hover:text-base-black" to="/">Knowledge Base</Link></li>
                    <li><Link className="hover:text-base-black" to="/">Forums</Link></li>
                    <li><Link className="hover:text-base-black" to="/">My Support</Link></li>
                </ul>
                <div className="flex flex-col  lg:flex-row gap-6">
                    <Link to="/">Register</Link>
                    <Link to="/">Log in</Link>
                </div>
            </div>
        </ContentContainer>
    </nav>
}

export default Navigation;
import Image from "next/image"
import Link from "next/link"
import { NavLinks } from "../constants/constants"
import AuthProviders from "./AuthProviders"

const Navbar = () => {
    const session = null
    return (
        <nav className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image src="/logo.svg" alt="Frizzle" height={115} width={43}/>
                </Link>
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((link) => (<Link key={link.key} href={link.href}>{link.text }</Link>))}
                </ul>
                <div className="flexCenter gap-4">
                    {session ? (<>
                        UserPhoto
                        <Link href="/create-project">Share Work</Link>
                    </>) : <AuthProviders />}
                </div>
            </div>
        </nav>
    )
}
export default Navbar 
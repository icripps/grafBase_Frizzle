import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "../constants/constants"

type footerColumn = {
    title: string,
    links: Array<string>
}

const FooterColumn = ({title, links} : footerColumn) => {
    return (
        <div className="footer_column">
            <h4 className="font-semibold">{title }</h4>
            <ul className="flex flex-col gap-2 font-normal">
                {links.map((link) => <Link key={link
                } href="/">{ link}</Link>)}
            </ul>
        </div>
    )
}

const Footer = () => {

    return (
        <footer className="flexStart footer">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex flex-col items-start">
                    <Image src="/logo-purple.svg" height={115} width={43} alt="Frizzle" />
                    <p className="text-start text-small font-normal max-w-xs mt-5">
                        Frizlle is the best place for developers to discover 🌏, collaborate,
                        and absolutely get Frizzled 🥴 about their work. Come oh ye Jedi to the Frizzleverse 🖧.
                        
                    </p>
                </div>
                <div className="flex flex-wrap gap-12">
                    {
                        footerLinks.map((_, i) => (
                            <FooterColumn title={footerLinks[i].title} links={footerLinks[i].links} />
                        ))
                    }
                    
                </div>
            </div>
            <div className="flexBetween footer_copyright">
                <p>
                    @2023 Frizzle. All rights reserved
                </p>
                <p className="tezt-gray">
                    <span className="font-semibold text-black">10,234</span> Projects Submitted.
                </p>
            </div>
      </footer>
    )
}

export default Footer
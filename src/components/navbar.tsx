import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {

    const router = useRouter()

    return (
        <nav className="navbar">
            <div className="navbar-items">
               <NavbarItem title="Home"
                    href="/"
                    currentPage={router.pathname} />
               <NavbarItem title="About"
                    href="/about"
                    currentPage={router.pathname} />
               <NavbarItem title="Blogs"
                    href="/blogs"
                    currentPage={router.pathname} />
            </div>
        </nav>
    )
}

interface NavbarItemProps {
    title: string,
    href: string,
    currentPage: string
}

function NavbarItem(props: NavbarItemProps) {
    return (
        <Link className={props.currentPage === props.href ? "active" : ""} href={props.href}>{props.title}</Link>
    )
}
import Link from "next/link";

const NavbarLink = () => {
    return (
        <Link
            href="/user/profile"
            className="hidden md:inline-block p-3 text-white"
            >
            Profile
        </Link>
    );
}

export default NavbarLink;
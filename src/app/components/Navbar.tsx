import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <Link href="/" className="ms-3 me-3">
                    <span className='self-center text-2xl font-semibold'>Next Tweet</span>
                </Link>

                <div>
                    <ul className='flex flex-wrap'>
                        <li>
                            <Link href="/user/profile" className='py-2 px-3'>Profile</Link>
                        </li>
                        <li>
                            <Link href="/regist" className='py-2 px-3'>Register</Link>
                        </li>
                        <li>
                            <Link href="/login" className='py-2 px-3'>Sign in</Link>
                        </li>
                        <li>
                            <Link href="/user/logout" className='py-2 px-3'>Sign out</Link>
                        </li>
                    </ul>
                </div>            </div>
        </nav>
    );
}

export default Navbar;
import Image from "next/image";
import Link from "next/link"

// import {motion} from "framer-motion";


const Navbar = () => {

    return (
        <div className='h-24 w-full flex items-center jc justify-center md:justify-between px-24 py-10'>
            {/* LOGO */}
            <div className='flex items-center'>
                <Image src='/cmbb-logo.png' alt='CMBB logo' height={60} width={60} />
                <p className="pl-5 font-bold text-purple-800 text-3xl hidden">$CMBB</p>
            </div>
            {/* SOCIAL */}
            <div className="hidden md:flex gap-4">
                <Link href="/">
                    <Image src="/github.png" alt="" width={24} height={24} />
                </Link>
                <Link href="/">
                    <Image src="/dribbble.png" alt="" width={24} height={24} />
                </Link>
                <Link href="/">
                    <Image src="/instagram.png" alt="" width={24} height={24} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
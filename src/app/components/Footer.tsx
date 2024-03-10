import Image from "next/image"
import Link from "next/link"

const Footer = () => {

    return (
        <div className='h-24 w-full flex flex-col items-center justify-center px-8 md:px-24 py-10'>
            
            <div>
                
                <div className="flex mt-5 justify-center mb-5 gap-8">
                <Link href="/">
                    <Image src="/github.png" alt="" width={25} height={25} />
                </Link>
                <Link href="/">
                    <Image src="/dribbble.png" alt="" width={25} height={25} />
                </Link>
                <Link href="/">
                    <Image src="/instagram.png" alt="" width={25} height={25} />
                </Link>
                </div>

                <div className='flex items-center justify-center mb-5'>
                    <Image src='/cmbb-logo.png' alt='CMBB logo' height={50} width={50} />
                </div>
            </div>
            <p className="text-xs text-zinc-700 mb-20">CMBB © 2024</p>
        </div>
    )
}

export default Footer
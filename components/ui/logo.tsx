"use client"

import { useSession } from '@clerk/clerk-react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    const { isSignedIn } = useSession();
    return (
        <Link href={`${isSignedIn ? '/dashboard' : '/'}`} className="relative w-16 h-16 sm:w-20 sm:h-20">
            <Image
                src='/logo.png'
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded"
                alt="UrbexPins logo"
                priority
            />
        </Link>
    )
}

export default Logo;
import { SignIn } from "@clerk/nextjs";
import Header from "@/components/header";
import { Metadata } from "next";
import Logo from "@/components/ui/logo";

export const metadata: Metadata = {
    title: 'Urbex Pins | Sign In',
}

export default function Page() {
    return (
        <section className='p-2 sm:p-4 md:p-8 flex flex-col items-center justify-center gap-8 mx-auto min-h-screen w-full'>
            <div className="flex flex-col justify-center items-center">
                <header className='flex justify-between items-center py-2 px-4 w-full absolute left-0 top-0 z-10'>
                    <Logo />
                </header>
                <section className="w-full lg:p-8 flex flex-col justify-center items-center text-justify">
                    <SignIn />
                </section>
            </div>
        </section>
    );
}
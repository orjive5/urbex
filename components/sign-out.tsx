"use client"

import { useClerk, SignOutButton } from "@clerk/clerk-react";

const SignOut = () => {
    const { signOut } = useClerk();

    return (
        // <div className="p-3 bg-background text-muted-accent sm:text-start w-full text-sm font-medium leading-none block select-none space-y-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
        <SignOutButton
            signOutCallback={() => signOut()}
        >
            Sign out
        </SignOutButton>
        // </div>

    );
};

export default SignOut;
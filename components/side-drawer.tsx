import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { pagesList } from "@/constants/pagesList"
import { Menu } from "lucide-react"
import Link from "next/link"
import SignOut from "./sign-out"
import { Separator } from "./ui/separator"
import { currentUser } from '@clerk/nextjs';

const SideDrawer = async () => {
    const user = await currentUser();
    return (
        <div className="flex items-center justify-center">
            <Sheet>
                <SheetTrigger>
                    <Menu />
                </SheetTrigger>
                <SheetContent className="w-[200px] sm:w-[300px] lg:w-[500px]">
                    <SheetHeader>
                        <SheetTitle>
                            Hi, {user?.firstName}!
                        </SheetTitle>
                        <Separator />
                        <SheetDescription>
                            {pagesList.map(p => (
                                <Link
                                    key={p.title}
                                    href={p.href}
                                    className="block select-none space-y-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                    <SheetTrigger className="w-full p-3">
                                        <p className="sm:text-start w-full text-sm font-medium leading-none">
                                            {p.title}
                                        </p>
                                    </SheetTrigger>
                                </Link>
                            ))}
                            <SheetTrigger className="w-full">
                                <SignOut />
                            </SheetTrigger>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default SideDrawer;
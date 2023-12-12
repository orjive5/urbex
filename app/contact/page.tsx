import Header from "@/components/header";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Urbex Pins | Contact',
}

const Contact = () => {
    return (
        <section className='p-2 sm:p-4 md:p-8 flex flex-col items-center justify-center gap-8 mx-auto min-h-screen w-full'>
            <div className="flex flex-col justify-center items-center">
                <Header />
                <Card className="w-full lg:w-3/4 xl:w-2/3 lg:p-8 flex flex-col justify-center items-center text-justify">
                    <CardHeader>
                        <CardTitle className="text-center">
                            Contact
                        </CardTitle>
                        <CardDescription className="text-center">
                            Find and review locations for urban exploration across the world.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <h2 className="font-medium">
                            Email
                        </h2>
                        <p className="">
                            urbexpins@gmail.com
                        </p>
                        <h2 className="font-medium">
                            Phone
                        </h2>
                        <p className="">
                            +381665594439
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Contact;
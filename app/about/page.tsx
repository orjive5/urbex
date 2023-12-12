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
    title: 'Urbex Pins | About',
}

const About = () => {
    return (
        <section className='p-2 sm:p-4 md:p-8 flex flex-col items-center justify-center gap-8 mx-auto min-h-screen w-full'>
            <div className="flex flex-col justify-center items-center">
                <Header />
                <Card className="w-full lg:w-3/4 xl:w-2/3 lg:p-8 flex flex-col justify-center items-center text-justify">
                    <CardHeader>
                        <CardTitle className="text-center">
                            Urbex Pins
                        </CardTitle>
                        <CardDescription className="text-center">
                            Find and review locations for urban exploration across the world.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-justify">
                            Welcome to <strong>Urbex Pins</strong>, your ultimate destination for the world of urban exploration! We are passionate adventurers who share your love for uncovering the hidden gems of urban landscapes. Our mission is to connect urban explorers from across the globe and provide a platform where you can discover, document, and share the most captivating, forgotten, and off-the-beaten-path locations.
                        </p>
                        <br />
                        <h2 className="font-semibold text-lg">
                            Our Story
                        </h2>
                        <p className="text-justify">
                            <strong>Urbex Pins</strong> was born out of a deep fascination for the world's urban mysteries. We believe that every city and town holds secrets, stories, and unique architecture waiting to be explored. Our founders, avid urban explorers themselves, decided to create a space where like-minded individuals could come together to celebrate the beauty of forgotten places and the thrill of discovering the unknown.
                        </p>
                        <br />
                        <h2 className="font-semibold text-lg">
                            What We Do
                        </h2>
                        <div className="text-justify">
                            <p>At <strong>Urbex Pins</strong>, we offer a map-based web app that empowers you to add, review, and find urban exploration locations across the world. Whether you're an experienced urban explorer or just starting your journey, our platform is designed to be your companion in this exciting pursuit.</p>
                            <ul>
                                <li><strong>Discover Hidden Gems:</strong> Browse our extensive database of locations, from abandoned factories and forgotten asylums to mysterious tunnels and eerie underground spaces. The world is your oyster, and we've pinned it on your map.</li>
                                <li><strong>Share Your Adventures:</strong> Have you recently explored a fascinating location? Share it with the <strong>Urbex Pins</strong> community! Add new locations, leave detailed reviews, and upload captivating photos to help others experience what you've discovered.</li>
                                <li><strong>Connect with Explorers:</strong> Connect with fellow urban explorers, exchange tips, and embark on journeys together. <strong>Urbex Pins</strong> is more than just a platform; it's a community of adventurers who share your passion.</li>
                            </ul>
                        </div>
                        <br />
                        <h2 className="font-semibold text-lg">
                            Our Commitment
                        </h2>
                        <p className="text-justify">
                            <strong>Urbex Pins</strong> is committed to preserving and respecting the locations we explore. We encourage responsible and ethical urban exploration, with a focus on safety, respect for historical sites, and minimal environmental impact. Remember, the thrill of discovery should always be balanced with respect for the places we visit.
                            < br />
                            Join us on this remarkable journey through the hidden corners of the world's cities. Together, we'll uncover the extraordinary and share it with the Urbex Pins community. Start your adventure today, and let's keep the spirit of urban exploration alive!
                        </p>
                        <br />
                        <p className="font-semibold text-lg">
                            Happy exploring!
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default About;
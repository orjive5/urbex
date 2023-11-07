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
        <section className="flex flex-col justify-center items-center h-screen w-full">
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
                    <p>
                        Welcome to Urbex Pins, your ultimate destination for the world of urban exploration! We are passionate adventurers who share your love for uncovering the hidden gems of urban landscapes. Our mission is to connect urban explorers from across the globe and provide a platform where you can discover, document, and share the most captivating, forgotten, and off-the-beaten-path locations.
                    </p>
                    <h2 className="font-medium">
                        Our Story
                    </h2>

                    <p>
                        Urbex Pins was born out of a deep fascination for the world's urban mysteries. We believe that every city and town holds secrets, stories, and unique architecture waiting to be explored. Our founders, avid urban explorers themselves, decided to create a space where like-minded individuals could come together to celebrate the beauty of forgotten places and the thrill of discovering the unknown.
                    </p>

                    <h2 className="font-medium">
                        What We Do
                    </h2>

                    <p>
                        At Urbex Pins, we offer a map-based web app that empowers you to add, review, and find urban exploration locations across the world. Whether you're an experienced urban explorer or just starting your journey, our platform is designed to be your companion in this exciting pursuit. Here's what you can do on Urbex Pins:
                        <br />
                        Discover Hidden Gems: Browse our extensive database of locations, from abandoned factories and forgotten asylums to mysterious tunnels and eerie underground spaces. The world is your oyster, and we've pinned it on your map.
                        <br />
                        Share Your Adventures: Have you recently explored a fascinating location? Share it with the Urbex Pins community! Add new locations, leave detailed reviews, and upload captivating photos to help others experience what you've discovered.
                        <br />
                        Connect with Explorers: Connect with fellow urban explorers, exchange tips, and embark on journeys together. Urbex Pins is more than just a platform; it's a community of adventurers who share your passion.
                    </p>

                    <h2 className="font-medium">
                        Our Commitment
                    </h2>

                    <p>
                        Urbex Pins is committed to preserving and respecting the locations we explore. We encourage responsible and ethical urban exploration, with a focus on safety, respect for historical sites, and minimal environmental impact. Remember, the thrill of discovery should always be balanced with respect for the places we visit.
                        < br />
                        Join us on this remarkable journey through the hidden corners of the world's cities. Together, we'll uncover the extraordinary and share it with the Urbex Pins community. Start your adventure today, and let's keep the spirit of urban exploration alive!
                    </p>
                    <p>
                        Happy exploring!
                    </p>
                </CardContent>
            </Card>
        </section>
    )
}

export default About;
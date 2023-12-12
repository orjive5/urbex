import Header from "@/components/header";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqList } from "@/constants/faqList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Urbex Pins | FAQ',
}

const Faq = () => {
    return (
        <section className='p-2 sm:p-4 md:p-8 flex flex-col items-center justify-center gap-8 mx-auto min-h-screen w-full'>
            <div className="flex flex-col justify-center items-center">
                <Header />
                <Card className="w-full lg:p-8 flex flex-col justify-center items-center text-justify">
                    <CardHeader>
                        <CardTitle className="text-center">
                            Frequently Asked Questions
                        </CardTitle>
                        <CardDescription className="text-center">
                            Find and review locations for urban exploration across the world.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-8">
                        <Accordion type="single" collapsible className="w-full md:w-[600px]">
                            {faqList.map((faq, index, ar) => (
                                <AccordionItem
                                    className={`${index === ar.length - 1 && 'border-b-0'}`}
                                    key={faq.question}
                                    value={`item-${index}`}
                                >
                                    <AccordionTrigger className="text-justify gap-8">
                                        {index + 1}. {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-justify">
                                            {faq.answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Faq;
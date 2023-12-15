import SideDrawer from "./side-drawer"
import Image from "next/image";

const MapHeader = () => {
    return (
        <header className='flex justify-between items-center py-2 px-4 w-full absolute left-0 top-0 z-10'>
            <div className="shadow-overlay pointer-events-none absolute top-0 left-0 h-32 w-full"></div>
            <section className="cursor-pointer relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                    src='/logo.png'
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto rounded"
                    alt="UrbexPins logo"
                    priority
                />
            </section>
            <section className="relative flex items-center gap-4 justify-center">
                <SideDrawer />
            </section>
        </header>
    )
}

export default MapHeader;
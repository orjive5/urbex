import SideDrawer from "./side-drawer"
import AutocompletePlaces from "./autocomplete-places";
import Image from "next/image";

type PlacesProps = {
    setFindLocation: (position: google.maps.LatLngLiteral) => void;
}

const Header = ({ setFindLocation }: PlacesProps) => {

    return (
        <header className='shadow-overlay flex justify-between items-center pt-4 pb-12 px-4 w-full absolute left-0 top-0 z-10'>
            <section className="relative w-16 h-16 sm:w-24 sm:h-24">
                <Image
                    src='/logo.png'
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto rounded"
                    alt="UrbexPins logo"
                />
            </section>
            <section className="relative flex items-center gap-4 justify-center">
                <AutocompletePlaces setFindLocation={setFindLocation} />
                <SideDrawer />
            </section>
        </header>
    )
}

export default Header;
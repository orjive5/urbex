'use client'

import { useLoadScript } from "@react-google-maps/api";
import { Library } from '@googlemaps/js-api-loader';
import Map from "./map";

const placesLibrary: Library[] = ['places'];

const MapContainer = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        libraries: placesLibrary,
    })

    if (!isLoaded) return <div className="h-screen w-full bg-[#ddd]"></div>

    return <Map />
}

export default MapContainer;
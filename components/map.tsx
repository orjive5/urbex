'use client'

import { useMemo, useCallback, useRef, useEffect } from "react";
import {
    GoogleMap,
    MarkerClusterer,
    MarkerF
} from "@react-google-maps/api";
import Header from "./header";
import { useBoundStore } from "@/store";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const Map = () => {
    const store = useBoundStore();
    const mapRef = useRef<GoogleMap>()
    const center = useMemo<LatLngLiteral>(() => ({ lat: 50, lng: 15 }), []);
    const options = useMemo<MapOptions>(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        mapTypeId: 'hybrid',
        tilt: 45,
    }), []);
    const onLoad = useCallback((map: any) => (mapRef.current = map), []);
    const generateHouses = (position: LatLngLiteral) => {
        const _houses: Array<LatLngLiteral> = [];
        for (let i = 0; i < 100; i++) {
            const direction = Math.random() < 0.5 ? -2 : 2;
            _houses.push({
                lat: position.lat + Math.random() / direction,
                lng: position.lng + Math.random() / direction,
            });
        }
        return _houses;
    };
    const houses = useMemo(() => generateHouses(center), [center]);
    useEffect(() => {
        store.findLocation && mapRef.current?.panTo(store.findLocation);
    }, [store.findLocation]);

    return (
        <section className="w-full h-screen">
            <Header />
            <GoogleMap
                zoom={5}
                center={center}
                mapContainerClassName="h-full w-full"
                options={options}
                onLoad={onLoad}
            >
                {store.findLocation &&
                    <>
                        <MarkerF position={store.findLocation} />
                        <MarkerClusterer>
                            {(clusterer) =>
                                <>
                                    {houses.map((house) => (
                                        <MarkerF
                                            key={`${house.lat}${house.lng}`}
                                            position={house}
                                            clusterer={clusterer}
                                        />
                                    ))}
                                </>
                            }
                        </MarkerClusterer>
                    </>
                }
            </GoogleMap>
        </section>
    );
}

export default Map;
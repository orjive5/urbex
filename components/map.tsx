'use client'

import { useState, useMemo, useCallback, useRef } from "react";
import {
    GoogleMap,
    Marker,
    MarkerClusterer,
} from "@react-google-maps/api";
import Header from "./header";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const Map = () => {
    const [findLocation, setFindLocation] = useState<LatLngLiteral>()
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
    const houses = useMemo(() => generateHouses(center), [center])

    return (
        <section className="w-full h-screen">
            <Header
                setFindLocation={position => {
                    setFindLocation(position);
                    mapRef.current?.panTo(position);
                }}
            />
            <GoogleMap
                zoom={5}
                center={center}
                mapContainerClassName="h-full w-full"
                options={options}
                onLoad={onLoad}
            >
                {findLocation &&
                    <>
                        <Marker position={findLocation} />

                        <MarkerClusterer>
                            {(clusterer) =>
                                <>
                                    {houses.map((house) => (
                                        <Marker
                                            key={`${house.lat}${house.lng}`}
                                            position={house}
                                            clusterer={clusterer}
                                        />
                                    ))}
                                </>
                            }
                        </MarkerClusterer>
                        {/* 
                        {houses.map(house => (
                            <Marker
                                key={`${house.lat}${house.lng}`}
                                position={house}
                            />
                        ))} */}

                        {/* <Circle center={findLocation} radius={15000} options={closeOptions} />
                        <Circle center={findLocation} radius={30000} options={middleOptions} />
                        <Circle center={findLocation} radius={50000} options={farOptions} /> */}
                    </>

                }
            </GoogleMap>
        </section>
    );
}

export default Map;
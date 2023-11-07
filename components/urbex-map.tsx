'use client'

import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { useState } from 'react';
import UrbexMarker from './urbex-marker';

const UrbexMap = () => {
    const [pinInfo, setPinInfo] = useState<{ lat: number, lng: number } | null>(null);
    const position = { lat: 50, lng: 15 };

    const positions = [
        { lat: 52, lng: 16 },
        { lat: 53, lng: 17 },
        { lat: 45, lng: 12 }
    ];

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
            <div className="h-screen w-full bg-[#ddd]">
                <Map
                    zoom={5}
                    center={position}
                    mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
                    mapTypeId="hybrid"
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    tilt={45}
                >
                    {positions.map((p, i) => (
                        <div key={`${p.lat}${p.lng}${i}`}>
                            <UrbexMarker
                                position={p}
                                setPinInfo={setPinInfo}
                                pinInfo={pinInfo}
                            />
                        </div>
                    ))}
                </Map>
            </div>
        </APIProvider>
    );
};

export default UrbexMap;
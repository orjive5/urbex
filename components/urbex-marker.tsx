import { IUrbexMarker } from '@/types/urbexMarker.interface';
import { AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';

const UrbexMarker = ({ position, setPinInfo, pinInfo }: IUrbexMarker) => {
    const [markerRef, marker] = useAdvancedMarkerRef();

    return (
        <>
            <AdvancedMarker
                ref={markerRef}
                position={position}
                onClick={() => setPinInfo(position)}
            >
                <Pin
                    background={"#0c0a08"}
                    borderColor={"#FEC931"}
                    glyphColor={"#FEC931"}
                />
            </AdvancedMarker>
            {pinInfo?.lat === position.lat && pinInfo?.lng === position.lng && (
                <InfoWindow anchor={marker} onCloseClick={() => setPinInfo(null)}>
                    <p className='text-black'>
                        Copy coordinates: {position.lat}, {position.lng}
                    </p>
                </InfoWindow>
            )}
        </>
    );
};

export default UrbexMarker;
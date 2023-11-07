export interface IUrbexMarker {
    position: { lat: number; lng: number };
    setPinInfo: (info: { lat: number; lng: number } | null) => void;
    pinInfo: { lat: number; lng: number } | null;
}
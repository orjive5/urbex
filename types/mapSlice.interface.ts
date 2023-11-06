type LatLngLiteral = google.maps.LatLngLiteral;

export interface IMapSlice {
    findLocation: LatLngLiteral | null;
    setFindLocation(l: LatLngLiteral): void;
}
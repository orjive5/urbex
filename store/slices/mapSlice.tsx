import { IMapSlice } from "@/types/mapSlice.interface";
import { StateCreator } from "zustand";

type LatLngLiteral = google.maps.LatLngLiteral;

export const mapSlice: StateCreator<IMapSlice> = (set) => ({
    findLocation: null,
    setFindLocation: (state: LatLngLiteral) =>
        set(() => ({ findLocation: state })),
});
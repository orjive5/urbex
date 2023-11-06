import { IMapSlice } from "@/types/mapSlice.interface";
import { StateCreator } from "zustand";

export const mapSlice: StateCreator<IMapSlice> = (set) => ({
    findLocation: undefined,
    setFindLocation: (state: string) =>
        set(() => ({ findLocation: state })),
});
import { IInfoSlice } from "@/types/infoSlice.interface";
import { StateCreator } from "zustand";

export const infoSlice: StateCreator<IInfoSlice> = (set) => ({
    info: undefined,
    setInfo: (state: string) =>
        set(() => ({ info: state })),
});
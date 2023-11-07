import { IInfoSlice } from '@/types/infoSlice.interface';
import { IMapSlice } from '@/types/mapSlice.interface';
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { mapSlice } from './slices/mapSlice';
import { infoSlice } from './slices/infoSlice';

export const useBoundStore = create<IMapSlice & IInfoSlice>()(
    devtools(
        persist(
            (...a) => ({
                ...mapSlice(...a),
                ...infoSlice(...a),
            }),
            {
                name: 'urbex-pins-store'
            }
        )
    )
);
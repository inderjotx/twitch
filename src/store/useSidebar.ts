import { create } from 'zustand'


interface SideBarProps {
    isWrapped: boolean,
    toggleWrap: () => void
}


export const useSidebar = create<SideBarProps>((set, get) => ({
    isWrapped: false,
    toggleWrap: () => set({ isWrapped: !get().isWrapped })
}))
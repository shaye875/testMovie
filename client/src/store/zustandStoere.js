import { create } from 'zustand'


export const useMovStore = create((set) => ({
    movies: [],
    error:"",
    searchQuery:[],
    isLoading: async () => {
        try {
            const response = await fetch("http://localhost:3000/api/movies")
            const data = await response.json()
            set({ movies: data })
        } catch (err) {
            set({error:err})
        }

    },
       setSelect: async () => {
        try {
            const response = await fetch("http://localhost:3000/api/purchases")
            const data = await response.json()
            set({ searchQuery: data })
        } catch (err) {
            set({error:err})
        }

    },
}))
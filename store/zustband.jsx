/*import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: 0,
  add: (value) => set((state) => ({ cart: state.cart + 1 + value })),
  remove: () => set((state) => ({ cart: state.cart - 1 })),
  removeAll: () => set({ cart: 0 }),
}));*/

import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: 0,
  add: async () => {
    // Realizar el fetch o cualquier operación asíncrona
    //const response = await fetch("tu_url");
    //const data = await response.json();

    // Actualizar el estado después de completar la operación asíncrona
    set((state) => ({
      cart: state.cart + 1,
    }));
  },
  remove: () => set((state) => ({ cart: state.cart - 1 })),
  removeAll: () => set({ cart: 0 }),
}));

export const useCharactersStore = create((set, get) => ({
  characters: null,
  setCharacters: (value) => set({ characters: value }),
}));

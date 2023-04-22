import { create } from "zustand";

interface State {
  hexagonSize: number
}

interface Action {
  changeHexagonSize: (newSize: number) => void
}

export const useGameVariables = create<State & Action>((set) => ({
  hexagonSize: 120,
  changeHexagonSize: (newSize) => set(state => ({ ...state, hexagonSize: newSize }))
}));
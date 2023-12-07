import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "valores",
  initialState: {
    valor1: 0,
    valor2: 0,
    resultado: 0,
  },
  reducers: {
    setValor1: (state, action) => {
      state.valor1 = action.payload;
    },
    setValor2: (state, action) => {
      state.valor2 = action.payload;
    },
    setResultado: (state, action) => {
      state.resultado = action.payload;
    },
  },
});

export const { setValor1, setValor2, setResultado } = Slice.actions;

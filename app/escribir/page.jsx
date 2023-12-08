"use client";
import { setValor1 } from "components/store/slice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const [nuevoValor, setNuevoValor] = useState("");

  const dispatch = useDispatch();

  const modificarValor = () => {
    //dispatch(setValor1(nuevoValor));
  };

  return (
    <main>
      <h1>Escribir</h1>
      <div>
        <Link href="/leer">Leer</Link>
      </div>
      <div className="flex flex-col">
        <input
          value={nuevoValor}
          onChange={(e) => setNuevoValor(e.target.value)}
          className="my-4 border border-gray-400 rounded-md p-2"
        />
        <button onClick={modificarValor}>Modificar el valor</button>
      </div>
    </main>
  );
};

export default Page;

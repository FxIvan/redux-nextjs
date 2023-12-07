"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Page = () => {
  const valor1 = useSelector((state) => state.valores.valor1);

  return (
    <main>
      <h1>Leer</h1>
      <Link href="/escribir">Escribir</Link>
      <h2>{valor1}</h2>
    </main>
  );
};

export default Page;

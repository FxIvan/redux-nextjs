"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCartStore, useCharactersStore } from "components/store/zustband";
import Link from "next/link";

export default function CartButton() {
  const { cart } = useCartStore();
  const characters = useCharactersStore((state) => state.characters);

  return (
    <Link
      href="/cart"
      className="p-2 rounded-md hover:bg-slate-900 text-slate-700 hover:text-slate-300 relative transition duration-200 ease-in-out"
    >
      <ShoppingCartIcon className="w-6 h-6" strokeWidth={2} />
      <Label item={cart} />
      <h1>
        -----------------------------------------HEADER---------------------------------------------------
      </h1>
      {characters &&
        characters.results.length > 0 &&
        characters.results.map((character) => {
          return (
            <div
              className="flex flex-col items-center justify-center"
              key={character.id}
            >
              <img
                className="w-1/2"
                src={character.image}
                alt={character.name}
              />
              <h2 className="text-2xl font-bold">{character.name}</h2>
            </div>
          );
        })}
      <h1>
        -----------------------------------------HEADER---------------------------------------------------
      </h1>
    </Link>
  );
}

const Label = ({ item }) => {
  if (item === 0) return null;
  return (
    <span className="absolute top-0 right-0 w-4 h-4 bg-red-400 text-white font-semibold text-xs rounded-full grid place-content-center">
      {item}
    </span>
  );
};

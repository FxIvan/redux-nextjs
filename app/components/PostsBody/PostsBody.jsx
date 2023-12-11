"use client";
import { useCharactersStore } from "components/store/zustband";

export default function PostsBody() {
  const characters = useCharactersStore((state) => state.characters);
  return (
    <main>
      <div className="mx-8 m-auto">
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
      </div>
    </main>
  );
}

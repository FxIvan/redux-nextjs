"use client";

import useFetch from "components/hooks/useFetch";
import { useCharactersStore } from "components/store/zustband";
import { useEffect } from "react";

export default function PostsFetch() {
  const data = useFetch("https://rickandmortyapi.com/api/character");
  const { setCharacters } = useCharactersStore();
  useEffect(() => {
    if (data) {
      setCharacters(data);
    }
  }, [data]);

  return (
    <main>
      <div>
        <h1>Este es un Fetch</h1>
      </div>
    </main>
  );
}

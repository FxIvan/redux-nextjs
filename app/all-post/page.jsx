"use client";

import { useCharactersStore } from "../../store/zustband";

const Page = () => {
  const characters = useCharactersStore((state) => state.characters);
  console.log("Post --->", characters);
  return (
    <main>
      <h1>Posts</h1>
    </main>
  );
};

export default Page;

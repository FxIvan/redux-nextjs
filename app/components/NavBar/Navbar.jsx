import Link from "next/link";
import CartButton from "../CartButton/CartButton.jsx";
import LinkMenu from "../Link/Menu.jsx";

export default function Navbar() {
  return (
    <nav>
      <div className="mx-auto max-w-6xl flex justify-between items-center text-sm text-slate-100 py-4">
        <nav>
          <div className="uppercase font-bold">
            <Link href="/" className="text-teal-500">
              LearnThing
            </Link>
          </div>
          <div className="flex gap-2">
            <LinkMenu href="/product" label="Product" isNew />
          </div>
        </nav>
        <div className="flex gap-1 items-center">
          <CartButton />
        </div>
      </div>
    </nav>
  );
}

import Link from "next/link";
export default function LinkMenu({ href, label, isNew }) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-700 px-2 py-1 rounded-md
    hover:bg-slate-900 hover:text-slate-500 
    transition duration-200 ease-in-out"
    >
      <span className="relative">
        {label}
        {isNew && <NewItem />}
      </span>
    </Link>
  );
}

const NewItem = () => (
  <span className="absolute bg-orange-400 w-2 h-2 rounded-full"></span>
);

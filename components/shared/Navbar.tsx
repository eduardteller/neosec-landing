import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container relative z-10 mx-auto flex items-center justify-between px-4 py-6">
      <div>
        <Link
          href={"/"}
          className="text-xl font-bold uppercase tracking-tight text-zinc-400 duration-300 hover:text-zinc-100 md:text-3xl"
        >
          <span>NEO</span>
          <span className="text-zinc-500">SEC</span>
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <div className="text-lg font-medium text-zinc-400 max-sm:hidden">
          <Link
            className="tracking-tight duration-300 hover:text-zinc-100"
            href={"/"}
          >
            ENG
          </Link>
          <span> | </span>
          <Link className="text-zinc-100" href={"/"}>
            EST
          </Link>
        </div>
        <Link
          href="/contact"
          className="rounded-md border border-zinc-300 bg-transparent px-8 py-4 text-xs font-bold uppercase text-zinc-300 duration-300 hover:bg-zinc-300 hover:text-zinc-950 md:text-sm"
        >
          KONTAKT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

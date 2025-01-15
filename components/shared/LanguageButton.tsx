import Link from "next/link";

const LanguageButton = () => {
  return (
    <div className="text-lg font-medium text-zinc-100/60">
      <Link href={"/en"}>ENG</Link>
      <span> | </span>
      <Link href={"/"}>EST</Link>
    </div>
  );
};

export default LanguageButton;

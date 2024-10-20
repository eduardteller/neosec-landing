import Link from "next/link";

const LanguageButton = () => {
  return (
    <div className="text-lg font-medium text-white/60">
      <Link href={"/en"}>ENG</Link>
      <span> | </span>
      <Link href={"/"}>EST</Link>
    </div>
  );
};

export default LanguageButton;

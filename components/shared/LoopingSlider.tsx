import {
  Bitcoin,
  BookLock,
  EarthLock,
  EyeOff,
  FileLock2,
  Fingerprint,
  Radar,
  Shield,
} from "lucide-react";

const LoopingSlider = () => {
  // const newSize = size || 96;
  const color = "text-zinc-400 lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16";
  const baseCSS = "lg:w-[248px] md:w-[196px] w-[128px]";
  const icons = [
    <Bitcoin key="1" className={color} />,
    <EarthLock key="2" className={color} />,
    <Fingerprint key="3" className={color} />,
    <FileLock2 key="4" className={color} />,
    <Shield key="5" className={color} />,
    <BookLock key="6" className={color} />,
    <EyeOff key="7" className={color} />,
    <Radar key="8" className={color} />,
  ];

  return (
    <div className="w- relative w-[calc(100vw-17px)] py-8">
      <div className="relative h-fit overflow-hidden">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent_100%)]">
          <ul className="animate-scrolls flex h-full w-[calc(128px*24)] items-center md:w-[calc(196px*24)] md:animate-scrollm lg:w-[calc(248px*24)] lg:animate-scroll">
            {icons.map((icon, i) => (
              <li key={`first-${i}`} className={baseCSS}>
                {icon}
              </li>
            ))}
            {icons.map((icon, i) => (
              <li key={`second-${i}`} className={baseCSS}>
                {icon}
              </li>
            ))}
            {icons.map((icon, i) => (
              <li key={`third-${i}`} className={baseCSS}>
                {icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoopingSlider;

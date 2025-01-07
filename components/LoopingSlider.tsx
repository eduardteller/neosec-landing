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
  const size = 96;
  const icons = [
    <Bitcoin key="1" className="text-white/70" size={size} />,
    <EarthLock key="2" className="text-white/70" size={size} />,
    <Fingerprint key="3" className="text-white/70" size={size} />,
    <FileLock2 key="4" className="text-white/70" size={size} />,
    <Shield key="5" className="text-white/70" size={size} />,
    <BookLock key="6" className="text-white/70" size={size} />,
    <EyeOff key="7" className="text-white/70" size={size} />,
    <Radar key="8" className="text-white/70" size={size} />,
  ];

  return (
    <div className="w-[calc(100vw-17px)]">
      <div className="relative h-[200px] overflow-hidden">
        <ul className="animate-scroll flex h-full w-[calc(248px*24)] items-center">
          {icons.map((icon, i) => (
            <li key={`first-${i}`} className="w-[248px]">
              {icon}
            </li>
          ))}
          {icons.map((icon, i) => (
            <li key={`second-${i}`} className="w-[248px]">
              {icon}
            </li>
          ))}
          {icons.map((icon, i) => (
            <li key={`third-${i}`} className="w-[248px]">
              {icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoopingSlider;

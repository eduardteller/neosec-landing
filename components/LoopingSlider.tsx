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

interface Props {
  size?: number;
}

const LoopingSlider = ({ size }: Props) => {
  const newSize = size || 96;
  const icons = [
    <Bitcoin key="1" className="text-white/70" size={newSize} />,
    <EarthLock key="2" className="text-white/70" size={newSize} />,
    <Fingerprint key="3" className="text-white/70" size={newSize} />,
    <FileLock2 key="4" className="text-white/70" size={newSize} />,
    <Shield key="5" className="text-white/70" size={newSize} />,
    <BookLock key="6" className="text-white/70" size={newSize} />,
    <EyeOff key="7" className="text-white/70" size={newSize} />,
    <Radar key="8" className="text-white/70" size={newSize} />,
  ];

  return (
    <div className="w-[calc(100vw-17px)] py-8 pt-8">
      <div className="relative h-fit overflow-hidden">
        <ul className="flex h-full w-[calc(248px*24)] animate-scroll items-center">
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

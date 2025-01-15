"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Item {
  firstText: string;
  secondText: string;
}

interface Props {
  items: Item[];
}

const Accordion = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = useState<boolean[]>(
    new Array(items.length).fill(false),
  );

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, items.length);
  }, [items.length]);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) =>
      prev.map((item, i) => (i === index ? !item : false)),
    );
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          key={index + item.firstText.length + item.secondText.length}
          className={`w-full ${activeIndex[index] ? "text-sky-600" : "text-zinc-400"} `}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex w-full items-center justify-between px-4 py-4 text-left font-semibold md:py-3"
          >
            <span>{item.firstText}</span>
            <span className="transition-transform duration-300">
              {activeIndex[index] ? (
                <ChevronUp strokeWidth={2.5} />
              ) : (
                <ChevronDown strokeWidth={2.5} />
              )}
            </span>
          </button>
          <div
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            style={{
              maxHeight: activeIndex[index]
                ? contentRefs.current[index]?.scrollHeight
                : 0,
            }}
            className="transition-max-height prose prose-base max-w-none overflow-hidden leading-loose duration-300 ease-in-out"
          >
            <div className="px-8 text-zinc-400">{item.secondText}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;

"use client";
import { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import useIsMounted from "~/hooks/use-is-mounted";

import hslRgb from "hsl-rgb";

interface Props extends HTMLAttributes<HTMLDivElement> {
  address: string;
  className?: string;
}

const Gradient: FC<Props> = ({ address, className, ...props }) => {
  const r1 = parseInt(address.slice(0, 2), 16);
  const g1 = parseInt(address.slice(2, 4), 16);
  const b1 = parseInt(address.slice(4, 6), 16);
  const r2 = parseInt(address.slice(6, 8), 16);
  const g2 = parseInt(address.slice(8, 10), 16);
  const b2 = parseInt(address.slice(10, 12), 16);

  const color1 = hslRgb(r1, g1, b1);
  const color2 = hslRgb(r2, g2, b2);
  const color1str = `rgb(${color1[0]}, ${color1[1]}, ${color1[2]})`;
  const color2str = `rgb(${color2[0]}, ${color2[1]}, ${color2[2]})`;

  const ref = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const isMounted = useIsMounted();

  useEffect(() => {
    if (ref.current && isMounted()) {
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    }
  }, [isMounted]);

  return (
    <div {...props}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={className}
              ref={ref}
            >
              <defs>
                <linearGradient
                  x1="10%"
                  y1="20%"
                  x2="100%"
                  y2="100%"
                  id={address.toString()}
                >
                  <stop stopColor={color1str} offset="0%"></stop>
                  <stop stopColor={color2str} offset="100%"></stop>
                </linearGradient>
              </defs>
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect
                  id="Rectangle"
                  fill={`url(#${address})`}
                  x="0"
                  y="0"
                  width={width}
                  height={height}
                ></rect>
              </g>
            </svg>
          </TooltipTrigger>
          <TooltipContent>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {address}
            </code>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Gradient;

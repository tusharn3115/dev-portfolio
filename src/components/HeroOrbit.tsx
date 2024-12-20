import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = false,
  spinDuration,
  orbitDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string;
  spinDuration?: string;
  shouldOrbit?: Boolean;
  shouldSpin?: Boolean;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(shouldOrbit == true && "animate-spin")}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div className={twMerge(shouldSpin == true && "animate-spin")} style={{ animationDuration: spinDuration }}>
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;

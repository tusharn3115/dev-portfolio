import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-sky-300 to-cyan-400  -rotate-3 -mx-1">
        <div className="flex mask-tape">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left" 
          style={{animationDuration: "30s"}}>
            {[...new Array(2)].fill(0).map((_, index) => (
              <div key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-start">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

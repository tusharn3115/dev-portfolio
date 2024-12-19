import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const AboutCardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-9", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-sky-300" />
        <h3 className="heading text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
};

export default AboutCardHeader;

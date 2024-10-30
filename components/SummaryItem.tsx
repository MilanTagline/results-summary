import { SummaryItem as SummaryItemType } from "@/types/summary";
import clsx from "clsx";
import Image from "next/image";

const SummaryItem = ({
  category,
  score,
  icon,
  backgroundColorClassName,
  textColorClassName,
}: SummaryItemType) => {
  return (
    <div
      className={clsx(
        "flex items-center py-3.5 px-5 mb-6 bg-opacity-5 rounded-lg hover:scale-110 transition-all",
        backgroundColorClassName
      )}
    >
      <Image
        src={icon}
        alt={category}
        height={20}
        width={20}
        className="mr-2.5"
      />
      <h3 className={clsx(textColorClassName, "sm:text-lg text-base")}>
        {category}
      </h3>
      <p className="ms-auto font-bold">
        {score} <span className="text-light-gray">/ 100</span>
      </p>
    </div>
  );
};

export default SummaryItem;

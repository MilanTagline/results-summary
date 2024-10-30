import { SummaryItem as SummaryItemType } from "@/types/summary";
import Image from "next/image";

const SummaryItem = ({ category, score, icon }: SummaryItemType) => {
  return (
    <div>
      <Image src={icon} alt={category} height={20} width={20} />
      <h3>{category}</h3>
      <p>{score}/100</p>
    </div>
  );
};

export default SummaryItem;

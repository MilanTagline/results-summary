import SummaryItem from "@/components/SummaryItem";
import resultSummary from "@/data.json";
import Button from "@/shared/Button";
import { SummaryItem as SummaryItemType } from "@/types/summary";

const ResultSummary = () => {
  return (
    <div className="sm:w-1/2 sm:px-10 p-8 sm:py-9">
      <h4 className="text-2xl text-dark-gray-blue font-bold mb-7">Summary</h4>
      {(resultSummary as SummaryItemType[]).map((item) => (
        <SummaryItem key={item.category} {...item} />
      ))}
      <Button className="w-full sm:mt-4">Continue</Button>
    </div>
  );
};

export default ResultSummary;

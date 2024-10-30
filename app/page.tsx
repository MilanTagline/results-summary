import SummaryItem from "@/components/SummaryItem";
import resultSummary from "@/data.json";
import Button from "@/shared/Button";
import { SummaryItem as SummaryItemType } from "@/types/summary";

export default function Home() {
  const totalScoreSum = resultSummary.reduce(
    (accumulatedScore, item) => accumulatedScore + item.score,
    0
  );
  const numberOfCategories = resultSummary.length;
  const averageScore = Math.round(totalScoreSum / numberOfCategories);

  return (
    <main>
      <div className="h-screen sm:flex items-center justify-center sm:px-3">
        <div className="max-w-[735px] w-full mx-auto sm:flex sm:rounded-2xl shadow-custom-light overflow-hidden">
          <div className="sm:w-1/2 text-center bg-gradient-to-b from-light-slate-blue to-light-royal-blue sm:px-10 sm:pt-10 sm:pb-14 p-10 sm:rounded-2xl rounded-b-2xl">
            <h4 className="text-2xl font-bold text-light-lavender">
              Your Result
            </h4>
            <div className="sm:w-[200px] sm:h-[200px] w-[140px] h-[140px] rounded-full mx-auto sm:my-10 my-7 flex flex-col justify-center  bg-gradient-to-b from-violet-blue to-persian-blue">
              <h4 className="sm:text-[72px] text-[56px] font-bold leading-none text-white mb-2">
                {averageScore}
              </h4>
              <span className="text-dark-lavender font-bold sm:text-lg text-base">
                of 100
              </span>
            </div>
            <div className="sm:max-w-[250px] max-w-[280px] mx-auto">
              <h6 className="sm:text-[32px] text-2xl font-bold sm:mb-6 mb-3 text-white">
                Great
              </h6>
              <p className="text-light-lavender sm:text-lg text-base">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>

          <div className="sm:w-1/2 sm:px-10 p-8 sm:py-9">
            <h4 className="text-2xl text-dark-gray-blue font-bold mb-7">
              Summary
            </h4>
            {(resultSummary as SummaryItemType[]).map((item) => (
              <SummaryItem key={item.category} {...item} />
            ))}
            <Button className="w-full">Continue</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

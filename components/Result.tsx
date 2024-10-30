import React from "react";
import resultSummary from "@/data.json";

const Result = () => {
  const totalScoreSum = resultSummary.reduce(
    (accumulatedScore, item) => accumulatedScore + item.score,
    0
  );
  const numberOfCategories = resultSummary.length;
  const averageScore = Math.round(totalScoreSum / numberOfCategories);

  return (
    <div className="sm:w-1/2 group text-center bg-gradient-to-b from-light-slate-blue to-light-royal-blue sm:px-10 sm:pt-10 sm:pb-14 p-10 sm:rounded-[32px] rounded-b-[32px]">
      <h4 className="text-2xl font-bold text-light-lavender">Your Result</h4>
      <div className="sm:w-[200px] sm:h-[200px] w-[140px] h-[140px] rounded-full mx-auto sm:my-10 my-7 flex flex-col justify-center  bg-gradient-to-b from-violet-blue to-persian-blue group-hover:scale-105 transition-all group-hover:from-light-violet-blue group-hover:to-light-royal-blue">
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
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Result;

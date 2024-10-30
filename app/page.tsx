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
      <div>
        {/* Your Result */}
        <div>
          <h2>Your Result</h2>
          <div>
            <span>{averageScore}</span>
            <span>of 100</span>
          </div>
          <span>Great</span>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        {/* Summary */}
        <div>
          <h2>Summary</h2>
          {(resultSummary as SummaryItemType[]).map((item) => (
            <SummaryItem key={item.category} {...item} />
          ))}
          <Button>Continue</Button>
        </div>
      </div>
    </main>
  );
}

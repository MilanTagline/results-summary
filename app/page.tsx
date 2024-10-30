import Result from "@/components/Result";
import ResultSummary from "@/components/ResultSummary";

export default function Home() {
  return (
    <main>
      <div className="h-screen sm:flex items-center justify-center sm:px-3">
        <div className="max-w-[735px] w-full mx-auto sm:flex sm:rounded-[32px] shadow-custom-light overflow-hidden">
          <Result />
          <ResultSummary />
        </div>
      </div>
    </main>
  );
}

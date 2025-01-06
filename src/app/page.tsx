"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DrawForm } from "@/components/DrawForm";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { generateUniqueRandomNumbers } from "@/utils/random";
import { DrawFormData } from "@/types/types";

export default function Home() {
  const [results, setResults] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (data: DrawFormData) => {
    try {
      const newResults = generateUniqueRandomNumbers(
        data.quantity,
        data.from,
        data.to
      );
      setResults(newResults);
      setCount(prev => prev + 1);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const handleReset = () => {
    setResults([]);
    setCount(0);
  };

  return (
    <div
      className="flex w-full bg-center bg-repeat-y"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-black/90 to-black/50 px-5 pt-20">
        <DrawForm onSubmit={handleSubmit} hasResults={results.length > 0} />
        <ResultsDisplay
          results={results}
          round={count}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}
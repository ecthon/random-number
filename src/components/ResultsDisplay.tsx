import { Trash } from "@phosphor-icons/react";
import NumberTicker from "./ui/number-ticker";

interface ResultsDisplayProps {
  results: number[];
  round: number;
  onReset: () => void;
}

export function ResultsDisplay({ results, round, onReset }: ResultsDisplayProps) {
  if (results.length === 0) return null;

  return (
    <div className="flex flex-col w-[500px] max-sm:w-full my-10 gap-8 items-center max-sm:px-5">
      <h2 className="text-white">Resultado do sorteio</h2>
      <div className="flex items-center justify-between w-full gap-4">
        <p className="text-zinc-300">{round}ª Rodada</p>
        <Trash
          className="size-6 text-zinc-500 hover:text-zinc-300 cursor-pointer"
          onClick={onReset}
        />
      </div>
      <div className="flex w-full gap-4 flex-wrap">
        {results.map((result, index) => (
          <p
            key={index}
            className="flex items-center bg-zinc-800/70 backdrop-blur-10 rounded-lg justify-center font-bold w-full text-4xl h-[56px]"
          >
            <NumberTicker className="text-[#C58DE7]" value={result} />
          </p>
        ))}
      </div>
    </div>
  );
}

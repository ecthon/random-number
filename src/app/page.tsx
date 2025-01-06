"use client";
import NumberTicker from "@/components/ui/number-ticker";
import { ArrowClockwise, ArrowRight, Trash } from "@phosphor-icons/react";
import { useState, useCallback } from "react";

export default function Home() {
  const [results, setResults] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const quantity = Number(form.quantity.value);
    const from = Number(form.from.value);
    const to = Number(form.to.value);
    setCount((prevCount) => prevCount + 1);

    const newResults = new Set<number>();
    while (newResults.size < quantity) {
      const randomNumber = Math.floor(Math.random() * (to - from + 1)) + from;
      newResults.add(randomNumber);
    }
    setResults(Array.from(newResults));
  }, []);

  const handleReset = useCallback(() => {
    setResults([]);
    setCount(0);
  }, []);

  return (
    <div
      className="flex w-full max-sm:w-full bg-center bg-repeat-y"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <div className="flex flex-col items-center max-sm:w-full w-full min-h-screen bg-gradient-to-b from-black/90 to-black/50 ms:px-5 pt-40">
        <form
          className="flex w-[500px] max-sm:w-full flex-col gap-8 items-center max-sm:px-5"
          onSubmit={handleSubmit}
        >
          <h1 className="text-5xl font-bold leading-tight mb-5 text-white">
            Sorteador de números.
          </h1>
          <div className="flex gap-4 ">
            <div className="flex flex-col items-center gap-2 justify-center rounded-lg w-full">
              <p className="font-bold uppercase text-zinc-500">Número(s)</p>
              <input
                className="flex text-center text-white font-bold ring-0 focus:ring-0 focus:outline-none text-4xl max-sm:text-3xl items-center justify-center w-full h-[56px] rounded-lg border-none bg-[#111012]"
                type="number"
                name="quantity"
                id="quantity"
                min={1}
                defaultValue={1}
              />
            </div>
            <div className="flex flex-col items-center gap-2 justify-center rounded-lg">
              <p className="font-bold uppercase text-zinc-500">De</p>
              <input
                className="flex text-center text-white font-bold ring-0 focus:ring-0 focus:outline-none text-4xl max-sm:text-3xl items-center justify-center w-full h-[56px] rounded-lg border-none bg-[#111012]"
                type="number"
                name="from"
                id="from"
                defaultValue={1}
                min={1}
              />
            </div>
            <div className="flex flex-col items-center gap-2 justify-center rounded-lg">
              <p className="font-bold uppercase text-zinc-500">Até</p>
              <input
                className="flex text-center text-white font-bold ring-0 focus:ring-0 focus:outline-none text-4xl max-sm:text-3xl items-center justify-center w-full h-[56px] rounded-lg border-none bg-[#111012]"
                type="number"
                name="to"
                id="to"
                defaultValue={100}
                max={9000}
              />
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 uppercase text-[#C58DE7] hover:text-[#aa79c9] h-[56px] rounded-lg bg-[#24222E]"
          >
            {results.length === 0 ? "Sortear" : "Sortear novamente"}
            {results.length === 0 ? (
              <ArrowRight className="w-6 h-6 ml-2" />
            ) : (
              <ArrowClockwise className="w-6 h-6 ml-2" />
            )}
          </button>
        </form>
        {results.length > 0 && (
          <div className="flex flex-col w-[500px] max-sm:w-full my-10 gap-8 items-center max-sm:px-5">
            <h1 className="text-white">Resultado do sorteio</h1>
            <div className="flex items-center justify-between w-full gap-4">
              <p className="text-zinc-300">{count}ª Rodada</p>
              <Trash
                className="size-6 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                onClick={handleReset}
              />
            </div>
            <div className="flex w-full gap-4 flex-wrap">
              {results.map((result, index) => (
                <p
                  key={index}
                  className="flex items-center bg-zinc-800/70 backdrop-blur-10 rounded-lg justify-center font-bold w-full max-sm:w-full text-4xl h-[56px]"
                >
                  <NumberTicker className="text-[#C58DE7]" value={result} />
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

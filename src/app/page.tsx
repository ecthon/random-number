"use client";
import { useState } from "react";

export default function Home() {
  const [results, setResults] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const quantity = Number(form.quantity.value);
    const from = Number(form.from.value);
    const to = Number(form.to.value);
    setCount(count + 1);

    const newResults = new Set<number>();
    while (newResults.size < quantity) {
      const randomNumber = Math.floor(Math.random() * (to - from + 1)) + from;
      newResults.add(randomNumber);
    }
    setResults(Array.from(newResults));
  };

  return (
    <div
      className="flex w-full max-sm:w-full bg-center bg-repeat-y bg-gradient-to-b from-black/90 to-black/50"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <div className="flex flex-col items-center justify-center max-sm:w-full w-full min-h-screen ms:px-5 pt-40">
          <form
            className="flex w-[500px] max-sm:w-full flex-col gap-8 items-center max-sm:px-5"
            onSubmit={handleSubmit}
          >
            <h1 className="text-5xl font-bold leading-tight mb-5">Sorteador de números.</h1>
            <div className="flex gap-4 ">
              <div className="flex flex-col items-center gap-2 justify-center rounded-lg">
                <p className="font-bold uppercase text-zinc-300">Número(s)</p>
                <input
                  className="flex text-center font-bold ring-0 focus:ring-0 focus:outline-none text-4xl max-sm:text-3xl items-center  justify-center w-full h-[56px] rounded-lg border-none bg-[#111012]"
                  type="number"
                  name="quantity"
                  id="quantity"
                  min={1}
                  defaultValue={1}
                />
              </div>
              <div className="flex flex-col items-center gap-2 justify-center rounded-lg">
                <p className="font-bold uppercase text-zinc-300">De</p>
                <input
                  className="flex text-center font-bold ring-0 focus:ring-0 focus:outline-none text-4xl max-sm:text-3xl items-center justify-center w-full h-[56px] rounded-lg border-none bg-[#111012]"
                  type="number"
                  name="from"
                  id="from"
                  defaultValue={0}
                />
              </div>
              <div className="flex flex-col items-center gap-2 justify-center rounded-lg">
                <p className="font-bold uppercase text-zinc-300">Até</p>
                <input
                  className="flex text-center font-bold ring-0 focus:ring-0 focus:outline-none text-4xl max-sm:text-3xl items-center justify-center w-full h-[56px] rounded-lg border-none bg-[#111012]"
                  type="number"
                  name="to"
                  id="to"
                  defaultValue={100}
                />
              </div>
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center uppercase h-[56px] rounded-lg bg-[#24222E]"
            >
              Sortear
            </button>
          </form>
          <div className="flex flex-col w-[500px] max-sm:w-full my-10 gap-8 items-center max-sm:px-5">
            <h1>Resultado do sorteio</h1>
            <p className="text-zinc-300">{count}ª Rodada</p>
            <div className="flex w-full gap-4 flex-wrap">
              {results.map((result, index) => (
                <p
                  key={index}
                  className="flex items-center bg-zinc-800/40 backdrop-blur-10 rounded-lg justify-center w-full font-bold max-w-[156px] max-sm:max-w-[113px] text-[#C58DE7] text-4xl h-[56px]"
                >
                  {result}
                </p>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}

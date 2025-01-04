import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-center bg-repeat" style={{ backgroundImage: "url('/bg.svg')" }}>
      <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-black/90 to-black/50">
      <form className="flex flex-col gap-8 items-center">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-2 justify-center bg-black/90 rounded-lg">
            <p className="font-bold uppercase text-zinc-300">Números</p>
            <input className="flex text-center font-bold ring-0 focus:ring-0 border-none focus:outline-none text-4xl items-center  justify-center w-[100px] h-[56px] rounded-lg bg-[#111012]" type="number" name="qtd" id="qtd" />
          </div>
          <div className="flex flex-col items-center gap-2 justify-center bg-black/90 rounded-lg">
            <p className="font-bold uppercase text-zinc-300">De</p>
            <input className="flex text-center font-bold ring-0 focus:ring-0 border-none focus:outline-none text-4xl items-center justify-center w-[100px] h-[56px] rounded-lg bg-[#111012]" type="number" name="qtd" id="qtd" />
          </div>
          <div className="flex flex-col items-center gap-2 justify-center bg-black/90 rounded-lg">
            <p className="font-bold uppercase text-zinc-300">Até</p>
            <input className="flex text-center font-bold ring-0 focus:ring-0 border-none focus:outline-none text-4xl items-center justify-center w-[100px] h-[56px] rounded-lg bg-[#111012]" type="number" name="qtd" id="qtd" />
          </div>
        </div>
        <button className="flex w-full items-center justify-center uppercase h-[56px] rounded-lg bg-[#24222E]">Sortear </button>
      </form>
      <div className="flex flex-col gap-8 items-center">
        <h1>Resultado do sorteio</h1>
        <p>1º Resultado</p>
        <div className="flex gap-4">
          <p className="flex items-center justify-center w-[100px] font-bold text-[#C58DE7] text-4xl h-[56px]">1</p>
          <p className="flex items-center justify-center w-[100px] font-bold text-[#C58DE7] text-4xl h-[56px]">3</p>
        </div>
          <button className="flex w-[332px] items-center justify-center uppercase h-[56px] rounded-lg bg-[#24222E]">Sortear novamente</button>
      </div>
      </div>
    </div>
  );
}

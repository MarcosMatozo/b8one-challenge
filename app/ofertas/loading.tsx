import "../output.css";

export default function Loading() {
  return (
    <main className="flex w-full h-screen justify-center items-center max-w-400 m-auto">
      <p className="animate-pulse">Carregando ofertas... <span className='pr-4'></span></p>
      <span className="loading loading-spinner loading-xl"></span>
    </main>
  )
}

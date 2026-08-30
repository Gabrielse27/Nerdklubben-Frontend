// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div
      className="relative flex  w-full flex-col items-start justify-start xl:justify-between  px-4
       sm:px-16 pt-8 md:pt-12 pb-40 md:pb-56 lg:pb-[650px] xl:pb-16 xl:overflow-hidden
        overflow-x-clip bg-no-repeat bg-top text-slate-100 select-none mb-48"
      style={{
        backgroundImage: "url('/background-hero.jpg')",
        backgroundSize: "450px auto",
        backgroundColor: "#000000",
      }}
    >
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none"></div>

      {/* TOP SECTION */}
      <div className="w-full">
        <h2 className="text-left text-xl ml-2 font-black tracking-tight text-sky-900/90 sm:text-4xl md:text-6xl mb-4 md:mb-6">
          Nerdklubben
        </h2>

        <div className="mb-6 flex flex-col ml-3 items-start md:items-center gap-3 md:flex-row md:gap-4">
          <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">
            DECEMBER 2026
          </span>
          <div className="flex gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-900/50 px-3 py-1 text-xs font-semibold tracking-wider text-slate-300 uppercase">
              Techforum
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/50 px-3 py-1 text-xs font-semibold tracking-wider text-slate-300">
              2026
            </span>
          </div>
        </div>
      </div>

      {/* <TITTEL + BESKRIVNING */}
      <div className="z-10 ml-0 max-w-2xl text-left px-2 md:px-4">
        <h2 className="text-2xl font-bold tracking-wide text-slate-200 sm:text-4xl uppercase mb-6 leading-tight">
          Ett <br /> strategiskt <br /> forum för <br /> framtidens <br />{" "}
          techledare
        </h2>
        <p className="text-left text-base md:text-lg text-gray-300 leading-relaxed font-medium mb-6 md:mb-8 max-w-sm">
          Nerdklubben samlar personer <br /> som leder, bygger och <br />{" "}
          påverkar <br /> tech i Helsingborg. <br /> Här möts vi för att samtala
          om <br /> det som verkligen formar <br /> regionens framtid.
        </p>
      </div>

      {/* TEXT EXCLUSIV (Relative PÅ mobil / Absolute pÅ desktop) */}
      <div
        className="relative xl:absolute xl:right-24 xl:bottom-36 flex flex-col items-start xl:items-end z-10 
      text-left xl:text-right mt-6 xl:mt-0 px-2 xl:px-0"
      >
        <div className="mt-1 text-base text-slate-300 space-y-1">
          <p className="text-lg md:text-xl font-medium">
            Begränsat antal medlemmar. <br className="hidden lg:block" />{" "}
            Ansökan krävs.
          </p>
          <p className="text-xl md:text-2xl font-medium">
            I samarbete med Tech Trainee Talent
          </p>
        </div>
      </div>

      {/* BUTON ANSÖK (Relative pÅ mobil / Absolute pÅ desktop) */}
      <div className="relative xl:absolute xl:right-24 xl:bottom-10 z-10 mt-6 xl:mt-0 pb-12 xl:pb-0 px-2 xl:px-0 w-full sm:w-auto">
        <Link
          href="/ansokan"
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden
           rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white
            transition-all hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-900/30 w-full sm:w-auto"
        >
          <span>Ansök om medlemskap</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>

      {/* Dekorativ blå bakgrundsglöd centrerad längst upp*/}
      <div className="absolute top-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 bg-blue-500/10 blur-[120px] rounded-full" />
    </div>
  );
}

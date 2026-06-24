// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div
      className="relative flex min-h-[100vh] w-full flex-col items-start justify-between overflow-hidden px-8 sm:px-16 pt-12 pb-16 bg-no-repeat bg-top text-slate-100 select-none"
      style={{
        backgroundImage: "url('/background-hero.jpg')",
        backgroundSize: "450px auto",
        backgroundColor: "#000000",
      }}
    >
      {/* TOPPSEKTION: DATUM OCH TAGGAR (HÄMTAT FRÅN BROSCHYRENS FRAMSIDA) */}
      {/* BAKGRUNDSBILD (HÄMTAS FRÅN PUBLIC-MAPPEN OCH PLACERAS LÄNGST BAK) */}
      <div className="absolute inset-0 z-0 h-full w-full"></div>

      <h2 className="text-left text-xl ml-2 font-black tracking-tight text-sky-900/90 sm:text-3xl md:text-4xl mb-6">
        Nerdklubben
      </h2>

      <div className="mb-6 flex flex-col ml-3 items-center gap-3 md:flex-row md:gap-4">
        <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
          December 2026
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
      {/* STRATEGISK SUBRUBRIK OCH INTRODUKTIONSTEXT */}
      <div className="z-10 ml-0 max-w-2xl text-left px-4">
        <h2 className="text-lg font-bold tracking-wide text-slate-200 sm:text-xl uppercase mb-6 leading-tight">
          Ett
          <br />
          strategiskt <br />
          forum för <br />
          framtidens
          <br />
          techledare
        </h2>

        <p className="text-left text-sm sm:text-base text-gray-300 leading-relaxed font-medium mb-8 max-w-sm">
          Nerdklubben samlar personer <br />
          som leder, bygger och påverkar <br />
          tech i Helsingborg. <br />
          Här möts vi för att samtala om <br />
          det som verkligen formar <br />
          regionens framtid.
        </p>

        {/* EXKLUSIVITETSNOTIS (VIKTIG DETALJ FRÅN MATERIALET) */}
        <div className="mb-8 text-sm italic text-slate-500 space-y-1">
          <p>Begränsat antal medlemmar. Ansökan krävs.</p>
          <p className="text-xs not-italic text-slate-500 font-medium">
            I samarbete med Tech Trainee Talent
          </p>
        </div>

        {/* INTERAKTIV KNAPP FÖR ATT GÅ DIREKT TILL ANSÖKNINGSFORMULÄRET */}
        <div className="flex justify-start">
          <Link
            href="/ansokan"
            className="group relative inline-flex  items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-900/30"
          >
            Ansök om medlemskap
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
      </div>
      {/* VISUELL EFFEKT: RADIELLT LJUS SOM SIMULERAR LAMPAN ÖVER SCHACKBORDET */}
      <div className="absolute top-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 bg-blue-500/10 blur-[120px] rounded-full" />
    </div>
  );
}

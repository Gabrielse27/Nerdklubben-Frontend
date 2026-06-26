// app/formatet/page.tsx
import Image from "next/image";

export default function FormatetPage() {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white text-slate-900">
      {/* VÄNSTER KOLUMN: VIT BAKGRUND (FORMATET & BILD) */}
      <div className="bg-white flex flex-col justify-between">
        {/* TEXTSEKTION: FORMATET */}
        <div className="p-8 sm:p-12 md:p-16">
          <h1 className="text-4xl font-bold tracking-wider text-black mb-2">
            FORMATET
          </h1>
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Samtal med riktning
          </h2>

          <div className="space-y-6 text-sm sm:text-base text-slate-900 font-normal leading-relaxed">
            <p>
              Nerdklubben samlas en gång i månaden för att
              <br />
              nörda ner oss i det som verkligen spelar roll. Vi
              <br />
              möts i ett rum där samtalet får ta plats och där
              <br />
              tempot tillåter oss att tänka längre än vardagens
              <br />
              mötesrum ofta gör.
            </p>
            <p>
              I en bransch som rör sig snabbt och där beslut
              <br />
              ofta fattas under press behövs sammanhang där
              <br />
              perspektiven får breddas innan de snävas av. Här
              <br />
              ges utrymme att lyfta blicken från sprintar och
              <br />
              leveranser och istället diskutera de vägval som
              <br />
              påverkar riktningen över tid.
            </p>
            <p>
              Samtalen är fokuserade men öppna. Vi går från
              <br />
              konkreta tekniska utmaningar till större
              <br />
              strategiska frågor och tillbaka igen. Det handlar
              <br />
              inte om att enas snabbt, utan om att förstå
              <br />
              djupare.
            </p>
            <p className="pt-2 font-normal text-slate-900">
              Det är i den rörelsen som riktning formas.
            </p>
          </div>
        </div>

        {/* BILDSEKTION: PLACERAD LÄNGST NER I VÄNSTER KOLUMN */}
        <div className="relative h-[80vh] md:h-[85vh] w-full">
          <Image
            src="/formatet.jpg"
            alt="Nerdklubben lounge space"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* HÖGER KOLUMN: BLÅ BAKGRUND (TEMAN & TILLSAMMANS FRAMÅT) */}
      <div className="bg-[#467393] text-white p-8 sm:p-12 md:p-16 flex flex-col justify-start gap-12">
        {/* SEKTION 1: TEMAN */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Teman</h2>
          <div className="mt-8 space-y-4 text-base text-[#E1D3BE] font-normal leading-relaxed ">
            <p>
              Varje träff kretsar kring en konkret
              <br />
              fråga vi själva sitter med. Det kan
              <br />
              handla om hur vi implementerar AI
              <br />
              utan att tappa kontroll, hur vi skalar
              <br />
              system som redan är pressade eller
              <br />
              hur vi prioriterar rätt när teknik, affär
              <br />
              och organisation drar åt olika håll.
            </p>

            <p className="mt-8">
              Vi pratar om verkliga beslut, verkliga
              <br />
              kompromisser och verkliga
              <br />
              konsekvenser inte om teorier.
              <br />
              Samtalen rör det som påverkar våra
              <br />
              roadmap-val, våra team och våra
              <br />
              långsiktiga riktningar.
            </p>
            <p className="mt-8 text-[#E1D3BE] font-normal">
              Temana växer fram ur våra egna
              <br />
              utmaningar. <br />
              Det är där relevansen finns.
            </p>
          </div>
        </div>

        {/* SEKTION 2: TILLSAMMANS FRAMÅT */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-tight">
            Tillsammans framåt
          </h2>
          <div className=" mt-8 space-y-4 text-base font-light leading-relaxed text-[#E1D3BE]">
            <p>
              Nerdklubben samlar små till medelstora
              <br />
              bolag med gemensam ambition att
              <br />
              utvecklas tekniskt, organisatoriskt och
              <br />
              strategiskt. Här möts vi inte som
              <br />
              konkurrenter, utan som kollegor i samma
              <br />
              kommun.
            </p>
            <p className="mt-8">
              Vi delar erfarenheter, lär av varandras
              <br />
              misstag och öppnar upp för samarbeten
              <br />
              när det är rätt. Det handlar inte bara om
              <br />
              att utbyta idéer, utan om att skapa
              <br />
              relationer som gör oss starkare över tid.
            </p>
            <p className="mt-8">
              När ett bolag växer, stärks ekosystemet.
              <br />
              Och när vi delar kunskap, accelererar vi
              <br />
              tillsammans.
            </p>
          </div>
        </div>

        {/* FOOTER TEXT INUTI DEN BLÅ KOLUMNEN (NERDKLUBBEN LÄNGST NER) */}
        <div className="mt-auto pt-8 border-t border-white/10 text-right">
          <span className="text-sm font-bold tracking-widest text-slate-100/60 uppercase">
            Nerdklubben
          </span>
        </div>
      </div>
    </div>
  );
}
